import { NextRequest, NextResponse } from 'next/server';
import { evaluateVendorSubmission, EvaluationResult } from '../../../../lib/agent/procure-agent';

interface EvaluateApiResponse {
  success: boolean;
  data?: EvaluationResult;
  error?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<EvaluateApiResponse>> {
  try {
    const { documentText }: { documentText: string } = await req.json();

    if (!documentText) {
      return NextResponse.json(
        { success: false, error: 'Document text is required.' },
        { status: 400 }
      );
    }

    const evaluationResult: EvaluationResult = await evaluateVendorSubmission(documentText);

    return NextResponse.json<EvaluateApiResponse>(
      {
        success: true,
        data: evaluationResult,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Agent evaluation API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
