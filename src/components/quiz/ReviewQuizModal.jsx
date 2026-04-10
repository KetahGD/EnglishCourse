import React, { useState, useEffect } from 'react';
import { generateQuizQuestions } from '../../services/quizService';
import { checkApiKeyStatus } from '../../services/geminiService';

export default function ReviewQuizModal({ isOpen, onClose, unitId, topicId }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);

  useEffect(() => {
    const checkApi = async () => {
      const status = await checkApiKeyStatus();
      setApiStatus(status);
    };
    checkApi();
  }, []);

  useEffect(() => {
    if (isOpen) {
      const loadQuestions = async () => {
        setLoading(true);
        const newQuestions = await generateQuizQuestions(unitId, topicId, 15);
        setQuestions(newQuestions);
        setCurrentIndex(0);
        setScore(0);
        setFinished(false);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setLoading(false);
      };
      loadQuestions();
    }
  }, [isOpen, unitId, topicId]);

  const handleAnswer = (choiceIdx) => {
    if (showFeedback) return;
    const isCorrect = choiceIdx === questions[currentIndex].correct;
    if (isCorrect) setScore(prev => prev + 1);
    setSelectedAnswer(choiceIdx);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-surface border border-border rounded-2xl max-w-md w-full p-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-accent border-b-2 mx-auto mb-4"></div>
          <p className="text-text">Generating questions...</p>
          <p className="text-muted text-sm mt-2">
            {topicId && apiStatus?.valid ? 'Using AI to create questions' : 'Using local question bank'}
          </p>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-surface border border-border rounded-2xl max-w-md w-full p-6 text-center">
          <h3 className="text-2xl font-serif font-bold">Quiz Complete</h3>
          <div className="text-5xl sm:text-6xl font-black text-accent my-4">{score} / {questions.length}</div>
          <p className="text-muted mb-4 text-sm sm:text-base">
            {percentage >= 90 ? "🎉 Excellent! You've mastered this content!" :
             percentage >= 70 ? "👍 Good job! Review the ones you missed." :
             percentage >= 50 ? "📚 Not bad! Keep practicing." :
             "💪 Keep studying! Try reviewing the unit again."}
          </p>
          <button onClick={onClose} className="px-6 py-2.5 bg-accent rounded-lg font-medium hover:bg-accent/80 transition w-full sm:w-auto">
            Close
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  if (!q || questions.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-surface border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-5">
        <div className="flex justify-between items-center mb-3 sticky top-0 bg-surface pb-2">
          <h2 className="text-xl font-serif font-bold">📝 Review Quiz</h2>
          <button onClick={onClose} className="text-muted hover:text-text text-2xl transition">✕</button>
        </div>

        <div className="h-1.5 bg-border rounded-full mb-4">
          <div className="h-full bg-accent rounded-full transition-all duration-300" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
        </div>

        <div className="flex justify-between text-xs text-muted mb-2 flex-wrap gap-1">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="text-accent font-mono">{q.type}</span>
        </div>

        <div className="text-base sm:text-lg font-medium my-4 leading-relaxed break-words">{q.question}</div>

        <div className="space-y-2 mb-4">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showFeedback}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-200 ${
                showFeedback && idx === q.correct
                  ? 'border-green-500 bg-green-500/10 text-green-400'
                  : showFeedback && idx === selectedAnswer && idx !== q.correct
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border hover:border-accent/50 hover:bg-surface2'
              } text-sm sm:text-base break-words`}
            >
              {opt}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="bg-darkbg/60 p-3 rounded-xl mb-4 text-sm border-l-3 border-accent">
            <span className={`font-bold ${selectedAnswer === q.correct ? 'text-green-400' : 'text-accent'}`}>
              {selectedAnswer === q.correct ? '✓ Correct!' : '✗ Incorrect'}
            </span>
            <p className="mt-1 text-muted text-xs sm:text-sm break-words">{q.feedback}</p>
          </div>
        )}

        {showFeedback && (
          <button
            onClick={nextQuestion}
            className="w-full py-2.5 bg-accent rounded-xl font-medium hover:bg-accent/80 transition-all duration-200"
          >
            {currentIndex + 1 === questions.length ? 'Finish Quiz' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}