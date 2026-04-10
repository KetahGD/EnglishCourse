// src/services/quizService.js
import { questionBank } from '../data/questionBank';
import { unitsData } from '../data/unitsData2';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  if (n >= arr.length) return shuffle(arr);
  return shuffle(arr).slice(0, n);
}

export async function generateQuizQuestions(unitId = null, topicId = null, count = 15) {
  let filtered = [];

  if (topicId) {
    // Quiz de tema específico (gramática)
    filtered = questionBank.filter(q => q.topicId === topicId);
  } else if (unitId) {
    // Quiz de unidad completa: tomar preguntas de ambos temas de gramática de esa unidad
    const unit = unitsData.find(u => u.id === unitId);
    if (unit && unit.grammar) {
      const topicIds = unit.grammar.map(g => g.quizTopicId).filter(Boolean);
      filtered = questionBank.filter(q => topicIds.includes(q.topicId));
    }
  }

  if (filtered.length === 0) {
    // Fallback: si no hay preguntas (nunca debería ocurrir)
    console.warn("No questions found for unit", unitId, "topic", topicId);
    return [];
  }

  return sample(filtered, Math.min(count, filtered.length));
}
