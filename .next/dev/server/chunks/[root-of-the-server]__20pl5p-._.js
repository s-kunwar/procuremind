module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/agent/evaluate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agent$2f$procure$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/agent/procure-agent.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const { documentText } = await req.json();
        if (!documentText) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Document text is required.'
            }, {
                status: 400
            });
        }
        const evaluationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agent$2f$procure$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateVendorSubmission"])(documentText);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: evaluationResult
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Agent evaluation API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message || 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
"[project]/lib/agent/procure-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateVendorSubmission",
    ()=>evaluateVendorSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$evaluator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cascade/evaluator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/memory/procurement-memory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$cascadeflow$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cascade/cascadeflow-client.ts [app-route] (ecmascript)");
;
;
;
async function evaluateVendorSubmission(documentText) {
    const startOverall = Date.now();
    // Step 1: Extraction (Tier 1)
    const extractedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$evaluator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runTier1Extraction"])(documentText);
    // Step 2: Memory Recall
    const vendorMetadataForQuery = {
        category: "",
        dataResidency: extractedData.dataResidency,
        complianceCerts: extractedData.complianceCerts,
        pricingQuote: extractedData.pricingQuote
    };
    const historicalPrecedents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findPrecedentsForVendor"])(vendorMetadataForQuery);
    // Step 3: Escalation & Synthesis
    let statusVerdict = "APPROVED";
    let tier2Analysis;
    let escalationReason;
    let modelUsed = "gpt-4o-mini";
    let estimatedCost = 0;
    let wasEscalated = false;
    const escalationTriggeredByAmbiguity = extractedData.ambiguityScore > 40;
    const escalationTriggeredByHistory = historicalPrecedents.some((p)=>p.status === "REJECTED" && p.similarityScore > 0.8);
    if (escalationTriggeredByAmbiguity || escalationTriggeredByHistory) {
        wasEscalated = true;
        escalationReason = escalationTriggeredByAmbiguity ? `Ambiguity score (${extractedData.ambiguityScore}) too high.` : `Historical precedent found: ${historicalPrecedents[0]?.connectionExplanation}`; // Take first for simplicity
        const tier2Prompt = `Synthesize a final verdict (APPROVED, REJECTED, NEEDS_LEGAL_REVIEW) based on the following:
    Extracted Vendor Data: ${JSON.stringify(extractedData)}
    Historical Precedents: ${JSON.stringify(historicalPrecedents)}
    Original Document Snippet: ${documentText.substring(0, 500)}...
    Reason for escalation: ${escalationReason}
    Provide a detailed rationale for the verdict.
    `;
        const tier2Result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$cascadeflow$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cascadeFlowClient"].evaluateWithCascade(tier2Prompt, 2);
        tier2Analysis = tier2Result.response;
        modelUsed = tier2Result.modelUsed;
        estimatedCost = tier2Result.cost;
        // Determine final verdict from Tier 2 analysis (simplified for mock)
        if (tier2Analysis.includes("REJECTED")) {
            statusVerdict = "REJECTED";
        } else if (tier2Analysis.includes("NEEDS_LEGAL_REVIEW")) {
            statusVerdict = "NEEDS_LEGAL_REVIEW";
        } else {
            statusVerdict = "APPROVED";
        }
    } else {
        // If not escalated, a simple approval for demonstration
        statusVerdict = "APPROVED";
    }
    const endOverall = Date.now();
    const executionTimeMs = endOverall - startOverall;
    // Step 4: Memory Persistence
    const finalEvaluation = {
        id: `eval-${Date.now()}`,
        vendorName: extractedData.vendorName,
        category: "Cloud Analytics",
        status: statusVerdict,
        submissionDate: new Date(),
        metadata: {
            dataResidency: extractedData.dataResidency,
            pricingTier: extractedData.pricingQuote,
            certifications: extractedData.complianceCerts
        },
        rejectionReason: statusVerdict === "REJECTED" ? tier2Analysis : undefined,
        memorySummary: tier2Analysis || `Vendor ${extractedData.vendorName} ${statusVerdict.toLowerCase()} without escalation.`
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveVendorDecision"])(finalEvaluation);
    return {
        extractedMetadata: extractedData,
        statusVerdict,
        historicalPrecedentWarnings: historicalPrecedents,
        cascadeMetrics: {
            modelUsed,
            executionTimeMs,
            estimatedCost,
            wasEscalated,
            escalationReason,
            tier2Analysis
        }
    };
}
}),
"[project]/lib/cascade/cascadeflow-client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This is a mock CascadeFlow SDK. In a real application, you would import the actual SDK.
// For demonstration purposes, we'll simulate its behavior.
__turbopack_context__.s([
    "cascadeFlowClient",
    ()=>cascadeFlowClient
]);
const TIER_1_MODEL = {
    name: "gpt-4o-mini",
    costPerToken: 0.00015,
    latencyMs: 100
};
const TIER_2_MODEL = {
    name: "gpt-4o",
    costPerToken: 0.005,
    latencyMs: 500
};
class CascadeFlowClient {
    totalTokensUsed = 0;
    totalCostSaved = 0;
    async evaluateWithCascade(prompt, tier) {
        const model = tier === 1 ? TIER_1_MODEL : TIER_2_MODEL;
        const tokens = Math.floor(prompt.length / 4); // Very rough token estimation
        const cost = tokens / 1000 * model.costPerToken;
        this.totalTokensUsed += tokens;
        // For simplicity, assume Tier 2 is always more expensive, so any use of Tier 1 contributes to savings
        if (tier === 1) {
            const tier2Cost = tokens / 1000 * TIER_2_MODEL.costPerToken;
            this.totalCostSaved += tier2Cost - cost;
        }
        console.log(`Evaluating with ${model.name} (Tier ${tier}). Tokens: ${tokens}, Cost: $${cost.toFixed(5)}`);
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, model.latencyMs));
        return {
            response: `Response from ${model.name} for "${prompt.substring(0, 30)}..."`,
            modelUsed: model.name,
            cost: cost,
            latencyMs: model.latencyMs
        };
    }
    getCostTracking() {
        return {
            totalTokensUsed: this.totalTokensUsed,
            totalCostSaved: this.totalCostSaved
        };
    }
}
const cascadeFlowClient = new CascadeFlowClient();
}),
"[project]/lib/cascade/evaluator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkAndEscalate",
    ()=>checkAndEscalate,
    "runTier1Extraction",
    ()=>runTier1Extraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$cascadeflow$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cascade/cascadeflow-client.ts [app-route] (ecmascript)");
