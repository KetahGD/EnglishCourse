import { unitsData } from '../data/unitsData2';
import { generateGrammarQuiz } from './geminiService';

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

function generateVocabQuestions(unitId = null) {
  const bank = [];
  const targetUnits = unitId ? unitsData.filter(u => u.id === unitId) : unitsData;
  targetUnits.forEach(unit => {
    unit.vocabulary.forEach(topic => {
      topic.items.forEach(item => {
        const wrongWords = targetUnits.flatMap(u => u.vocabulary.flatMap(t => t.items.map(i => i.word))).filter(w => w !== item.word);
        const opts = sample([item.word, ...wrongWords], 4);
        bank.push({
          type: 'Vocab',
          unitId: unit.id,
          question: `What word means: "${item.def}"?`,
          options: opts,
          correct: opts.indexOf(item.word),
          feedback: `✅ Correct! "${item.word}" = ${item.def}. Example: ${item.ex}`
        });
        const wrongDefs = targetUnits.flatMap(u => u.vocabulary.flatMap(t => t.items.map(i => i.def))).filter(d => d !== item.def);
        const opts2 = sample([item.def, ...wrongDefs], 4);
        bank.push({
          type: 'Vocab',
          unitId: unit.id,
          question: `What is the best definition of "${item.word}"?`,
          options: opts2,
          correct: opts2.indexOf(item.def),
          feedback: `✅ Correct! "${item.word}" means: ${item.def}. Example: ${item.ex}`
        });
      });
    });
  });
  return bank;
}

export async function generateQuizQuestions(unitId = null, topicId = null, count = 15) {
  // Si es quiz de tema de gramática específico, usar IA
  if (topicId) {
    const unit = unitId ? unitsData.find(u => u.id === unitId) : null;
    const grammarTopic = unit?.grammar.find(g => g.quizTopicId === topicId);
    if (grammarTopic) {
      const aiQuestions = await generateGrammarQuiz(grammarTopic.title, unit?.title || 'EVOLVE 3', count);
      if (Array.isArray(aiQuestions) && aiQuestions.length > 0) {
        return aiQuestions.map(q => ({ ...q, type: 'Grammar (AI)', unitId: unitId || 0 })).slice(0, count);
      }
    }
  }
  // Si no hay IA o es quiz de unidad/libro, usar banco local de vocabulario
  let bank = generateVocabQuestions(unitId);
  return sample(bank, Math.min(count, bank.length));
}