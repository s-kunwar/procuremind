import { VendorEvaluation } from './schema';
import { hindsightClient } from "../memory/hindsight-client";
import { saveVendorDecision } from "../memory/procurement-memory";

export const mockVendorEvaluations: VendorEvaluation[] = [
  {
    id: 'vend-x-123',
    vendorName: 'Vendor X',
    category: 'Cloud Analytics',
    status: 'REJECTED',
    submissionDate: new Date(new Date().setMonth(new Date().getMonth() - 6)), // 6 months ago
    metadata: {
      dataResidency: 'US-East',
      pricingTier: 'Enterprise',
      certifications: ['ISO 27001'],
    },
    rejectionReason: 'Data stored in US-East; violates mandatory EU/India data-residency requirement.',
    memorySummary: 'Vendor X was rejected due to data residency issues, specifically storing data in US-East which conflicts with EU/India requirements.',
  },
];

// Seed memory item matching exact UI expectation
export const mockVendorXPrecedent = {
  historicalVendorName: "Vendor X",
  status: "REJECTED" as const,
  matchedReason: "Data stored in US-East; violates mandatory EU/India data-residency requirement.",
  similarityScore: 0.94,
  historicalDate: "6 months ago",
  connectionExplanation: "Data residency in US-East matches the policy violation that caused Vendor X's rejection."
};

export const initialUIState = {
  currentEvaluation: null as VendorEvaluation | null,
  evaluationHistory: mockVendorEvaluations,
  isLoading: false,
  error: null as string | null,
};

export async function seedHindsightMemory() {
    hindsightClient.initHindsight();
    console.log("Seeding Hindsight memory with mock data...");
    for (const evaluation of mockVendorEvaluations) {
        await saveVendorDecision(evaluation);
    }
    console.log("Hindsight memory seeded.");
}