;
async function runTier1Extraction(documentText) {
    // Build a prompt to extract the information
    const prompt = `Extract the following details from this vendor document and return as JSON:
  - vendorName
  - dataResidency
  - complianceCerts (array of strings)
  - pricingQuote
  - ambiguityScore (number between 0 and 100 based on unclear legal or data storage terms)

  Document:
  ${documentText}`;
    // Call Tier 1 model
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$cascadeflow$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cascadeFlowClient"].evaluateWithCascade(prompt, 1);
    // Parse the mock/simulated result. For real-world we'd parse LLM JSON, 
    // here we parse or generate realistic data based on document contents for demonstration.
    const lowerText = documentText.toLowerCase();
    let vendorName = "Unknown Vendor";
    let dataResidency = "Unknown";
    let complianceCerts = [];
    let pricingQuote = "Not found";
    let ambiguityScore = 10;
    if (lowerText.includes("alpha analytics")) {
        vendorName = "Alpha Analytics";
        dataResidency = "EU-Central";
        complianceCerts = [
            "SOC2",
            "ISO27001"
        ];
        pricingQuote = "€15,000/year";
        ambiguityScore = 15;
    } else if (lowerText.includes("beta data storage")) {
        vendorName = "Beta Data Storage";
        dataResidency = "US-East";
        complianceCerts = [
            "SOC2"
        ];
        pricingQuote = "$25,000/year";
        ambiguityScore = 65; // High ambiguity
    }
    return {
        vendorName,
        dataResidency,
        complianceCerts,
        pricingQuote,
        ambiguityScore
    };
}
async function checkAndEscalate(extractedData, documentText, requiredRegions = [
    'EU-Central',
    'India-South'
]) {
    let wasEscalated = false;
    let escalationReason = '';
    if (extractedData.ambiguityScore > 40) {
        wasEscalated = true;
        escalationReason = `Ambiguity score (${extractedData.ambiguityScore}) exceeds threshold of 40.`;
    } else if (!requiredRegions.includes(extractedData.dataResidency)) {
        wasEscalated = true;
        escalationReason = `Data residency (${extractedData.dataResidency}) is not compliant with required regions (${requiredRegions.join(', ')}).`;
    }
    if (wasEscalated) {
        const prompt = `Perform heavy reasoning/compliance synthesis.
    Extract Data: ${JSON.stringify(extractedData)}
    Document: ${documentText}
    Reason for escalation: ${escalationReason}`;
        const start = Date.now();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cascade$2f$cascadeflow$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cascadeFlowClient"].evaluateWithCascade(prompt, 2);
        const latency = Date.now() - start;
        return {
            wasEscalated: true,
            escalationReason,
            finalAnalysis: `Escalated Analysis Response: ${result.response}`,
            modelUsed: result.modelUsed,
            cost: result.cost,
            latencyMs: latency
        };
    }
    return {
        wasEscalated: false,
        finalAnalysis: `Routine Pass Successful: No escalation required.`,
        modelUsed: 'gpt-4o-mini',
        cost: 0.00015,
        latencyMs: 100
    };
}
}),
"[project]/lib/memory/hindsight-client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hindsightClient",
    ()=>hindsightClient
]);
// This is a mock Hindsight SDK. In a real application, you would import the actual SDK.
// For demonstration purposes, we'll simulate its behavior.
class HindsightClient {
    memory = [];
    initialized = false;
    initHindsight() {
        console.log("Initializing Hindsight memory instance for company scope.");
        this.initialized = true;
    }
    recordVendorExperience(evaluation) {
        if (!this.initialized) {
            console.error("Hindsight not initialized. Call initHindsight() first.");
            return;
        }
        console.log(`Recording vendor experience for ${evaluation.vendorName}`);
        this.memory.push(evaluation);
    }
    recallPrecedents(query, constraints) {
        if (!this.initialized) {
            console.error("Hindsight not initialized. Call initHindsight() first.");
            return [];
        }
        console.log(`Recalling precedents for query: "${query}" with constraints:`, constraints);
        // Simulate semantic search and reflection
        return this.memory.filter((evaluation)=>{
            const queryMatch = evaluation.vendorName.includes(query) || evaluation.category.includes(query);
            const constraintMatch = Object.keys(constraints).every((key)=>{
                // Basic constraint matching for demonstration
                return evaluation[key] === constraints[key];
            });
            return queryMatch && constraintMatch;
        });
    }
}
const hindsightClient = new HindsightClient();
}),
"[project]/lib/memory/procurement-memory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findPrecedentsForVendor",
    ()=>findPrecedentsForVendor,
    "saveVendorDecision",
    ()=>saveVendorDecision
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/memory/hindsight-client.ts [app-route] (ecmascript)");
;
async function saveVendorDecision(decisionData) {
    console.log(`Saving vendor decision for ${decisionData.vendorName} into Hindsight memory.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hindsightClient"].recordVendorExperience(decisionData);
}
async function findPrecedentsForVendor(vendorMetadata) {
    console.log(`Finding precedents for vendor with metadata:`, vendorMetadata);
    const query = `Vendor in ${vendorMetadata.category} with data residency ${vendorMetadata.dataResidency} and certifications ${vendorMetadata.complianceCerts.join(', ')}. Pricing: ${vendorMetadata.pricingQuote}.`;
    // Simulate semantic search and reflection based on mock client capabilities
    const results = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hindsightClient"].recallPrecedents(query, {
        category: vendorMetadata.category,
        dataResidency: vendorMetadata.dataResidency
    });
    const precedents = results.map((evaluation)=>{
        let matchedReason = 'General similarity';
        let connectionExplanation = `Historical record for ${evaluation.vendorName}.`;
        let similarityScore = 0.7; // Default similarity
        if (evaluation.metadata.dataResidency === vendorMetadata.dataResidency && evaluation.status === 'REJECTED') {
            matchedReason = `Data residency mismatch: ${evaluation.rejectionReason}`;
            connectionExplanation = `Vendor's ${vendorMetadata.dataResidency} storage matches the data residency issue that caused ${evaluation.vendorName}'s rejection on ${evaluation.submissionDate.toDateString()}.`;
            similarityScore = 0.9;
        } else if (vendorMetadata.complianceCerts.some((cert)=>!evaluation.metadata.certifications.includes(cert))) {
            matchedReason = `Compliance shortfall: Missing certifications.`;
            connectionExplanation = `Vendor is missing some certifications present in ${evaluation.vendorName}'s historical record.`;
            similarityScore = 0.8;
        }
        return {
            historicalVendorName: evaluation.vendorName,
            status: evaluation.status,
            matchedReason,
            similarityScore,
            historicalDate: evaluation.submissionDate.toDateString(),
            connectionExplanation
        };
    });
    return precedents;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__20pl5p-._.js.map