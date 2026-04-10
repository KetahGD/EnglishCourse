import React, { useState } from 'react';

function formatText(text) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line === '') { i++; continue; }
    if (line.match(/^[-•*]\s/) || line.match(/^\d+\.\s/)) {
      const listItems = [];
      while (i < lines.length && (lines[i].trim().match(/^[-•*]\s/) || lines[i].trim().match(/^\d+\.\s/))) {
        let itemText = lines[i].trim().replace(/^[-•*]\s/, '').replace(/^\d+\.\s/, '');
        itemText = itemText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        listItems.push(<li key={i} dangerouslySetInnerHTML={{ __html: itemText }} />);
        i++;
      }
      elements.push(<ul key={`list-${i}`} className="list-disc list-inside space-y-1 text-text ml-2 mb-3">{listItems}</ul>);
      continue;
    }
    if (line.match(/^[A-Z][a-z]+:/) && line.length < 50) {
      const titleText = line.replace(/:/g, '');
      elements.push(<h5 key={`title-${i}`} className="text-accent font-mono text-xs tracking-wider mt-3 mb-1">{titleText}</h5>);
      i++;
      continue;
    }
    let paragraph = line;
    paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    paragraph = paragraph.replace(/\\n/g, '<br/>');
    elements.push(<p key={`p-${i}`} className="text-text mb-2" dangerouslySetInnerHTML={{ __html: paragraph }} />);
    i++;
  }
  return elements;
}

export default function GrammarCard({ grammar, unitId, onTopicQuiz, onUnitQuiz }) {
  const [showDetails, setShowDetails] = useState(false);
  const explanation = grammar.explanation;
  const shortExplanation = grammar.expl || (explanation?.technicalAnalysis ? explanation.technicalAnalysis.substring(0, 200) + "..." : "No explanation available.");

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-4 border-b border-border bg-surface2/30">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h4 className="text-2xl font-serif font-bold text-accent break-words">{grammar.title}</h4>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => onTopicQuiz(grammar.quizTopicId)} className="text-xs px-3 py-1.5 rounded-full bg-accent/15 text-accent border border-accent/40 hover:bg-accent/25 transition flex items-center gap-1">🎯 Topic Quiz</button>
            <button onClick={() => onUnitQuiz(unitId)} className="text-xs px-3 py-1.5 rounded-full bg-surface2 border border-border hover:border-accent/50 transition flex items-center gap-1">📚 Unit Quiz</button>
          </div>
        </div>
        <p className="text-muted text-base mt-2 italic">{shortExplanation}</p>
        {explanation && (
          <button onClick={() => setShowDetails(!showDetails)} className="mt-2 text-accent text-sm hover:underline flex items-center gap-1">
            {showDetails ? '📖 Show less' : '📖 Expand full explanation'}
          </button>
        )}
      </div>

      <div className="p-5 space-y-4">
        {showDetails && explanation && (
          <div className="space-y-5 bg-darkbg/30 p-4 rounded-lg border-l-4 border-accent">
            {explanation.technicalAnalysis && (
              <div className="space-y-1">
                <div className="flex items-center gap-2"><span className="text-accent text-lg">🔍</span><h5 className="text-accent font-mono text-sm tracking-wider font-bold">Technical Analysis</h5></div>
                <div className="pl-6 text-text space-y-2">{formatText(explanation.technicalAnalysis)}</div>
              </div>
            )}
            {explanation.advancedNuances && (
              <div className="space-y-1 mt-4">
                <div className="flex items-center gap-2"><span className="text-accent text-lg">🎯</span><h5 className="text-accent font-mono text-sm tracking-wider font-bold">Advanced Nuances & Register</h5></div>
                <div className="pl-6 text-text space-y-2">{formatText(explanation.advancedNuances)}</div>
              </div>
            )}
            {explanation.grayAreas && (
              <div className="space-y-1 mt-4">
                <div className="flex items-center gap-2"><span className="text-accent text-lg">⚠️</span><h5 className="text-accent font-mono text-sm tracking-wider font-bold">Gray Areas & Exceptions</h5></div>
                <div className="pl-6 text-text space-y-2">{formatText(explanation.grayAreas)}</div>
              </div>
            )}
            {explanation.errorAnalysis && explanation.errorAnalysis.length > 0 && (
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2"><span className="text-accent text-lg">📊</span><h5 className="text-accent font-mono text-sm tracking-wider font-bold">Contrastive Error Analysis</h5></div>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="min-w-full text-sm">
                    <thead className="bg-surface2"><tr><th className="px-3 py-2 text-left font-mono text-accent">Type</th><th className="px-3 py-2 text-left font-mono text-accent">Example</th><th className="px-3 py-2 text-left font-mono text-accent">Explanation</th><th className="px-3 py-2 text-left font-mono text-accent">Correction</th></tr></thead>
                    <tbody className="divide-y divide-border">
                      {explanation.errorAnalysis.map((err, idx) => (
                        <tr key={idx} className="hover:bg-surface2/50">
                          <td className="px-3 py-2 font-semibold">
                            {err.type === 'Correct' && <span className="text-green-400">✓ Correct</span>}
                            {err.type === 'Natural' && <span className="text-blue-400">◉ Natural</span>}
                            {err.type === 'Incorrect' && <span className="text-red-400">✗ Incorrect</span>}
                            {err.type === 'Fossilized Error' && <span className="text-orange-400">⚠️ Fossilized Error</span>}
                            {!err.type.match(/Correct|Natural|Incorrect|Fossilized/) && err.type}
                          </td>
                          <td className="px-3 py-2 font-mono text-xs">{err.example}</td>
                          <td className="px-3 py-2 text-muted">{err.explanation}</td>
                          <td className="px-3 py-2 font-mono text-accent">{err.correction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {explanation.resources && explanation.resources.length > 0 && (
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2"><span className="text-accent text-lg">🔗</span><h5 className="text-accent font-mono text-sm tracking-wider font-bold">Curated Free Resources</h5></div>
                <ul className="pl-6 space-y-1.5 list-disc list-inside text-sm">
                  {explanation.resources.map((res, idx) => (
                    <li key={idx} className="text-text">
                      <span className="font-mono text-accent text-xs bg-accent/10 px-1.5 py-0.5 rounded mr-2">{res.type}</span>
                      {res.url ? <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">{res.title}</a> : <span>{res.title}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {grammar.structure && (
          <div className="bg-darkbg/60 p-3 rounded-lg font-mono text-sm border-l-4 border-accent overflow-x-auto">
            <span className="text-accent font-bold">📐 Structure:</span> {grammar.structure}
          </div>
        )}

        <div>
          <h5 className="text-accent font-mono text-xs tracking-wider mb-2">📝 Examples</h5>
          <div className="space-y-1 pl-2">
            {grammar.examples && grammar.examples.map((ex, idx) => (
              <div key={idx} className="text-base flex gap-2 items-start">
                <span className="text-accent mt-0.5">→</span>
                <span className="break-words text-text">{ex}</span>
              </div>
            ))}
          </div>
        </div>

        {grammar.link && (
          <a href={grammar.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-accent text-sm hover:underline">
            📖 Study more <span>↗</span>
          </a>
        )}
      </div>
    </div>
  );
}