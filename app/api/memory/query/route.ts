import { NextRequest, NextResponse } from 'next/server';
import { findPrecedentsForVendor, PrecedentMatch } from '../../../../lib/memory/procurement-memory';

interface VendorEvaluationMetadata {
  category: string;
  dataResidency: string;
  complianceCerts: string[];
  pricingQuote: string;
}

interface ApiResponse {
  success: boolean;
  hasPrecedentMatch: boolean;
  precedents: PrecedentMatch[];
  error?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();
    const { vendorMetadata, query }: { vendorMetadata?: VendorEvaluationMetadata; query?: string } = body;

    if (query === 'initialize') {
      const { seedHindsightMemory } = await import('../../../../lib/db/mock-seed');
      await seedHindsightMemory();
      return NextResponse.json<ApiResponse>(
        { success: true, hasPrecedentMatch: false, precedents: [] },
        { status: 200 }
      );
    }

    if (!vendorMetadata && !query) {
      return NextResponse.json(
        { success: false, hasPrecedentMatch: false, precedents: [], error: 'Either vendorMetadata or a direct query is required.' },
        { status: 400 }
      );
    }

    let precedents: PrecedentMatch[] = [];

    if (vendorMetadata) {
      precedents = await findPrecedentsForVendor(vendorMetadata);
    } else if (query) {
      // In a real scenario, you would use hindsightClient.recallPrecedents(query, {}) here
      // For this mock, we'll simulate a general search or return empty if no vendorMetadata
      console.log(`Direct memory query: "${query}"`);
      precedents = []; // Simulated: direct query not fully implemented in mock hindsight-client
    }

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        hasPrecedentMatch: precedents.length > 0,
        precedents: precedents,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Memory query API error:", error);
    return NextResponse.json(
      { success: false, hasPrecedentMatch: false, precedents: [], error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
