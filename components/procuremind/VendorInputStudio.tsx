import React from 'react';

interface VendorInputStudioProps {
  onEvaluate: (text: string) => void;
  isLoading: boolean;
}

const vendorYTemplate = `Vendor Proposal: Beta Data Storage

Beta Data Storage offers scalable data storage solutions. Our infrastructure primarily
utilizes servers in the US-East region. We maintain SOC2 certification. Our pricing
is around $25,000 annually. Data storage terms are subject to our standard terms of service,
which can be found on our website. Specific data residency guarantees may vary.`;

const vendorZTemplate = `Vendor Proposal: Alpha Analytics

We are Alpha Analytics, a leading provider of cloud-based data analytics solutions.
Our primary data centers are located in the EU-Central region, ensuring full compliance
with GDPR and other European data residency requirements. We hold SOC2 Type II and ISO27001 certifications.
Our pricing starts at €15,000 per year for enterprise clients. All legal terms are clear and explicitly stated.`;

export const VendorInputStudio: React.FC<VendorInputStudioProps> = ({ onEvaluate, isLoading }) => {
  const [inputText, setInputText] = React.useState('');

  const handleLoadTemplate = (templateText: string) => {
    setInputText(templateText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onEvaluate(inputText);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
      <h2 className="text-lg font-semibold text-stone-900 mb-4">Vendor Evaluation Studio</h2>
      
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => handleLoadTemplate(vendorYTemplate)}
          className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded border border-stone-200 transition-colors"
        >
          Load Vendor Y (US Storage - Conflict)
        </button>
        <button
          type="button"
          onClick={() => handleLoadTemplate(vendorZTemplate)}
          className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded border border-stone-200 transition-colors"
        >
          Load Vendor Z (EU Storage - Compliant)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="vendorProposal" className="block text-sm font-medium text-stone-700 mb-1">
            Vendor Proposal / Security Specs
          </label>
          <textarea
            id="vendorProposal"
            rows={8}
            className="w-full p-3 text-sm border border-stone-200 rounded bg-stone-50 text-stone-950 focus:ring-1 focus:ring-stone-400 focus:outline-none transition-shadow"
            placeholder="Paste vendor proposal document, security specifications, compliance claims, or pricing sheets..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className="w-full bg-stone-900 hover:bg-stone-800 disabled:bg-stone-300 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
        >
          {isLoading ? 'Running Intelligent Cascade & Search...' : 'Run Evaluation'}
        </button>
      </form>
    </div>
  );
};
