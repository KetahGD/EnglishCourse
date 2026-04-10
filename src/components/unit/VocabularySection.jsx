import React, { useState } from 'react';

export default function VocabularySection({ vocabulary, vocabularyResources = [] }) {
  const [openTopics, setOpenTopics] = useState(() =>
    vocabulary.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
  );

  const toggleTopic = (idx) => {
    setOpenTopics(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      {vocabulary.map((topic, idx) => (
        <div key={idx} className="mb-6 border border-border rounded-xl overflow-hidden bg-surface">
          <button
            onClick={() => toggleTopic(idx)}
            className="w-full flex items-center justify-between gap-2 p-4 bg-surface2/50 hover:bg-surface2 transition"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent font-mono text-xs tracking-wider uppercase">{topic.topic}</span>
              <div className="h-px flex-1 bg-border hidden sm:block w-12"></div>
            </div>
            <span className="text-accent text-xl">{openTopics[idx] ? '−' : '+'}</span>
          </button>
          {openTopics[idx] && (
            <div className="p-4">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {topic.items.map((item, i) => (
                  <div key={i} className="bg-surface border border-border rounded-xl p-4 hover:border-accent/50 transition">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-bold text-text text-base break-words">{item.word}</span>
                      <span className="text-accent text-[11px] font-mono uppercase">{item.pos}</span>
                    </div>
                    <p className="text-muted text-sm mt-1">{item.def}</p>
                    <p className="text-text/80 text-sm italic mt-2 border-l-2 border-accent pl-2 break-words">{item.ex}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {vocabularyResources && vocabularyResources.length > 0 && (
        <div className="mt-6 p-4 bg-surface2 border border-border rounded-xl">
          <div className="text-accent font-mono text-xs tracking-wider mb-2">🔗 Vocabulary Resources</div>
          <div className="flex flex-wrap gap-2">
            {vocabularyResources.map((url, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:underline break-all"
              >
                {url.replace(/^https?:\/\//, '').slice(0, 40)}...
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}