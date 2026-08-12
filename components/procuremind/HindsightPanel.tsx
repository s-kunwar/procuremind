import React from 'react';
import { PrecedentMatch } from '../../lib/memory/procurement-memory';

interface HindsightPanelProps {
  precedents: PrecedentMatch[];
}

export const HindsightPanel: React.FC<HindsightPanelProps> = ({ precedents }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-stone-900">Hindsight Memory Recall Panel</h2>

      {precedents.length === 0 ? (
        <div className="text-center text-stone-500 text-sm py-4">
          No relevant historical precedents identified in the active context window.
        </div>
      ) : (
        <div className="space-y-4">
          {precedents.map((precedent, idx) => (
            <div key={idx} className="p-4 border border-stone-200 rounded hover:bg-stone-50 transition-colors space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-stone-900">{precedent.historicalVendorName}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    precedent.status === 'REJECTED'
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}
                >
                  {precedent.status}
                </span>
              </div>

              <div className="text-xs text-stone-500 flex justify-between">
                <span>Confidence Match: {(precedent.similarityScore * 100).toFixed(0)}%</span>
                <span>Date: {precedent.historicalDate}</span>
              </div>

              <div className="pt-2 border-t border-stone-100 text-sm text-stone-700 space-y-1">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Connection Explanation</span>
                <p className="text-xs leading-relaxed">{precedent.connectionExplanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
