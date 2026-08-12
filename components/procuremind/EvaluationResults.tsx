import React from 'react';
import { PrecedentMatch } from '../../lib/memory/procurement-memory';
import { ExtructuredData } from '../../lib/cascade/evaluator';

interface EvaluationResultsProps {
  verdict: 'APPROVED' | 'REJECTED' | 'NEEDS_LEGAL_REVIEW' | null;
  metadata: ExtructuredData | null;
  precedentWarnings: PrecedentMatch[];
}

export const EvaluationResults: React.FC<EvaluationResultsProps> = ({
  verdict,
  metadata,
  precedentWarnings,
}) => {
  if (!verdict) return null;

  const getVerdictBadgeStyles = (v: typeof verdict) => {
    switch (v) {
      case 'APPROVED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'REJECTED':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'NEEDS_LEGAL_REVIEW':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-stone-900">Evaluation Result</h2>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getVerdictBadgeStyles(
            verdict
          )}`}
        >
          {verdict}
        </span>
      </div>

      {metadata && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wider">Extracted Spec Specs</h3>
          <div className="border border-stone-200 rounded divide-y divide-stone-200 overflow-hidden">
            <div className="grid grid-cols-3 p-3 text-sm bg-stone-50">
              <span className="font-medium text-stone-500">Field</span>
              <span className="col-span-2 font-medium text-stone-500">Extracted Value</span>
            </div>
            <div className="grid grid-cols-3 p-3 text-sm">
              <span className="font-medium text-stone-600">Vendor Name</span>
              <span className="col-span-2 text-stone-900">{metadata.vendorName}</span>
            </div>
            <div className="grid grid-cols-3 p-3 text-sm">
              <span className="font-medium text-stone-600">Data Residency</span>
              <span className="col-span-2 text-stone-900">{metadata.dataResidency}</span>
            </div>
            <div className="grid grid-cols-3 p-3 text-sm">
              <span className="font-medium text-stone-600">Certifications</span>
              <span className="col-span-2 text-stone-900">
                {metadata.complianceCerts.length > 0 ? metadata.complianceCerts.join(', ') : 'None'}
              </span>
            </div>
            <div className="grid grid-cols-3 p-3 text-sm">
              <span className="font-medium text-stone-600">Pricing Quote</span>
              <span className="col-span-2 text-stone-900">{metadata.pricingQuote}</span>
            </div>
            <div className="grid grid-cols-3 p-3 text-sm">
              <span className="font-medium text-stone-600">Ambiguity Score</span>
              <span className="col-span-2 text-stone-900">
                <span
                  className={`font-semibold ${
                    metadata.ambiguityScore > 40 ? 'text-rose-600' : 'text-emerald-600'
                  }`}
                >
                  {metadata.ambiguityScore} / 100
                </span>
              </span>
            </div>
          </div>
        </div>
      )}

      {precedentWarnings.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wider">Hindsight Precedent Warnings</h3>
          {precedentWarnings.map((warning, idx) => (
            <div
              key={idx}
              className="p-4 bg-rose-50 border border-rose-100 rounded text-rose-950 text-sm space-y-2"
            >
              <div className="flex items-center justify-between font-semibold">
                <span>Matched: {warning.historicalVendorName}</span>
                <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                  {(warning.similarityScore * 100).toFixed(0)}% Match
                </span>
              </div>
              <p className="text-rose-900 text-xs">
                {warning.connectionExplanation}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
