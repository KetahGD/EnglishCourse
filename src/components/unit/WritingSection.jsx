import React from 'react';
import WritingEvaluator from '../ai/WritingEvaluator';

export default function WritingSection({ writing, unitTitle, writingResources = [] }) {
  if (!writing) return <div className="text-muted">No writing content available.</div>;

  const { task, skill, description, scaffolding, resourceLink } = writing;

  return (
    <div className="space-y-5">
      <div className="bg-surface border border-border rounded-xl p-5">
        <div className="text-accent font-mono text-xs tracking-wider mb-1">Writing Workshop</div>
        <h3 className="text-2xl font-serif font-bold">{skill || "Writing Task"}</h3>
        <p className="text-muted text-base mt-2">{description || ""}</p>

        {scaffolding && scaffolding.length > 0 && (
          <>
            <div className="text-accent font-mono text-xs tracking-wider mt-4 mb-2">📌 Scaffolding Framework</div>
            <ul className="list-disc list-inside space-y-1 text-base text-muted">
              {scaffolding.map((step, idx) => (<li key={idx}>{step}</li>))}
            </ul>
          </>
        )}

        <div className="mt-4 p-3 bg-darkbg/40 rounded-lg border-l-4 border-accent italic text-base">
          <strong className="not-italic text-accent">📝 Task:</strong> {task || "Write according to the instructions above."}
        </div>

        {resourceLink && (
          <div className="mt-3">
            <a href={resourceLink} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline inline-flex items-center gap-1">📘 Free Resource Link ↗</a>
          </div>
        )}
      </div>

      <WritingEvaluator unitWriting={writing} unitTopic={unitTitle} />

      {writingResources && writingResources.length > 0 && (
        <div className="p-4 bg-surface2 border border-border rounded-xl">
          <div className="text-accent font-mono text-xs tracking-wider mb-2">✍️ Extra Writing Resources</div>
          <div className="flex flex-wrap gap-2">
            {writingResources.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline break-all">{url.replace(/^https?:\/\//, '').slice(0, 50)}...</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}