
// This is a mock CascadeFlow SDK. In a real application, you would import the actual SDK.
// For demonstration purposes, we'll simulate its behavior.

interface ModelConfig {
  name: string;
  costPerToken: number; // Cost per 1k tokens for simplicity
  latencyMs: number;
}

const TIER_1_MODEL: ModelConfig = {
  name: "gpt-4o-mini",
  costPerToken: 0.00015, // Example cost
  latencyMs: 100,
};

const TIER_2_MODEL: ModelConfig = {
  name: "gpt-4o",
  costPerToken: 0.005, // Example cost
  latencyMs: 500,
};

class CascadeFlowClient {
  private totalTokensUsed: number = 0;
  private totalCostSaved: number = 0;

  public async evaluateWithCascade(
    prompt: string,
    tier: 1 | 2,
  ): Promise<{ response: string; modelUsed: string; cost: number; latencyMs: number }> {
    const model = tier === 1 ? TIER_1_MODEL : TIER_2_MODEL;
    const tokens = Math.floor(prompt.length / 4); // Very rough token estimation
    const cost = (tokens / 1000) * model.costPerToken;

    this.totalTokensUsed += tokens;
    // For simplicity, assume Tier 2 is always more expensive, so any use of Tier 1 contributes to savings
    if (tier === 1) {
      const tier2Cost = (tokens / 1000) * TIER_2_MODEL.costPerToken;
      this.totalCostSaved += (tier2Cost - cost);
    }

    console.log(`Evaluating with ${model.name} (Tier ${tier}). Tokens: ${tokens}, Cost: $${cost.toFixed(5)}`);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, model.latencyMs));

    return {
      response: `Response from ${model.name} for "${prompt.substring(0, 30)}..."`,
      modelUsed: model.name,
      cost: cost,
      latencyMs: model.latencyMs,
    };
  }

  public getCostTracking(): { totalTokensUsed: number; totalCostSaved: number } {
    return {
      totalTokensUsed: this.totalTokensUsed,
      totalCostSaved: this.totalCostSaved,
    };
  }
}

export const cascadeFlowClient = new CascadeFlowClient();
