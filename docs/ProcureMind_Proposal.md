# ProcureMind — Hackathon Proposal & Short Research Paper

Team
- Leader: Suraj Kunwar
- Members: Archit Aryan, Aanjaney Dwivedi

Abstract
ProcureMind is an innovative procurement intelligence system that eliminates duplicated compliance work, prevents data‑residency violations, and reduces evaluation cost and latency through a two‑pillar architecture: institutional memory and model cascading. This hackathon‑oriented proposal presents a focused, demoable MVP, execution plan, and evaluation metrics designed to win by showing immediate impact, novelty, and feasibility.

1. Problem Statement
Large enterprises face repeated, redundant legal and compliance reviews of vendor proposals that are materially similar. This results in:
- Wasted legal/compliance hours and slow procurement cycles.
- Missed jurisdictional or policy constraints (e.g., EU GDPR, India data‑residency requirements).
- High compute cost and latency when flagship LLMs are used naively for every evaluation.

2. Objectives (Hackathon MVP)
Primary objective: Deliver a working, demoable prototype that accepts vendor documents, extracts structured metadata, checks institutional precedents, and returns either an automated outcome or an escalated, high‑assurance analysis—while demonstrating measurable cost and latency advantages.
Specific goals:
- Accurate metadata extraction (vendorName, dataResidency, complianceCerts, pricingQuote).
- Precedent recall with explainable connection to historical decisions.
- Ambiguity scoring and cascade decision logic to minimize flagship model usage.
- A simple dashboard for live demo with seeded memory and benchmark metrics.

3. Target Audience & Impact
Primary: Enterprise procurement, legal, and compliance teams.
Secondary: Risk auditors, procurement platform operators, vendor managers.
Impact: Faster procurement cycles, fewer regulatory slips, and major savings on LLM spend.

4. Core Innovation & Differentiation
- Institutional Memory (Hindsight‑style): Treat past procurement decisions as an indexed, recallable asset that prevents re‑doing reasoning already done.
- Cost‑aware Model Cascading: Route routine tasks to cheap, fast models and escalate only ambiguous or policy‑sensitive cases to flagship models.
- Explainable Precedent Linking: Provide human‑readable connection explanations that justify automated decisions and build trust with compliance teams.

5. Prototype / MVP Components
- Frontend: Next.js + TypeScript + Tailwind UI for upload/paste and results display with precedent panel (existing repo stack).
- Tier‑1 Extractor: Prompted extraction producing JSON including ambiguityScore and core fields.
- Escalation Engine: Rule‑based gate (ambiguityScore threshold = 40, residency checks) that decides escalation.
- Hindsight Memory: Small seeded memory (mock data) showing at least one strong precedent (Vendor X rejected for US‑East residency).
- API endpoints: /api/cascade/extract, /api/memory/query, /api/agent/evaluate, /api/agent/qa (stubs and implementations exist in repo).
- Demo dataset: 3–5 synthetic vendor documents to cover approved, rejected, ambiguous cases.

6. System Architecture (Runtime Flow)
User document → Tier‑1 extractor (fast model) → ambiguity/residency gate →
- No escalation → Memory lookup & routine approval + writeback
- Escalate → Tier‑2 flagship policy synthesis → Dashboard + writeback

