module.exports = [
"[project]/lib/db/mock-seed.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialUIState",
    ()=>initialUIState,
    "mockVendorEvaluations",
    ()=>mockVendorEvaluations,
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
];

//# sourceMappingURL=lib_db_mock-seed_ts_0pztovy._.js.map