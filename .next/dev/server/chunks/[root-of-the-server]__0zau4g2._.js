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
"[project]/app/api/agent/qa/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/memory/procurement-memory.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/memory/hindsight-client.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        const { question, vendorName } = await req.json();
        if (!question) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Question is required.'
            }, {
                status: 400
            });
        }
        let answer = "";
        let referencedPrecedents = [];
        // Simulate querying Hindsight memory for conversational QA
        if (vendorName) {
            // Try to find the specific vendor's evaluation from hindsight
            const vendorEvaluations = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hindsightClient"].recallPrecedents(vendorName, {
                vendorName: vendorName
            });
            if (vendorEvaluations.length > 0) {
                const latestEvaluation = vendorEvaluations[vendorEvaluations.length - 1]; // Get the most recent
                answer = `Regarding ${vendorName}: The latest evaluation status was ${latestEvaluation.status}.`;
                if (latestEvaluation.rejectionReason) {
                    answer += ` It was rejected because: ${latestEvaluation.rejectionReason}.`;
                }
                if (latestEvaluation.memorySummary) {
                    answer += ` Key summary: ${latestEvaluation.memorySummary}`;
                }
                // Find related precedents for context
                const relatedPrecedents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findPrecedentsForVendor"])({
                    category: latestEvaluation.category,
                    dataResidency: latestEvaluation.metadata.dataResidency,
                    complianceCerts: latestEvaluation.metadata.certifications,
                    pricingQuote: latestEvaluation.metadata.pricingTier
                });
                referencedPrecedents = relatedPrecedents.filter((p)=>p.historicalVendorName !== vendorName); // Exclude self
                if (referencedPrecedents.length > 0) {
                    answer += `\nThis decision relates to historical cases such as: ${referencedPrecedents.map((p)=>p.connectionExplanation).join(" ")}.`;
                }
            } else {
                answer = `Could not find a detailed evaluation for ${vendorName} in memory.`;
            }
        } else {
            // General query against memory (simplified)
            answer = `For the question: "${question}", I can look up general precedents. If you provide a vendor name, I can give more specific details.`;
        // In a real system, a general semantic search would be performed here.
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            answer,
            referencedPrecedents
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Agent QA API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message || 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
"[project]/lib/db/mock-seed.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialUIState",
    ()=>initialUIState,
    "mockVendorEvaluations",
    ()=>mockVendorEvaluations,
    "mockVendorXPrecedent",
    ()=>mockVendorXPrecedent,
    "seedHindsightMemory",
    ()=>seedHindsightMemory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/memory/hindsight-client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/memory/procurement-memory.ts [app-route] (ecmascript)");
;
;
const mockVendorEvaluations = [
    {
        id: 'vend-x-123',
        vendorName: 'Vendor X',
        category: 'Cloud Analytics',
        status: 'REJECTED',
        submissionDate: new Date(new Date().setMonth(new Date().getMonth() - 6)),
        metadata: {
            dataResidency: 'US-East',
            pricingTier: 'Enterprise',
            certifications: [
                'ISO 27001'
            ]
        },
        rejectionReason: 'Data stored in US-East; violates mandatory EU/India data-residency requirement.',
        memorySummary: 'Vendor X was rejected due to data residency issues, specifically storing data in US-East which conflicts with EU/India requirements.'
    }
];
const mockVendorXPrecedent = {
    historicalVendorName: "Vendor X",
    status: "REJECTED",
    matchedReason: "Data stored in US-East; violates mandatory EU/India data-residency requirement.",
    similarityScore: 0.94,
    historicalDate: "6 months ago",
    connectionExplanation: "Data residency in US-East matches the policy violation that caused Vendor X's rejection."
};
const initialUIState = {
    currentEvaluation: null,
    evaluationHistory: mockVendorEvaluations,
    isLoading: false,
    error: null
};
async function seedHindsightMemory() {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hindsightClient"].initHindsight();
    console.log("Seeding Hindsight memory with mock data...");
    for (const evaluation of mockVendorEvaluations){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$procurement$2d$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveVendorDecision"])(evaluation);
    }
    console.log("Hindsight memory seeded.");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/mock-seed.ts [app-route] (ecmascript)");
;
;
async function saveVendorDecision(decisionData) {
    console.log(`Saving vendor decision for ${decisionData.vendorName} into Hindsight memory.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hindsightClient"].recordVendorExperience(decisionData);
}
async function findPrecedentsForVendor(vendorMetadata) {
    console.log(`Finding precedents for vendor with metadata:`, vendorMetadata);
    const precedents = [];
    // Fallback check to guarantee the Vendor X precedent triggers on US-based queries
    if (vendorMetadata.dataResidency.toUpperCase().includes("US")) {
        precedents.push({
            historicalVendorName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockVendorXPrecedent"].historicalVendorName,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockVendorXPrecedent"].status,
            matchedReason: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockVendorXPrecedent"].matchedReason,
            similarityScore: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockVendorXPrecedent"].similarityScore,
            historicalDate: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockVendorXPrecedent"].historicalDate,
            connectionExplanation: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$mock$2d$seed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockVendorXPrecedent"].connectionExplanation
        });
    }
    // Also query mock recall system
    const query = `Vendor in ${vendorMetadata.category} with data residency ${vendorMetadata.dataResidency}.`;
    const results = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$memory$2f$hindsight$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hindsightClient"].recallPrecedents(query, {
        category: vendorMetadata.category
    });
    results.forEach((evaluation)=>{
        // Avoid duplicating Vendor X if already added
        if (evaluation.vendorName === "Vendor X" && vendorMetadata.dataResidency.toUpperCase().includes("US")) {
            return;
        }
        let matchedReason = 'General similarity';
        let connectionExplanation = `Historical record for ${evaluation.vendorName}.`;
        let similarityScore = 0.7;
        if (evaluation.metadata.dataResidency === vendorMetadata.dataResidency && evaluation.status === 'REJECTED') {
            matchedReason = `Data residency mismatch: ${evaluation.rejectionReason}`;
            connectionExplanation = `Vendor's ${vendorMetadata.dataResidency} storage matches the data residency issue that caused ${evaluation.vendorName}'s rejection.`;
            similarityScore = 0.94;
        }
        precedents.push({
            historicalVendorName: evaluation.vendorName,
            status: evaluation.status,
            matchedReason,
            similarityScore,
            historicalDate: evaluation.submissionDate.toDateString(),
            connectionExplanation
        });
    });
    return precedents;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0zau4g2._.js.map