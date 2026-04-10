import { useState, useMemo } from 'react';

export function useSearch(units) {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlight, setHighlight] = useState({ unitId: null, section: null, itemId: null });

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    const results = [];

    units.forEach(unit => {
      unit.vocabulary.forEach((topic, topicIdx) => {
        topic.items.forEach((item, itemIdx) => {
          if (item.word.toLowerCase().includes(term) || item.def.toLowerCase().includes(term)) {
            results.push({
              type: 'vocab',
              unitId: unit.id,
              unitTitle: unit.title,
              topic: topic.topic,
              word: item.word,
              definition: item.def,
              section: 'v',
              itemId: `${topicIdx}-${itemIdx}`
            });
          }
        });
      });
      unit.grammar.forEach((gram, idx) => {
        const technicalText = gram.explanation?.technicalAnalysis || '';
        if (gram.title.toLowerCase().includes(term) || technicalText.toLowerCase().includes(term)) {
          results.push({
            type: 'grammar',
            unitId: unit.id,
            unitTitle: unit.title,
            title: gram.title,
            explanation: technicalText.substring(0, 100),
            section: 'g',
            itemId: idx
          });
        }
      });
    });
    return results;
  }, [searchTerm, units]);

  const highlightUnit = (unitId, section, itemId) => {
    setHighlight({ unitId, section, itemId });
    setTimeout(() => setHighlight({ unitId: null, section: null, itemId: null }), 3000);
  };

  return { searchTerm, setSearchTerm, filteredResults, highlight, highlightUnit };
}