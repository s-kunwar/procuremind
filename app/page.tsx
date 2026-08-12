'use client';

import React, { useEffect, useState } from 'react';
import { MetricsHeader } from '../components/procuremind/MetricsHeader';
import { VendorInputStudio } from '../components/procuremind/VendorInputStudio';
import { EvaluationResults } from '../components/procuremind/EvaluationResults';
import { CascadeflowLog } from '../components/procuremind/CascadeflowLog';
import { HindsightPanel } from '../components/procuremind/HindsightPanel';
import { ConversationalQA } from '../components/procuremind/ConversationalQA';
import { EvaluationResult } from '../lib/agent/procure-agent';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);
  
  // Real stats / simulated based on active state
  const [stats, setStats] = useState({
    totalEvaluated: 1, // Start with Vendor X
    costSavedPercent: 85.0, // base cascadeflow routing saving mock
    memoryPrecedentsCount: 1, // Vendor X
  });

  // Seed on mount
  useEffect(() => {
    // Seed Hindsight with Vendor X
    fetch('/api/memory/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'initialize' }),
    }).catch(console.error);
  }, []);

  const handleEvaluate = async (text: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/agent/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentText: text }),
      });
      const payload = await res.json();
      if (payload.success) {
        setEvaluationResult(payload.data);
        // Increment metrics on evaluation success
        setStats(prev => ({
          totalEvaluated: prev.totalEvaluated + 1,
          costSavedPercent: payload.data.cascadeMetrics.wasEscalated ? prev.costSavedPercent - 2 : prev.costSavedPercent + 1,
          memoryPrecedentsCount: prev.memoryPrecedentsCount + 1,
        }));
      }
    } catch (err) {
      console.error("Evaluation error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 text-stone-900">
      <div className="max-w-7xl mx-auto space-y-8">
        <MetricsHeader
          totalEvaluated={stats.totalEvaluated}
          costSavedPercent={stats.costSavedPercent}
          memoryPrecedentsCount={stats.memoryPrecedentsCount}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <VendorInputStudio onEvaluate={handleEvaluate} isLoading={isLoading} />
            <EvaluationResults
              verdict={evaluationResult ? evaluationResult.statusVerdict : null}
              metadata={evaluationResult ? evaluationResult.extractedMetadata : null}
              precedentWarnings={evaluationResult ? evaluationResult.historicalPrecedentWarnings : []}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <CascadeflowLog metrics={evaluationResult ? evaluationResult.cascadeMetrics : null} />
            <HindsightPanel precedents={evaluationResult ? evaluationResult.historicalPrecedentWarnings : []} />
          </div>
        </div>

        {/* Bottom Interactive QA Section */}
        <div className="pt-8 border-t border-stone-200">
          <ConversationalQA />
        </div>
      </div>
    </main>
  );
}
