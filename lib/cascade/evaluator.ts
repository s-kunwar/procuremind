import { cascadeFlowClient } from './cascadeflow-client';

export interface ExtructuredData {
  vendorName: string;
  dataResidency: string;
  complianceCerts: string[];
  pricingQuote: string;
  ambiguityScore: number;
}

export async function runTier1Extraction(documentText: string): Promise<ExtructuredData> {
  // Build a prompt to extract the information
  const prompt = `Extract the following details from this vendor document and return as JSON:
  - vendorName
  - dataResidency
  - complianceCerts (array of strings)
  - pricingQuote
  - ambiguityScore (number between 0 and 100 based on unclear legal or data storage terms)

  Document:
  ${documentText}`;

  // Call Tier 1 model
  const result = await cascadeFlowClient.evaluateWithCascade(prompt, 1);
  
  // Parse the mock/simulated result. For real-world we'd parse LLM JSON, 
  // here we parse or generate realistic data based on document contents for demonstration.
  const lowerText = documentText.toLowerCase();
  let vendorName = "Unknown Vendor";
  let dataResidency = "Unknown";
  let complianceCerts: string[] = [];
  let pricingQuote = "Not found";
  let ambiguityScore = 10;

  if (lowerText.includes("alpha analytics")) {
    vendorName = "Alpha Analytics";
    dataResidency = "EU-Central";
    complianceCerts = ["SOC2", "ISO27001"];
    pricingQuote = "€15,000/year";
    ambiguityScore = 15;
  } else if (lowerText.includes("beta data storage")) {
    vendorName = "Beta Data Storage";
    dataResidency = "US-East";
    complianceCerts = ["SOC2"];
    pricingQuote = "$25,000/year";
    ambiguityScore = 65; // High ambiguity
  }

  return {
    vendorName,
    dataResidency,
    complianceCerts,
    pricingQuote,
    ambiguityScore,
  };
}

export interface EscalationResult {
  wasEscalated: boolean;
  escalationReason?: string;
  finalAnalysis: string;
  modelUsed: string;
  cost: number;
  latencyMs: number;
}

export async function checkAndEscalate(
  extractedData: ExtructuredData,
  documentText: string,
  requiredRegions: string[] = ['EU-Central', 'India-South']
): Promise<EscalationResult> {
  let wasEscalated = false;
  let escalationReason = '';

  if (extractedData.ambiguityScore > 40) {
    wasEscalated = true;
    escalationReason = `Ambiguity score (${extractedData.ambiguityScore}) exceeds threshold of 40.`;
  } else if (!requiredRegions.includes(extractedData.dataResidency)) {
    wasEscalated = true;
    escalationReason = `Data residency (${extractedData.dataResidency}) is not compliant with required regions (${requiredRegions.join(', ')}).`;
  }

  if (wasEscalated) {
    const prompt = `Perform heavy reasoning/compliance synthesis.
    Extract Data: ${JSON.stringify(extractedData)}
    Document: ${documentText}
    Reason for escalation: ${escalationReason}`;

    const start = Date.now();
    const result = await cascadeFlowClient.evaluateWithCascade(prompt, 2);
    const latency = Date.now() - start;

    return {
      wasEscalated: true,
      escalationReason,
      finalAnalysis: `Escalated Analysis Response: ${result.response}`,
      modelUsed: result.modelUsed,
      cost: result.cost,
      latencyMs: latency,
    };
  }

  return {
    wasEscalated: false,
    finalAnalysis: `Routine Pass Successful: No escalation required.`,
    modelUsed: 'gpt-4o-mini',
    cost: 0.00015, // base gpt-4o-mini cost simulated
    latencyMs: 100,
  };
}
