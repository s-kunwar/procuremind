import { NextRequest, NextResponse } from 'next/server';
import { runTier1Extraction, checkAndEscalate, ExtructuredData, EscalationResult } from '../../../../lib/cascade/evaluator';
import { VendorEvaluation } from '../../../../lib/db/schema';

interface VendorEvaluationMetadata {
  vendorName: string;
  dataResidency: string;
  complianceCerts: string[];
  pricingQuote: string;
  ambiguityScore: number;
}

interface ApiResponse {
  success: boolean;
  metadata?: VendorEvaluationMetadata;
  cascadeMetrics?: {
    modelUsed: string;
    executionTimeMs: number;
    estimatedCost: number;
    wasEscalated: boolean;
    escalationReason?: string;
  };
  error?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  const start = Date.now();

  try {
    const { documentText }: { documentText: string } = await req.json();

    if (!documentText) {
      return NextResponse.json(
        { success: false, error: 'Document text is required.' },
        { status: 400 }
      );
    }

    // Tier 1 Extraction
    const extractedData: ExtructuredData = await runTier1Extraction(documentText);

    // Escalation Logic
    const escalationResult: EscalationResult = await checkAndEscalate(extractedData, documentText);

    const end = Date.now();
    const executionTimeMs = end - start;

    const responseMetadata: VendorEvaluationMetadata = {
      vendorName: extractedData.vendorName,
      dataResidency: extractedData.dataResidency,
      complianceCerts: extractedData.complianceCerts,
      pricingQuote: extractedData.pricingQuote,
      ambiguityScore: extractedData.ambiguityScore,
    };

    const cascadeMetrics = {
      modelUsed: escalationResult.modelUsed,
      executionTimeMs: executionTimeMs,
      estimatedCost: escalationResult.cost,
      wasEscalated: escalationResult.wasEscalated,
      escalationReason: escalationResult.escalationReason,
    };

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        metadata: responseMetadata,
        cascadeMetrics: cascadeMetrics,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Cascade API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
