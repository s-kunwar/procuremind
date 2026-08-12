import React from 'react';

interface MetricsHeaderProps {
  totalEvaluated: number;
  costSavedPercent: number;
  memoryPrecedentsCount: number;
}

export const MetricsHeader: React.FC<MetricsHeaderProps> = ({
  totalEvaluated,
  costSavedPercent,
  memoryPrecedentsCount,
}) => {
  return (
    <div className="w-full mb-8">
      <div className="border-b border-stone-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">ProcureMind</h1>
        <p className="text-stone-500 mt-1">Institutional Procurement Memory & Cascade Intelligence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Total Vendors Evaluated</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">{totalEvaluated}</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Model Cost Saved</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">{costSavedPercent.toFixed(1)}%</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Active Memory Precedents</p>
          <p className="text-3xl font-bold text-stone-900 mt-2">{memoryPrecedentsCount}</p>
        </div>
      </div>
    </div>
  );
};
