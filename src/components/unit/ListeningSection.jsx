import React from 'react';

export default function ListeningSection({ listening, listeningResources = [] }) {
  if (!listening) return <div className="text-muted">No listening content available.</div>;

  const { strategy, explanation, actionSteps, resources } = listening;

  return (
    <div className="space-y-5">
      <div className="bg-surface border border-border rounded-xl p-5">
        <div className="text-accent font-mono text-xs tracking-wider mb-1">🎧 Listening Strategy</div>
        <h3 className="text-2xl font-serif font-bold">{strategy || "Listening Practice"}</h3>
        <p className="text-muted text-base mt-2">{explanation || ""}</p>

        {actionSteps && actionSteps.length > 0 && (
          <>
            <div className="text-accent font-mono text-xs tracking-wider mt-3 mb-1">📌 Action Steps</div>
            <ul className="list-decimal list-inside space-y-1 text-base text-muted mb-4">
              {actionSteps.map((step, idx) => (<li key={idx}>{step}</li>))}
            </ul>
          </>
        )}

        {resources && resources.length > 0 && (
          <>
            <div className="text-accent font-mono text-xs tracking-wider mt-3 mb-1">🌐 Recommended Resources</div>
            <div className="flex flex-wrap gap-3">
              {resources.map((res, idx) => (
                <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="text-accent text-base hover:underline">
                  🎧 {res.title || res.type}
                </a>
              ))}
            </div>
          </>
        )}
      </div>

      {listeningResources && listeningResources.length > 0 && (
        <div className="p-4 bg-surface2 border border-border rounded-xl">
          <div className="text-accent font-mono text-xs tracking-wider mb-2">🎵 Extra Listening Resources</div>
          <div className="flex flex-wrap gap-2">
            {listeningResources.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline break-all">{url.replace(/^https?:\/\//, '').slice(0, 50)}...</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}