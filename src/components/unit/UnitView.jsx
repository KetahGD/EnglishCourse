import React, { useState } from 'react';
import VocabularySection from './VocabularySection';
import GrammarCard from './GrammarCard';
import ExpressionsSection from './ExpressionsSection';
import WritingSection from './WritingSection';
import SpeakingSection from './SpeakingSection';
import ListeningSection from './ListeningSection';
import ReviewQuizModal from '../quiz/ReviewQuizModal';

export default function UnitView({ unit, onSelectUnit, totalUnits }) {
  const [activeTab, setActiveTab] = useState('v');
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizUnitId, setQuizUnitId] = useState(null);
  const [quizTopicId, setQuizTopicId] = useState(null);
  const [fade, setFade] = useState(true);

  const tabs = [
    { id: 'v', label: '📖 Vocabulary' },
    { id: 'g', label: '📐 Grammar' },
    { id: 'e', label: '💬 Expressions' },
    { id: 'w', label: '✍️ Writing' },
    { id: 's', label: '🎤 Speaking' },
    { id: 'l', label: '🎧 Listening' }
  ];

  const handleTopicQuiz = (topicId) => {
    setQuizTopicId(topicId);
    setQuizUnitId(unit.id);
    setQuizOpen(true);
  };

  const handleUnitQuiz = () => {
    setQuizTopicId(null);
    setQuizUnitId(unit.id);
    setQuizOpen(true);
  };

  const changeTab = (tabId) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(tabId);
      setFade(true);
    }, 150);
  };

  if (!unit) return <div className="p-8 text-center text-muted">Loading...</div>;

  return (
    <div className="pb-16">
      <div className="relative overflow-hidden bg-gradient-to-r from-surface/80 to-darkbg border-b border-border px-4 py-6 sm:px-6 lg:px-10">
        <div className="absolute -top-10 -right-10 text-7xl sm:text-8xl font-serif font-black text-accent/10 select-none">
          {unit.id.toString().padStart(2, '0')}
        </div>
        <div className="relative z-10">
          <div className="text-accent font-mono text-xs tracking-wider uppercase">{unit.topic}</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mt-1 break-words">{unit.title}</h2>
          <p className="text-muted text-base max-w-2xl mt-2">{unit.desc}</p>
          <button
            onClick={handleUnitQuiz}
            className="mt-4 px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium hover:bg-accent/20 transition"
          >
            📝 Unit Quiz
          </button>
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-surface/90 backdrop-blur-sm border-b border-border overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex px-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => changeTab(tab.id)}
              className={`px-3 sm:px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-accent border-accent'
                  : 'text-muted border-transparent hover:text-text hover:border-accent/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {activeTab === 'v' && (
          <VocabularySection 
            vocabulary={unit.vocabulary} 
            vocabularyResources={unit.vocabularyResources} 
          />
        )}
        {activeTab === 'g' && (
          <div className="space-y-6">
            {unit.grammar.map((gram, idx) => (
              <GrammarCard
                key={idx}
                grammar={gram}
                unitId={unit.id}
                onTopicQuiz={handleTopicQuiz}
                onUnitQuiz={handleUnitQuiz}
              />
            ))}
          </div>
        )}
        {activeTab === 'e' && (
          <ExpressionsSection 
            expressions={unit.expressions} 
            expressionsResources={unit.expressionsResources} 
          />
        )}
        {activeTab === 'w' && (
          <WritingSection 
            writing={unit.writing} 
            unitTitle={unit.title} 
            writingResources={unit.writingResources} 
          />
        )}
        {activeTab === 's' && (
          <SpeakingSection 
            speaking={unit.speaking} 
            speakingResources={unit.speakingResources} 
          />
        )}
        {activeTab === 'l' && (
          <ListeningSection 
            listening={unit.listening} 
            listeningResources={unit.listeningResources} 
          />
        )}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-border flex justify-between items-center">
        <button
          onClick={() => onSelectUnit(unit.id - 1)}
          disabled={unit.id === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            unit.id === 1
              ? 'opacity-30 cursor-not-allowed text-muted'
              : 'hover:bg-accent/10 text-accent'
          }`}
        >
          ← Previous Unit
        </button>
        <button
          onClick={() => onSelectUnit(unit.id + 1)}
          disabled={unit.id === totalUnits}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            unit.id === totalUnits
              ? 'opacity-30 cursor-not-allowed text-muted'
              : 'hover:bg-accent/10 text-accent'
          }`}
        >
          Next Unit →
        </button>
      </div>

      <ReviewQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} unitId={quizUnitId} topicId={quizTopicId} />
    </div>
  );
}