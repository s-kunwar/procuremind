
export interface VendorEvaluation {
  id: string;
  vendorName: string;
  category: string;
  status: 'APPROVED' | 'REJECTED' | 'UNDER_REVIEW';
  submissionDate: Date;
  metadata: {
    dataResidency: string;
    pricingTier: string;
    certifications: string[];
  };
  rejectionReason?: string;
  memorySummary?: string;
}

export interface EvaluationLog {
  id: string;
  vendorId: string;
  step: string;
  modelUsed: string;
  cost: number;
  latencyMs: number;
  escalated: boolean;
  logMessage: string;
}
