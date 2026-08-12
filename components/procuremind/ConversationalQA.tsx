import React from 'react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const ConversationalQA: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [question, setQuestion] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAsk = async (textToAsk: string) => {
    if (!textToAsk.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, text: textToAsk }];
    setMessages(newMessages);
    setQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/agent/qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToAsk, vendorName: textToAsk.includes('Vendor Y') ? 'Beta Data Storage' : undefined }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages((prev) => [...prev, { role: 'assistant' as const, text: data.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant' as const, text: `Error: ${data.error || 'Failed to get answer'}` },
        ]);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant' as const, text: `Failed to execute: ${err.message || 'Unknown error'}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-4">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-lg font-semibold text-stone-900">Ask ProcureMind</h2>
        <p className="text-stone-500 text-xs">Conversational QA and reasoning over your procurement history.</p>
      </div>

      <div className="space-y-4 max-h-60 overflow-y-auto p-2 bg-stone-50 rounded border border-stone-100 min-h-[120px]">
        {messages.length === 0 ? (
          <div className="text-stone-400 text-xs text-center py-8 font-mono">
            Conversational interface active. Try selecting a question chip below.
          </div>
        ) : (
          messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-1 max-w-[85%] ${
                m.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">
                {m.role === 'user' ? 'You' : 'ProcureMind Agent'}
              </span>
              <div
                className={`p-3 rounded text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-stone-900 text-white rounded-br-none'
                    : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleAsk('Why are you rejecting Vendor Y?')}
            className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1 rounded-full border border-stone-200 transition-colors"
          >
            "Why are you rejecting Vendor Y?"
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk(question);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            className="flex-1 p-2 text-sm border border-stone-200 rounded bg-stone-50 text-stone-950 focus:ring-1 focus:ring-stone-400 focus:outline-none"
            placeholder="Ask a question about compliance policy or evaluation history..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="bg-stone-900 hover:bg-stone-800 disabled:bg-stone-300 text-white text-sm px-4 py-2 rounded transition-colors"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
};
