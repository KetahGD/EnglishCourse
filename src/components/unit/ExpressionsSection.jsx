import React from 'react';

export default function ExpressionsSection({ expressions, expressionsResources = [] }) {
  return (
    <div className="space-y-5">
      {expressions.map((cat, idx) => (
        <div key={idx} className="bg-surface2 border border-border rounded-xl p-4">
          <div className="text-accent font-mono text-xs tracking-wider mb-2 break-words">{cat.cat}</div>
          <div className="flex flex-wrap gap-2">
            {cat.phrases.map((phrase, i) => (
              <span key={i} className="bg-darkbg/60 text-base px-3 py-1.5 rounded-lg border border-border/50 break-words">
                {phrase}
              </span>
            ))}
          </div>
        </div>
      ))}

      {expressionsResources && expressionsResources.length > 0 && (
        <div className="p-4 bg-surface2 border border-border rounded-xl">
          <div className="text-accent font-mono text-xs tracking-wider mb-2">💬 More Expressions & Resources</div>
          <div className="flex flex-wrap gap-2">
            {expressionsResources.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline break-all">
                {url.replace(/^https?:\/\//, '').slice(0, 50)}...
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}