7. Evidence (Repository Mapping)
- README.md: Architecture diagram (mermaid), cost/latency table, setup instructions.
- package.json: Next.js 16 + React 19 + TypeScript + Tailwind (dev scripts present).
- app/api/*: Implemented API routes for cascade extraction, memory query, agent evaluation, and QA.
- lib/cascade/evaluator.ts: Tier‑1 extraction and escalation logic with ambiguity threshold and mocked cascade client.
- lib/memory/procurement-memory.ts & lib/db/mock-seed.ts: Seeded precedent data and precedent lookup logic.
- public/images/ss2.png: Demo screenshot asset referenced in README.

8. Hackathon Execution Plan (48‑hour)
Milestones:
- 0–2h: Align roles, finalize demo script and test documents.
- 2–8h: Harden Tier‑1 extraction prompt and API flow; ensure reliable JSON output for demo cases.
- 8–14h: Integrate and seed Hindsight memory; implement /api/memory/query seed initializer.
- 14–20h: Implement escalation path with a concise flagship synthesis stub and cascade metrics.
- 20–28h: Build UI pages for upload, results, and precedent panel; display cost/latency table.
- 28–36h: Testing, UX polish, add screenshots and mermaid diagram image, finalize pitch slides.
- 36–48h: Rehearse demo, record short walkthrough, prepare fallback prerecorded video.

Demo script (3 minutes):
1. One‑line problem and impact statement.
2. Upload ambiguous proposal → show Tier‑1 extraction and ambiguityScore.
3. Show memory hit to Vendor X with connection explanation → escalate to Tier‑2 and present policy reasoning.
4. Show cost/latency comparison table (ProcureMind vs naive flagship).
5. Close with roadmap and enterprise adoption steps.

9. Evaluation Metrics & Success Criteria
- Precedent recall with clear connection explanation.
- End‑to‑end Tier‑1 latency under ~1s (simulated), escalation under ~2s.
- Cost simulation: average cost per evaluation reduced ≥60% vs naive flagship.
- Demo completeness: seeded memory, UI flows, and reproducible steps.
- Novelty: Judges perceive institutional memory + cascading as a defensible, impactful innovation.

10. Sustainability & Scalability
- Modular architecture: memory can migrate from mock seed to vector DB without large refactor.
- Cascading reduces compute and carbon footprint by limiting flagship model calls.
- Writeback ensures continuous improvement of memory and lower marginal review needs.
- Enterprise data governance: emphasize on‑premise or VPC hosting, redaction, and access controls.

11. Risks & Mitigations
- LLM cost/latency: simulate benchmarks for demo, use small models in live demo, and show cost math.
- Compliance/privacy: demo on synthetic or redacted documents; include human‑in‑the‑loop for escalations.
- False positives/negatives: show escalation safety net and audit trail linking to precedents.

12. Timeline & Roadmap (post‑hackathon)
- 0–3 months: Replace mock memory with vector DB, integrate one real LLM provider (low‑cost + flagship), expand demo dataset.
- 3–9 months: Integrate enterprise connectors (Jira, Confluence, procurement platform), audit logs, RBAC.
- 9–18 months: Pilot with a large procurement org; automate writeback policy approvals and continuous learning.

13. Deliverables (for submission)
- This proposal (refined to 2–4 pages PDF for judges).
- Live demo site or local run instructions.
- Short 3‑minute recorded demo + pitch slides.
- Repo link with seeded demo data and README for reproducing the demo.

14. Appendix — Concrete Code References
- README.md — high level architecture & instructions
- app/api/cascade/extract/route.ts — Tier‑1 extraction and escalation glue
- app/api/memory/query/route.ts — memory query + initializer
- app/api/agent/evaluate/route.ts — evaluate wrapper
- app/api/agent/qa/route.ts — QA over memory stub
- lib/cascade/evaluator.ts — Tier‑1 extraction, ambiguity scoring, escalation logic
- lib/memory/procurement-memory.ts — precedent matching logic
- lib/db/mock-seed.ts — seeded Vendor X precedent

---

Please find the formatted proposal saved at docs/ProcureMind_Proposal.md in the repository.

How to get a PDF (quick options):
- Option A (recommended, locally):
  1. Clone the repo: git clone https://github.com/s-kunwar/procuremind.git
  2. Open docs/ProcureMind_Proposal.md in VS Code or another editor and export to PDF, or run:
     - pandoc docs/ProcureMind_Proposal.md -o ProcureMind_Proposal.pdf --pdf-engine=xelatex
- Option B (browser):
  1. Open the Markdown file on GitHub in your browser and use Print → Save as PDF.

If you'd like, I can also create an HTML rendering (docs/ProcureMind_Proposal.html) and commit it so you can open and print to PDF directly in the browser. Or if you want a DOCX/PDF file committed to the repo, confirm and I will generate and add it (I will convert Markdown to DOCX/PDF and commit files).