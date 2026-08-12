import React from 'react';

interface CascadeflowLogProps {
  metrics: {
    modelUsed: string;
    executionTimeMs: number;
    estimatedCost: number;
    wasEscalated: boolean;
    escalationReason?: string;
    tier2Analysis?: string;
  } | null;
}

export const CascadeflowLog: React.FC<CascadeflowLogProps> = ({ metrics }) => {
  if (!metrics) {
    return (
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm text-center text-stone-500 text-sm">
        No evaluation has been run yet. Run an evaluation to view the execution trace.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-stone-900">Cascadeflow Model Route Inspector</h2>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Extracted Model (Tier 1)</span>
          <span className="font-mono text-stone-800 bg-stone-100 px-2 py-0.5 rounded text-xs">gpt-4o-mini</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Escalation Triggered</span>
          <span
            className={`font-semibold text-xs px-2 py-0.5 rounded ${
              metrics.wasEscalated
                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            {metrics.wasEscalated ? 'YES' : 'NO'}
          </span>
        </div>

        {metrics.wasEscalated && (
          <>
            <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs space-y-1 text-stone-700">
              <span className="font-semibold block text-stone-900">Escalation Reason:</span>
              <p>{metrics.escalationReason}</p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-stone-500 font-medium">Flagship Model (Tier 2)</span>
              <span className="font-mono text-stone-800 bg-stone-100 px-2 py-0.5 rounded text-xs">
                {metrics.modelUsed}
              </span>
            </div>
          </>
        )}

        <div className="pt-2 border-t border-stone-100 grid grid-cols-2 gap-4 text-center">
          <div className="p-2 bg-stone-50 rounded">
            <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">Execution Latency</span>
            <p className="text-lg font-bold text-stone-800 mt-0.5">{metrics.executionTimeMs}ms</p>
          </div>
          <div className="p-2 bg-stone-50 rounded">
            <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">Estimated Cost</span>
            <p className="text-lg font-bold text-stone-800 mt-0.5">${metrics.estimatedCost.toFixed(5)}</p>
          </div>
        </div>

        {metrics.tier2Analysis && (
          <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
            <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">Tier 2 Synthesis / Verdict Reasoning</span>
            <div className="p-3 bg-stone-50 rounded text-sm text-stone-800 font-mono leading-relaxed max-h-48 overflow-y-auto border border-stone-200">
              {metrics.tier2Analysis}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
