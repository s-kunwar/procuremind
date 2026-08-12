import { NextRequest, NextResponse } from 'next/server';
import { findPrecedentsForVendor, PrecedentMatch } from '../../../../lib/memory/procurement-memory';
import { hindsightClient } from '../../../../lib/memory/hindsight-client';

interface QaApiResponse {
  success: boolean;
  answer?: string;
  referencedPrecedents?: PrecedentMatch[];
  error?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<QaApiResponse>> {
  try {
    const { question, vendorName }: { question: string; vendorName?: string } = await req.json();

    if (!question) {
      return NextResponse.json(
        { success: false, error: 'Question is required.' },
        { status: 400 }
      );
    }

    let answer = "";
    let referencedPrecedents: PrecedentMatch[] = [];

    // Simulate querying Hindsight memory for conversational QA
    if (vendorName) {
      // Try to find the specific vendor's evaluation from hindsight
      const vendorEvaluations = hindsightClient.recallPrecedents(vendorName, { vendorName: vendorName });
      if (vendorEvaluations.length > 0) {
        const latestEvaluation = vendorEvaluations[vendorEvaluations.length - 1]; // Get the most recent
        answer = `Regarding ${vendorName}: The latest evaluation status was ${latestEvaluation.status}.`;
        if (latestEvaluation.rejectionReason) {
          answer += ` It was rejected because: ${latestEvaluation.rejectionReason}.`;
        }
        if (latestEvaluation.memorySummary) {
          answer += ` Key summary: ${latestEvaluation.memorySummary}`; 
        }

        // Find related precedents for context
        const relatedPrecedents = await findPrecedentsForVendor({
          category: latestEvaluation.category,
          dataResidency: latestEvaluation.metadata.dataResidency,
          complianceCerts: latestEvaluation.metadata.certifications,
          pricingQuote: latestEvaluation.metadata.pricingTier,
        });
        referencedPrecedents = relatedPrecedents.filter(p => p.historicalVendorName !== vendorName); // Exclude self

        if (referencedPrecedents.length > 0) {
            answer += `\nThis decision relates to historical cases such as: ${referencedPrecedents.map(p => p.connectionExplanation).join(" ")}.`;
        }
      } else {
        answer = `Could not find a detailed evaluation for ${vendorName} in memory.`;
      }
    } else {
      // General query against memory (simplified)
      answer = `For the question: "${question}", I can look up general precedents. If you provide a vendor name, I can give more specific details.`;
      // In a real system, a general semantic search would be performed here.
    }

    return NextResponse.json<QaApiResponse>(
      {
        success: true,
        answer,
        referencedPrecedents,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Agent QA API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
