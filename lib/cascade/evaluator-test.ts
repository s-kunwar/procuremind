import { runTier1Extraction, checkAndEscalate } from './evaluator';

const sampleADocument = `
  Vendor Proposal: Alpha Analytics

  We are Alpha Analytics, a leading provider of cloud-based data analytics solutions.
  Our primary data centers are located in the EU-Central region, ensuring full compliance
  with GDPR and other European data residency requirements. We hold SOC2 Type II and ISO27001 certifications.
  Our pricing starts at €15,000 per year for enterprise clients. All legal terms are clear and explicitly stated.
`;

const sampleBDocument = `
  Vendor Proposal: Beta Data Storage

  Beta Data Storage offers scalable data storage solutions. Our infrastructure primarily
  utilizes servers in the US-East region. We maintain SOC2 certification. Our pricing
  is around $25,000 annually. Data storage terms are subject to our standard terms of service,
  which can be found on our website. Specific data residency guarantees may vary.
`;

async function runTests() {
  console.log("\n--- Running Tier 1 Extraction (Sample A) ---");
  const extractedA = await runTier1Extraction(sampleADocument);
  console.log("Extracted Data (Sample A):", extractedA);

  console.log("\n--- Running Escalation Logic (Sample A) ---");
  const escalationA = await checkAndEscalate(extractedA, sampleADocument);
  console.log("Escalation Result (Sample A):", escalationA);

  console.log("\n--- Running Tier 1 Extraction (Sample B) ---");
  const extractedB = await runTier1Extraction(sampleBDocument);
  console.log("Extracted Data (Sample B):", extractedB);

  console.log("\n--- Running Escalation Logic (Sample B) ---");
  const escalationB = await checkAndEscalate(extractedB, sampleBDocument);
  console.log("Escalation Result (Sample B):", escalationB);

  console.log("\n--- Cost Tracking Summary ---");
  // To access actual cost tracking, we would need to expose it from cascadeFlowClient or pass it through
  // For this mock, we can assume costs are logged within the client.
}

runTests();
