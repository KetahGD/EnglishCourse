import React from 'react';

export default function SpeakingSection({ speaking, speakingResources = [] }) {
  if (!speaking) return <div className="text-muted">No speaking content available.</div>;

  const { focus, explanation, examples, classroomActivity, resourceLink } = speaking;

  return (
    <div className="space-y-5">
      <div className="bg-surface border border-border rounded-xl p-5">
        <div className="text-accent font-mono text-xs tracking-wider mb-1">🗣️ Pronunciation & Speaking Focus</div>
        <h3 className="text-2xl font-serif font-bold mb-3">{focus || "Speaking Practice"}</h3>
        <p className="text-muted text-base mb-4">{explanation || "No description provided."}</p>

        {examples && examples.length > 0 && (
          <>
            <div className="text-accent font-mono text-xs tracking-wider mt-2 mb-1">🎙️ Examples</div>
            <div className="bg-darkbg/50 rounded-lg p-3 mb-4">
              {examples.map((ex, idx) => (<div key={idx} className="text-base font-mono mb-1">→ {ex}</div>))}
            </div>
          </>
        )}

        {classroomActivity && classroomActivity.length > 0 && (
          <>
            <div className="text-accent font-mono text-xs tracking-wider mt-2 mb-1">🏫 Classroom Activity</div>
            <ul className="list-disc list-inside space-y-1 text-base text-muted mb-4">
              {classroomActivity.map((step, idx) => (<li key={idx}>{step}</li>))}
            </ul>
          </>
        )}

        {resourceLink && (
          <div className="mt-3">
            <a href={resourceLink} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline inline-flex items-center gap-1">🔗 Free Resource Link ↗</a>
          </div>
        )}
      </div>

      {speakingResources && speakingResources.length > 0 && (
        <div className="p-4 bg-surface2 border border-border rounded-xl">
          <div className="text-accent font-mono text-xs tracking-wider mb-2">🎤 Extra Speaking Resources</div>
          <div className="flex flex-wrap gap-2">
            {speakingResources.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline break-all">{url.replace(/^https?:\/\//, '').slice(0, 50)}...</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}