import React, { useState, useEffect } from 'react';
import { evaluateWriting, checkApiKeyStatus } from '../../services/geminiService';

export default function WritingEvaluator({ unitWriting, unitTopic }) {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);

  useEffect(() => {
    const checkApi = async () => {
      const status = await checkApiKeyStatus();
      setApiStatus(status);
    };
    checkApi();
  }, []);

  const handleEvaluate = async () => {
    if (!text.trim()) {
      alert('Please write something before requesting feedback.');
      return;
    }
    setLoading(true);
    const result = await evaluateWriting(text, unitWriting.skill, unitTopic);
    setFeedback(result);
    setLoading(false);
  };

  return (
    <div className="bg-surface2 border border-border rounded-xl p-4 sm:p-5 mt-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
        <h4 className="text-lg font-serif font-bold">🤖 AI Writing Assistant</h4>
        {apiStatus && !apiStatus.valid && (
          <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
            ⚠️ API Key missing
          </div>
        )}
      </div>

      <p className="text-muted text-sm mb-3">
        Write your answer to the task above and get instant feedback on grammar, vocabulary, and structure.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full bg-darkbg border border-border rounded-lg p-3 text-text text-sm focus:outline-none focus:border-accent transition"
        placeholder="Type your response here..."
      />

      <button
        onClick={handleEvaluate}
        disabled={loading || !text.trim() || (apiStatus && !apiStatus.valid)}
        className="mt-3 px-5 py-2.5 bg-accent rounded-lg font-medium hover:bg-accent/80 transition disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {loading ? 'Evaluating...' : 'Get AI Feedback'}
      </button>

      {apiStatus && !apiStatus.valid && (
        <div className="mt-3 p-3 bg-accent/10 border border-accent/30 rounded-lg text-sm">
          <span className="font-bold text-accent">⚠️ API Key Required</span>
          <p className="text-muted text-xs mt-1 break-words">
            Add your Gemini API key to <code className="bg-darkbg px-1 rounded">.env.local</code> as <code className="bg-darkbg px-1 rounded">VITE_GEMINI_API_KEY=your_key_here</code>
          </p>
        </div>
      )}

      {feedback && (
        <div className="mt-4 p-4 bg-darkbg/60 rounded-lg border border-border">
          <div className="font-bold text-accent mb-2">📝 Feedback</div>
          <p className="text-sm whitespace-pre-wrap break-words">{feedback.comment}</p>
          {feedback.score && (
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted">Score:</span>
              <span className="text-lg font-bold text-accent">{feedback.score}/10</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}