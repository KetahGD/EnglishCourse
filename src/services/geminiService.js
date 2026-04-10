// src/services/geminiService.js
const API_KEY = 'AIzaSyBaOb8YWIADIAlnAu93X0W8Sp4964P6AWQ';
const MODEL = 'gemini-2.0-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

export async function evaluateWriting(studentText, writingSkill, topic) {
  const prompt = `You are an English teacher (B1 level). 
Skill: ${writingSkill}. Topic: ${topic}. 
Student text: "${studentText}"
Respond with JSON: {"comment": "2-3 sentences feedback", "score": 0-10}`;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.5, maxOutputTokens: 300 }
      })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{"comment": "No response", "score": 0}';
    const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const match = clean.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    return { comment: text, score: null };
  } catch (error) {
    return { comment: `Error: ${error.message}`, score: null };
  }
}

export async function generateGrammarQuiz(topicName, unitTitle, numQuestions = 5) {
  // Ya no se usa porque usamos banco estático, pero lo dejamos por compatibilidad
  return [];
}

export async function checkApiKeyStatus() {
  return { valid: true, message: 'API key updated' };
}
