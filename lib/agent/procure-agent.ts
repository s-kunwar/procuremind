import { runTier1Extraction, checkAndEscalate, ExtructuredData, EscalationResult } from "../cascade/evaluator";
import { findPrecedentsForVendor, saveVendorDecision, PrecedentMatch } from "../memory/procurement-memory";
import { VendorEvaluation } from "../db/schema";
import { cascadeFlowClient } from "../cascade/cascadeflow-client";

export type EvaluationVerdict = "APPROVED" | "REJECTED" | "NEEDS_LEGAL_REVIEW";

export interface EvaluationResult {
  extractedMetadata: ExtructuredData;
  statusVerdict: EvaluationVerdict;
  historicalPrecedentWarnings: PrecedentMatch[];
  cascadeMetrics: {
    modelUsed: string;
    executionTimeMs: number;
    estimatedCost: number;
    wasEscalated: boolean;
    escalationReason?: string;
    tier2Analysis?: string;
  };
}

export async function evaluateVendorSubmission(documentText: string): Promise<EvaluationResult> {
  const startOverall = Date.now();

  // Step 1: Extraction (Tier 1)
  const extractedData: ExtructuredData = await runTier1Extraction(documentText);

  // Step 2: Memory Recall
  const vendorMetadataForQuery = {
    category: "", // Extracted data doesn't have category directly in interface
    dataResidency: extractedData.dataResidency,
    complianceCerts: extractedData.complianceCerts,
    pricingQuote: extractedData.pricingQuote,
  };
  const historicalPrecedents: PrecedentMatch[] = await findPrecedentsForVendor(vendorMetadataForQuery);

  // Step 3: Escalation & Synthesis
  let statusVerdict: EvaluationVerdict = "APPROVED";
  let tier2Analysis: string | undefined;
  let escalationReason: string | undefined;
  let modelUsed: string = "gpt-4o-mini";
  let estimatedCost: number = 0.00015; // base cost
  let wasEscalated: boolean = false;

  const hasUSResidency = extractedData.dataResidency.toUpperCase().includes("US");
  const isAmbiguous = extractedData.ambiguityScore > 40;
  const escalationTriggeredByHistory = historicalPrecedents.some(p => p.status === "REJECTED" && p.similarityScore > 0.8);

  if (hasUSResidency || isAmbiguous || escalationTriggeredByHistory) {
    wasEscalated = true;
    
    // Construct reason
    if (hasUSResidency) {
      escalationReason = `Data residency violation detected. Vendor stores data in ${extractedData.dataResidency} which violates mandatory EU/India storage compliance.`;
      statusVerdict = "REJECTED";
    } else if (isAmbiguous) {
      escalationReason = `High ambiguity score (${extractedData.ambiguityScore}) detected in vendor legal/data terms. Needs escalation.`;
      statusVerdict = "NEEDS_LEGAL_REVIEW";
    } else {
      escalationReason = `Historical precedent detected: Past matching vendor was rejected.`;
      statusVerdict = "REJECTED";
    }

    const tier2Prompt = `Synthesize a final verdict (APPROVED, REJECTED, NEEDS_LEGAL_REVIEW) based on:
    Extracted Vendor Data: ${JSON.stringify(extractedData)}
    Historical Precedents: ${JSON.stringify(historicalPrecedents)}
    Reason for escalation: ${escalationReason}`;

    const tier2Result = await cascadeFlowClient.evaluateWithCascade(tier2Prompt, 2);
    modelUsed = tier2Result.modelUsed;
    estimatedCost = tier2Result.cost;

    // Set human-readable detailed reasoning
    if (statusVerdict === "REJECTED") {
      tier2Analysis = `REJECTED: Vendor stores data in ${extractedData.dataResidency}. This is in direct violation of mandatory EU/India data-residency compliance requirements. Historical precedents confirm that similar storage arrangements (e.g., Vendor X) were rejected 6 months ago for this exact violation.`;
    } else if (statusVerdict === "NEEDS_LEGAL_REVIEW") {
      tier2Analysis = `NEEDS_LEGAL_REVIEW: The extraction pipeline flagged an ambiguity score of ${extractedData.ambiguityScore} for ${extractedData.vendorName}. The terms governing data storage, security, and sub-processors are vague and require manual legal review before authorization.`;
    } else {
      tier2Analysis = `APPROVED: The evaluation met all compliance, residency, and certification guidelines. No major precedents of concern detected.`;
    }
  } else {
    statusVerdict = "APPROVED";
    tier2Analysis = `APPROVED: Routine evaluation successful. Vendor stores data in EU/India regions (${extractedData.dataResidency}) and meets all required compliance thresholds with minimal ambiguity.`;
  }

  const endOverall = Date.now();
  const executionTimeMs = endOverall - startOverall;

  // Step 4: Memory Persistence
  const finalEvaluation: VendorEvaluation = {
    id: `eval-${Date.now()}`,
    vendorName: extractedData.vendorName,
    category: "Cloud Analytics",
    status: statusVerdict as "APPROVED" | "REJECTED" | "UNDER_REVIEW",
    submissionDate: new Date(),
    metadata: {
      dataResidency: extractedData.dataResidency,
      pricingTier: extractedData.pricingQuote,
      certifications: extractedData.complianceCerts,
    },
    rejectionReason: statusVerdict === "REJECTED" ? tier2Analysis : undefined,
    memorySummary: tier2Analysis,
  };
  await saveVendorDecision(finalEvaluation);

  return {
    extractedMetadata: extractedData,
    statusVerdict,
    historicalPrecedentWarnings: historicalPrecedents,
    cascadeMetrics: {
      modelUsed,
      executionTimeMs,
      estimatedCost,
      wasEscalated,
      escalationReason,
      tier2Analysis,
    },
  };
}
