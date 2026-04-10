// src/data/unitsData.js
// EVOLVE 3 (B1) – Contenido completo de las 12 unidades
// Lenguaje simplificado para facilitar la comprensión (nivel B1)
// La gramática se mantiene extensa y detallada

export const unitsData = [
  // ===================== UNIDAD 1 =====================
  {
    id: 1,
    title: "Who We Are",
    topic: "People & Personality",
    desc: "Learn to describe personality, introduce yourself, and ask polite questions.",
    vocabulary: [
      {
        topic: "Adjectives — Describing Personality",
        items: [
          { word: "brave", pos: "adj", def: "Not afraid to face danger.", ex: "She was brave enough to speak in front of 500 people." },
          { word: "cheerful", pos: "adj", def: "Always happy and positive.", ex: "He's always cheerful, even on Mondays." },
          { word: "easygoing", pos: "adj", def: "Relaxed; doesn't get upset easily.", ex: "She's so easygoing — she never complains." },
          { word: "generous", pos: "adj", def: "Gives time, money or help freely.", ex: "He was generous enough to pay for everyone." },
          { word: "helpful", pos: "adj", def: "Always ready to help.", ex: "Thanks — you've been really helpful." },
          { word: "honest", pos: "adj", def: "Always tells the truth.", ex: "I appreciate that she's honest with me." },
          { word: "intelligent", pos: "adj", def: "Smart; learns quickly.", ex: "He's very intelligent and learns fast." },
          { word: "nervous", pos: "adj", def: "Worried or anxious.", ex: "I feel nervous before exams." },
          { word: "reliable", pos: "adj", def: "People can trust you.", ex: "If you need someone reliable, ask Jodi." },
          { word: "selfish", pos: "adj", def: "Only cares about himself/herself.", ex: "It was selfish of him to eat it all." },
          { word: "serious", pos: "adj", def: "Thoughtful; not joking.", ex: "He's serious about his studies." },
          { word: "sociable", pos: "adj", def: "Likes being with people.", ex: "He's very sociable and knows everyone." }
        ]
      },
      {
        topic: "Verbs — Personal Information",
        items: [
          { word: "be born", pos: "v phr", def: "To come into the world.", ex: "She was born in Mexico City." },
          { word: "be raised", pos: "v phr", def: "To grow up in a place or family.", ex: "He was raised near the coast." },
          { word: "be into", pos: "v phr", def: "To be very interested in something.", ex: "She's into photography." },
          { word: "be married", pos: "v phr", def: "To have a husband or wife.", ex: "He is married." },
          { word: "be single", pos: "v phr", def: "Not married.", ex: "She is single." },
          { word: "live alone", pos: "v phr", def: "To live without other people.", ex: "He lives alone downtown." },
          { word: "live with my family", pos: "v phr", def: "To live with parents or relatives.", ex: "I live with my family." },
          { word: "celebrate", pos: "verb", def: "To do something special for an occasion.", ex: "They celebrate their anniversary every year." },
          { word: "retire", pos: "verb", def: "To stop working permanently (usually at an older age).", ex: "She retired at 65." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "go-getter", pos: "noun", def: "An ambitious and motivated person.", ex: "She's a real go-getter; she started her own business at 25.", register: "Neutral to informal" },
          { word: "larger-than-life personality", pos: "noun phrase", def: "A very extroverted and charismatic person.", ex: "His larger-than-life personality always lights up the room.", register: "Descriptive/formal colloquial" },
          { word: "people person", pos: "noun", def: "Someone who enjoys interacting with others.", ex: "Sales roles suit her because she's such a people person.", register: "Common colloquial" },
          { word: "down-to-earth", pos: "adj.", def: "Practical, simple, without pretension.", ex: "Despite his fame, he's surprisingly down-to-earth.", register: "Positive colloquial" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/personality-adjectives/",
      "https://www.vocabulary.com/lists/personality-adjectives",
      "https://www.merriam-webster.com/word-games/personality-adjectives",
      "https://www.englishclub.com/vocabulary/adjectives-personality.php",
      "https://www.cambridge.org/features/cald4/personality/",
      "https://www.bbc.co.uk/learningenglish/english/features/vocabulary"
    ],
    grammar: [
      {
        title: "Information Questions",
        explanation: {
          technicalAnalysis: "**Form:** Question word + auxiliary + subject + base verb? (except when the wh‑word is the subject).\n\n**Wh‑word categories:**\n• **Pronouns** – who, what, which (replace a noun)\n• **Determiners** – whose, which + noun (modify a noun)\n• **Adverbs** – where, when, why, how (modify the verb/clause)\n\n**Key rule:** Invert auxiliary and subject. When the wh‑word is the subject (Who called?), no auxiliary is needed.\n\n**Compound 'how':** How tall, how often, how long → How tall are you?",
          advancedNuances: "**Formal:** Always use full inversion. Preferred in writing and professional contexts.\n**Informal:** Auxiliary may be dropped in very casual speech ('Where you going?') – avoid in formal use.\n**Register shift:** Use indirect questions ('Could you tell me...') with strangers or superiors.\n**Intonation:** Wh‑questions end with falling intonation (↘), unlike yes/no questions (↗).",
          grayAreas: "• 'Which' implies a limited set of options; 'what' is open.\n• Subject wh‑questions: 'What happened?' – no 'did'.\n• Indirect questions never invert: 'Do you know where he lives?' (not 'where does he live').\n• 'How' + adjective/adverb: How long, how often, how fast.\n• Some dialects use intonation alone to signal a question (non‑standard).",
          errorAnalysis: [
            { type: "Correct", example: "Where do you live?", explanation: "Proper inversion with auxiliary.", correction: "—" },
            { type: "Correct", example: "Who called you?", explanation: "Wh‑word is subject → no auxiliary.", correction: "—" },
            { type: "Incorrect", example: "Where live you?", explanation: "Wrong word order.", correction: "Where do you live?" },
            { type: "Fossilized Error", example: "What you name?", explanation: "Missing auxiliary and possessive.", correction: "What is your name?" }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Indirect Questions (Perfect English Grammar)", url: "https://www.perfect-english-grammar.com/indirect-questions.html" },
            { type: "Theory", title: "Indirect Questions (Test‑English)", url: "https://test-english.com/grammar-points/b1-b2/indirect-questions/" },
            { type: "Theory", title: "Indirect Questions (Grammar Monster)", url: "https://www.grammar-monster.com/glossary/indirect_questions.htm" },
            { type: "Theory", title: "Indirect Questions (ESLbase)", url: "https://www.eslbase.com/grammar/indirect-questions/" },
            { type: "Theory", title: "Direct/Indirect Questions (English Coach)", url: "https://englishcoachonline.com/blog/direct-indirect-questions/" },
            { type: "Theory", title: "Indirect Questions (Gramática Inglesa)", url: "https://www.gramatica-inglesa.com/en/units/asking-questions/indirect-questions" },
            { type: "Exercise", title: "e‑Grammar – Indirect Questions", url: "https://www.e-grammar.org/indirect-question/test1-exercise1/" },
            { type: "Exercise", title: "Practising English – Indirect Questions", url: "https://www.practisingenglish.com/english-grammar-exercises/indirect-questions1.htm" }
          ]
        },
        structure: "Question word + auxiliary + subject + base verb?",
        examples: [
          "Where do you live?",
          "When is your birthday?",
          "Who is your boss?",
          "Whose phone is this?",
          "How do you make chocolate cake?",
          "How often do you exercise?",
          "How tall are your children?"
        ],
        link: "https://www.perfect-english-grammar.com/indirect-questions.html",
        quizTopicId: "info_q"
      },
      {
        title: "Indirect Questions (Polite Questions)",
        explanation: {
          technicalAnalysis: "**Form:** Introductory phrase + question word + subject + verb (no inversion).\n**Introductory phrases:** Do you know..., Could you tell me..., I'd like to know..., I wonder...\n**Yes/No questions:** Use 'if' or 'whether'.\n**Punctuation:** Ends with a period if the main clause is a statement; with a question mark if the main clause is a question.",
          advancedNuances: "**Formal:** Preferred in business emails, interviews, and academic writing.\n**Informal:** Direct questions are more natural with friends.\n**Register shift:** Use indirect questions to show respect or when you don't know the person.\n**Intonation:** Indirect questions typically end with falling intonation (↘).\n**If vs whether:** 'Whether' is more formal and required before infinitives ('I don't know whether to go').",
          grayAreas: "• The embedded clause always keeps subject‑verb order: 'where he lives' (not 'where does he live').\n• 'Do you know if she plays?' – 'if' introduces a yes/no question.\n• Negative embedded questions: 'Can you tell me why he didn't come?' – the negative belongs inside.\n• Some verbs (ask, wonder) take indirect questions; others (say, tell) take statements.",
          errorAnalysis: [
            { type: "Correct", example: "Can you tell me where he lives?", explanation: "No inversion inside the embedded clause.", correction: "—" },
            { type: "Incorrect", example: "Can you tell me where does he live?", explanation: "Incorrect inversion.", correction: "where he lives" },
            { type: "Incorrect", example: "I want to know where is he?", explanation: "Inversion and wrong punctuation.", correction: "I want to know where he is." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Indirect Questions (Perfect English Grammar)", url: "https://www.perfect-english-grammar.com/indirect-questions.html" },
            { type: "Theory", title: "Indirect Questions (Test‑English)", url: "https://test-english.com/grammar-points/b1-b2/indirect-questions/" },
            { type: "Theory", title: "Indirect Questions (Grammar Monster)", url: "https://www.grammar-monster.com/glossary/indirect_questions.htm" },
            { type: "Theory", title: "Indirect Questions (ESLbase)", url: "https://www.eslbase.com/grammar/indirect-questions/" },
            { type: "Theory", title: "Direct/Indirect Questions (English Coach)", url: "https://englishcoachonline.com/blog/direct-indirect-questions/" },
            { type: "Theory", title: "Indirect Questions (Gramática Inglesa)", url: "https://www.gramatica-inglesa.com/en/units/asking-questions/indirect-questions" },
            { type: "Exercise", title: "e‑Grammar – Indirect Questions", url: "https://www.e-grammar.org/indirect-question/test1-exercise1/" },
            { type: "Exercise", title: "Practising English – Indirect Questions", url: "https://www.practisingenglish.com/english-grammar-exercises/indirect-questions1.htm" }
          ]
        },
        structure: "Do you know / Could you tell me + question word + subject + verb?",
        examples: [
          "Do you know where he lives?",
          "I'd like to know where he was born.",
          "Can you tell me if she plays sports?",
          "Could you tell me how often the bus runs?",
          "I wonder whether she's coming tonight."
        ],
        link: "https://www.perfect-english-grammar.com/indirect-questions.html",
        quizTopicId: "indirect_q"
      }
    ],
    expressions: [
      { cat: "Making Introductions", phrases: ["Hello, I'm Nina.", "I'm Mia, Jodi's sister.", "This is Rafe, my husband.", "This is Nina, Jodi's coworker."] },
      { cat: "How You Know Someone", phrases: ["How do you know Jodi?", "I work with her.", "I'm her sister / friend / coworker."] },
      { cat: "Ending a Conversation", phrases: ["I should let you go.", "Sorry, I have to go now.", "It was really nice to meet you.", "It was nice talking to you."] },
      { cat: "Meeting Someone You've Heard About", phrases: ["It's great to meet you — I've heard good things about you!", "Good things, I hope!", "I've heard a lot about you."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/the-best-ways-to-introduce-yourself-in-english",
      "https://www.englishclub.com/speaking/small-talk.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/make-a-good-first-impression",
      "https://www.fluentu.com/blog/english/english-introduction-phrases/",
      "https://www.ef.edu/english-resources/english-vocabulary/small-talk/"
    ],
    writing: {
      task: "Professional LinkedIn profile summary",
      skill: "How to write a personal brand narrative",
      description: "Write a 100-150 word professional summary for LinkedIn. Show your personality, skills, and career goals.",
      scaffolding: [
        "Hook: Start with a strong sentence about your professional passion.",
        "Background: Briefly describe your experience or education.",
        "Value: Highlight your unique skills and achievements.",
        "Call to Action: Say what you are looking for (job, network, etc.)."
      ],
      resourceLink: "https://www.linkedin.com/help/linkedin/answer/a1338655"
    },
    writingResources: [
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html",
      "https://www.grammarly.com/blog/how-to-write-a-linkedin-summary/",
      "https://www.coursera.org/articles/linkedin-summary",
      "https://zety.com/blog/linkedin-summary"
    ],
    speaking: {
      focus: "Connected Speech: Elision and Weak Forms",
      explanation: "Native speakers often say words quickly and drop sounds. For example, 'I am going to' becomes 'I'm gonna'. Practice this to sound more natural.",
      examples: ["I am → I'm", "going to → gonna", "want to → wanna", "have to → hafta"],
      classroomActivity: [
        "Paper Test: Hold a paper in front of your mouth. Say full forms (I am going to) vs. reduced forms (I'm gonna). The paper should move less with reductions.",
        "Role-Play: One student asks full questions, the other answers with reductions."
      ],
      resourceLink: "https://rachelsenglish.com/reducing-common-words/"
    },
    speakingResources: [
      "https://rachelsenglish.com/connected-speech/",
      "https://www.pronuncian.com/lessons",
      "https://youglish.com/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation"
    ],
    listening: {
      strategy: "Identifying Signposting Language",
      explanation: "Listen for phrases that show the structure of a talk. Examples: 'Now, moving on to...' These help you follow the speaker's ideas.",
      actionSteps: [
        "Listen to a podcast introduction.",
        "Find phrases that introduce a new topic.",
        "Write down the main idea after each signpost.",
        "Practice using these phrases yourself."
      ],
      resources: [
        { type: "Video", title: "BBC 6 Minute English - Introductions", url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" },
        { type: "Interactive", title: "YouGlish", url: "https://youglish.com/" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.esl-lab.com/",
      "https://www.ted.com/talks"
    ]
  },
  // ===================== UNIDAD 2 =====================
  {
    id: 2,
    title: "So Much Stuff",
    topic: "Technology & Possessions",
    desc: "Learn to describe devices, possessions, and things you've had for a long time.",
    vocabulary: [
      {
        topic: "Adjectives — Describing Possessions",
        items: [
          { word: "brand new", pos: "adj", def: "Completely new, never used.", ex: "She bought a brand new laptop." },
          { word: "damaged", pos: "adj", def: "Broken or harmed.", ex: "The screen was damaged." },
          { word: "fancy", pos: "adj", def: "Expensive or with many details.", ex: "A fancy smartwatch." },
          { word: "outdated", pos: "adj", def: "Old; not modern anymore.", ex: "My old phone is outdated." },
          { word: "plain", pos: "adj", def: "Simple; without decoration.", ex: "A plain case." },
          { word: "special", pos: "adj", def: "Important or meaningful.", ex: "This watch is special." },
          { word: "useful", pos: "adj", def: "Helps you do something.", ex: "A portable charger is useful." },
          { word: "useless", pos: "adj", def: "Not helpful at all.", ex: "That app was useless." }
        ]
      },
      {
        topic: "Nouns & Verbs — Tech Features",
        items: [
          { word: "device", pos: "noun", def: "An electronic gadget (phone, tablet, etc.).", ex: "Sync this app on every device." },
          { word: "folder", pos: "noun", def: "A place to organize files on a computer.", ex: "Put the photos in a folder." },
          { word: "home screen", pos: "noun", def: "The main screen of a phone or tablet.", ex: "I keep key apps on my home screen." },
          { word: "model", pos: "noun", def: "A specific version of a product.", ex: "Which phone model is it?" },
          { word: "storage", pos: "noun", def: "Space to save files (photos, apps, etc.).", ex: "My phone has 64GB of storage." },
          { word: "delete", pos: "verb", def: "Remove something permanently.", ex: "I had to delete old photos." },
          { word: "set up", pos: "v phr", def: "Prepare a device to be used.", ex: "It took an hour to set up my new phone." },
          { word: "sync", pos: "verb", def: "Update information across devices automatically.", ex: "The calendar syncs automatically." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "cutting-edge technology", pos: "noun phrase", def: "Very advanced technology.", ex: "The lab uses cutting-edge technology for research.", register: "Formal/Academic" },
          { word: "state-of-the-art", pos: "adj.", def: "The most advanced equipment or technology.", ex: "Our new office has a state-of-the-art conference room.", register: "Formal/Professional" },
          { word: "user-friendly", pos: "adj.", def: "Easy to use.", ex: "This app is incredibly user-friendly for beginners.", register: "Neutral/Commercial" },
          { word: "tech-savvy", pos: "adj.", def: "Very skilled with technology.", ex: "Kids today are more tech-savvy than previous generations.", register: "Colloquial/Descriptive" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/technology-vocabulary-english/",
      "https://www.vocabulary.com/lists/technology-words",
      "https://www.cambridge.org/us/cambridgeenglish/catalog/general-english/vocabulary-in-use/",
      "https://www.englishclub.com/vocabulary/technology.php",
      "https://www.merriam-webster.com/games/tech-vocabulary"
    ],
    grammar: [
      {
        title: "Present Perfect: ever, never, for, since",
        explanation: {
          technicalAnalysis: "**Form:** have/has + past participle\n\n**Uses:**\n• **Experience** – ever (in questions), never (negative statements)\n• **Duration** – for + period of time (for two years), since + starting point (since 2020)\n\n**Contrast with Simple Past:** Simple Past = completed action with no connection to now (She left yesterday). Present Perfect = present relevance (She has left – she's still gone).\n**Just / recently:** signal near‑past completion.",
          advancedNuances: "**Formal (British):** Present Perfect is preferred with 'just', 'already', 'yet'.\n**Informal (American):** Simple Past often replaces Present Perfect ('Did you eat yet?').\n**Academic:** Use Present Perfect for past research with present relevance ('Studies have shown...').\n**Timeline tip:** Draw a line from past to NOW to visualise 'for' and 'since'.",
          grayAreas: "• Stative verbs (know, believe) work with Present Perfect: 'I've known her for years.'\n• 'Since' needs a point, 'for' needs a duration – don't confuse them.\n• Never use Present Perfect with definite past time expressions (yesterday, last year).\n• 'Ever' only in questions and negatives.",
          errorAnalysis: [
            { type: "Correct", example: "Have you ever played chess?", explanation: "Correct use of 'ever'.", correction: "—" },
            { type: "Correct", example: "I've lived here since 2019.", explanation: "'since' + starting point.", correction: "—" },
            { type: "Incorrect", example: "I have played chess two years ago.", explanation: "Definite past time → Simple Past.", correction: "I played chess two years ago." },
            { type: "Incorrect", example: "I've had this phone since two years.", explanation: "'since' needs a point, not a duration.", correction: "I've had this phone for two years." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Present Perfect – EF", url: "https://www.ef.com/wwen/english-resources/english-grammar/present-perfect-ever-never-already-yet/" },
            { type: "Theory", title: "Present Perfect – Wall Street English", url: "https://www.wallstreetenglish.com/exercises/the-present-perfect-tense-ever-never-already-yet/" },
            { type: "Theory", title: "Present Perfect – Test‑English", url: "https://test-english.com/grammar-points/a2/present-perfect/" },
            { type: "Theory", title: "Present Perfect – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-simple-continuous" },
            { type: "Theory", title: "Just, Yet, Already, Ever, Never", url: "https://www.masterenglishgrammar.com/advanced-sentence-structures/67-just-yet-already-ever-never" },
            { type: "Exercise", title: "GrammarBank – Ever/Never/Just/Already/Yet", url: "https://www.grammarbank.com/ever-never-just-already-yet.html" },
            { type: "Exercise", title: "My English Pages – Already, Since, For, Yet, Just", url: "https://www.myenglishpages.com/grammar-exercise-already-since-for-yet-just/" },
            { type: "Exercise", title: "Grammarism – Ever/Never", url: "https://www.grammarism.com/present-perfect-with-ever-never-exercises/" },
            { type: "Exercise", title: "iSLCollective – Worksheet", url: "https://en.islcollective.com/english-esl-worksheets/grammar-topic/present-perfect-tenses/present-perfect-with-alreadyjustyeteverneverforsince/24180" }
          ]
        },
        structure: "have/has + past participle",
        examples: [
          "Have you ever felt that way?",
          "I've never played computer games.",
          "I've had it for two years.",
          "I've had it since I was 12.",
          "She's just finished the project.",
          "Have you recently updated the app?"
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect",
        quizTopicId: "pp_ever"
      },
      {
        title: "Present Perfect: already and yet",
        explanation: {
          technicalAnalysis: "**already** – used in affirmative sentences to show something happened sooner than expected. Position: between 'have/has' and the past participle.\n**yet** – used in negative sentences and questions for something expected but not done. Position: at the end of the clause.\n\n**Example:**\n• I've already downloaded the app. (completed early)\n• I haven't tried it yet. (not done, but expected)\n• Have you tried it yet? (asking about completion)",
          advancedNuances: "**Formal:** Both are used across registers; 'yet' is common in professional updates.\n**Informal:** 'already' can shift to the end for emphasis ('I've seen it already!').\n**Dialectal:** British English strongly uses Present Perfect with 'yet'/'already'. American English often uses Simple Past ('Did you finish yet?').\n**Still:** 'still' + negative adds extra expectation: 'She still hasn't called yet.'",
          grayAreas: "• 'already' at the end of a sentence is fine in informal speech.\n• 'yet' never appears in affirmative sentences.\n• In informal American English, 'Did you call yet?' is common but not formal.\n• 'still' focuses on time passing; 'yet' focuses on whether something has happened.",
          errorAnalysis: [
            { type: "Correct", example: "I've already seen that movie.", explanation: "Mid‑position is standard.", correction: "—" },
            { type: "Correct", example: "Have you finished the project yet?", explanation: "Correct use of 'yet' in a question.", correction: "—" },
            { type: "Incorrect", example: "I haven't already finished.", explanation: "Use 'yet' in negatives.", correction: "I haven't finished yet." },
            { type: "Incorrect", example: "I yet haven't called him.", explanation: "'yet' must be at the end.", correction: "I haven't called him yet." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Present Perfect – EF", url: "https://www.ef.com/wwen/english-resources/english-grammar/present-perfect-ever-never-already-yet/" },
            { type: "Theory", title: "Present Perfect – Wall Street English", url: "https://www.wallstreetenglish.com/exercises/the-present-perfect-tense-ever-never-already-yet/" },
            { type: "Theory", title: "Present Perfect – Test‑English", url: "https://test-english.com/grammar-points/a2/present-perfect/" },
            { type: "Theory", title: "Present Perfect – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-simple-continuous" },
            { type: "Theory", title: "Just, Yet, Already, Ever, Never", url: "https://www.masterenglishgrammar.com/advanced-sentence-structures/67-just-yet-already-ever-never" },
            { type: "Exercise", title: "GrammarBank – Ever/Never/Just/Already/Yet", url: "https://www.grammarbank.com/ever-never-just-already-yet.html" },
            { type: "Exercise", title: "My English Pages – Already, Since, For, Yet, Just", url: "https://www.myenglishpages.com/grammar-exercise-already-since-for-yet-just/" },
            { type: "Exercise", title: "Grammarism – Ever/Never", url: "https://www.grammarism.com/present-perfect-with-ever-never-exercises/" },
            { type: "Exercise", title: "iSLCollective – Worksheet", url: "https://en.islcollective.com/english-esl-worksheets/grammar-topic/present-perfect-tenses/present-perfect-with-alreadyjustyeteverneverforsince/24180" }
          ]
        },
        structure: "have/has + already + past participle / have/has + past participle + yet",
        examples: [
          "I've already downloaded the app.",
          "I haven't tried it yet.",
          "Have you tried it yet?",
          "She's already set up her new phone.",
          "They haven't synced the data yet."
        ],
        link: "https://www.perfect-english-grammar.com/present-perfect.html",
        quizTopicId: "pp_already"
      }
    ],
    expressions: [
      { cat: "Introducing New Topics", phrases: ["So, you know I'm interested in old toys.", "And guess what? I just bought two more online!", "By the way, have you heard that Tori is in town?"] },
      { cat: "Changing the Subject", phrases: ["By the way...", "Oh, before I forget...", "Speaking of which..."] },
      { cat: "Short Questions to Show Interest", phrases: ["You did? Cool!", "She is? I haven't seen her in ages!", "Did you? Which model?"] },
      { cat: "How Long You've Had Things", phrases: ["How long have you had that?", "I've had it for about five years.", "I've had it since I was a child."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/phrases-about-technology",
      "https://www.fluentu.com/blog/english/english-phrases-for-shopping/",
      "https://www.englishclub.com/speaking/conversation-technology.php",
      "https://www.ef.edu/english-resources/english-vocabulary/computers-internet/"
    ],
    writing: {
      task: "Product review for an online marketplace (e.g., Amazon)",
      skill: "Persuasive writing with pros and cons",
      description: "Write a convincing product review that lists positives and negatives to help other buyers.",
      scaffolding: [
        "Intro: Name the product and your rating (e.g., 4 stars).",
        "Pros: List 2-3 advantages with examples.",
        "Cons: Mention 1-2 drawbacks politely.",
        "Conclusion: Summarize and say who would benefit most."
      ],
      resourceLink: "https://www.grammarly.com/blog/how-to-write-a-product-review/"
    },
    writingResources: [
      "https://www.grammarly.com/blog/how-to-write-a-product-review/",
      "https://www.amazon.com/review/guidelines",
      "https://www.consumerreports.org/how-to-write-a-helpful-review/",
      "https://owl.purdue.edu/owl/general_writing/common_writing_assignments/index.html"
    ],
    speaking: {
      focus: "Schwa Sound Reduction in Function Words",
      explanation: "Small words like 'a', 'an', 'the', 'of', 'to' are often pronounced with a very short sound /ə/ in natural speech.",
      examples: ["a phone → ə fəʊn", "the app → ðə æp", "to sync → tə sɪŋk"],
      classroomActivity: [
        "Minimal Pair Bingo: Create bingo cards with sentences that differ by schwa (e.g., 'I saw *a* plane' vs. 'Anna plane'). Listen and mark.",
        "Dictation: Read sentences at normal speed; students write and find the schwa reductions."
      ],
      resourceLink: "https://www.youtube.com/watch?v=Kvn9NTAUpaw"
    },
    speakingResources: [
      "https://www.youtube.com/watch?v=Kvn9NTAUpaw",
      "https://rachelsenglish.com/schwa/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/ep-170904",
      "https://www.pronuncian.com/lessons/schwa"
    ],
    listening: {
      strategy: "Tech Glossary Building Through Context",
      explanation: "When you hear new tech words, try to guess the meaning from the situation. Then check with a dictionary.",
      actionSteps: [
        "Watch a short tech review video.",
        "Write down new words you hear.",
        "Discuss with a classmate: what do they mean?",
        "Verify with a dictionary."
      ],
      resources: [
        { type: "Video", title: "Marques Brownlee (MKBHD)", url: "https://www.youtube.com/user/marquesbrownlee" },
        { type: "Interactive", title: "LyricsTraining", url: "https://lyricstraining.com/" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.ted.com/talks",
      "https://www.npr.org/podcasts/"
    ]
  },
  // ===================== UNIDAD 3 =====================
  {
    id: 3,
    title: "Getting Around",
    topic: "Cities & Transportation",
    desc: "Learn to describe city features, use public transportation, and give directions politely.",
    vocabulary: [
      {
        topic: "Nouns — City Features",
        items: [
          { word: "bridge", pos: "noun", def: "A structure that crosses water or a road.", ex: "The bridge connects the neighborhoods." },
          { word: "clinic", pos: "noun", def: "A small medical center.", ex: "There's a clinic nearby." },
          { word: "embassy", pos: "noun", def: "A foreign government's office in another country.", ex: "Go to the embassy for a visa." },
          { word: "ferry", pos: "noun", def: "A boat that carries people across water.", ex: "The ferry runs every hour." },
          { word: "hostel", pos: "noun", def: "A cheap place to stay for travelers.", ex: "We stayed at a hostel." },
          { word: "monument", pos: "noun", def: "A structure that honors a historical person or event.", ex: "The monument is in the main square." },
          { word: "sidewalk", pos: "noun", def: "The path next to a road for walking.", ex: "Walk on the sidewalk." },
          { word: "tunnel", pos: "noun", def: "An underground passage.", ex: "The train goes through a tunnel." }
        ]
      },
      {
        topic: "Nouns — Public Transportation",
        items: [
          { word: "arrival", pos: "noun", def: "The time when a vehicle reaches a place.", ex: "Check arrival times." },
          { word: "departure", pos: "noun", def: "The time when a vehicle leaves.", ex: "What's the departure time?" },
          { word: "fare", pos: "noun", def: "The money you pay to travel.", ex: "The subway fare is $2.50." },
          { word: "reservation", pos: "noun", def: "A booking for a seat in advance.", ex: "You need a reservation." },
          { word: "route", pos: "noun", def: "The path a vehicle follows.", ex: "Bus 42 takes a scenic route." },
          { word: "schedule", pos: "noun", def: "A timetable of times.", ex: "Check the schedule." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "get around town", pos: "v. phr.", def: "To move from place to place in a city.", ex: "The best way to get around town is by bike.", register: "Colloquial/Spoken" },
          { word: "commute-friendly", pos: "adj.", def: "Convenient for traveling to work or school.", ex: "This neighborhood is very commute-friendly to the downtown area.", register: "Descriptive/Informative" },
          { word: "rush hour", pos: "noun phrase", def: "The busiest time of day for traffic.", ex: "Avoid driving during rush hour if possible.", register: "Universal/Neutral" },
          { word: "eco-conscious traveler", pos: "noun phrase", def: "A traveler who cares about the environment.", ex: "She prefers trains because she's an eco-conscious traveler.", register: "Modern/Aware" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/transportation-vocabulary/",
      "https://www.vocabulary.com/lists/transportation-english",
      "https://www.englishclub.com/vocabulary/transportation.php",
      "https://www.bbc.co.uk/learningenglish/english/features/vocabulary/transport",
      "https://dictionary.cambridge.org/topics/transport/"
    ],
    grammar: [
      {
        title: "Articles (a / an / the / no article)",
        explanation: {
          technicalAnalysis: "**a/an** – indefinite, first mention, singular count noun. Use 'an' before vowel sounds (an engineer, an hour).\n**the** – definite, specific, already mentioned, or unique (the sun, the president).\n**∅ (no article)** – plural count nouns and uncountable nouns in general statements (Hostels are cheap).\n**Tracking system:** Articles tell the listener if the noun is new information (a/an) or already known (the).",
          advancedNuances: "**Formal:** Precise article use is expected; errors signal lack of mastery.\n**Informal:** Articles are often dropped in headlines or notes ('Man arrested').\n**Geographic exceptions:** Use 'the' with plurals (the Netherlands), oceans (the Pacific), mountain ranges (the Andes), and some countries (the USA). No 'the' with continents, most countries, cities, or single mountains.\n**Abstract nouns:** Zero article for general reference ('Love is complicated'), 'the' when specific ('The love they shared was rare').",
          grayAreas: "• Some nouns are always uncountable: furniture, advice, information, traffic, weather – never 'a/an'.\n• First mention: 'a' → later mentions: 'the'.\n• Meals (breakfast, lunch) take zero article unless modified: 'Breakfast is at 7' vs. 'The breakfast we had was great'.\n• Languages, subjects, sports take zero article.",
          errorAnalysis: [
            { type: "Correct", example: "Is there a ferry in your city?", explanation: "First mention, indefinite.", correction: "—" },
            { type: "Correct", example: "What time does the ferry run?", explanation: "Second mention, specific.", correction: "—" },
            { type: "Incorrect", example: "I'm studying to be engineer.", explanation: "Missing article before job.", correction: "I'm studying to be an engineer." },
            { type: "Fossilized Error", example: "Hostel is cheap.", explanation: "Singular count noun without article.", correction: "A hostel is cheap. / Hostels are cheap." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Modal Verbs – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs" },
            { type: "Theory", title: "Modals of Advice – UVic", url: "https://continuingstudies.uvic.ca/elc/studyzone/330/grammar/330-modals-advice" },
            { type: "Theory", title: "Modals of Advice and Necessity – Ellii", url: "https://ellii.com/blog/suggestions-with-modals-of-advice-and-necessity-2" },
            { type: "Theory", title: "Modals – To Learn English", url: "https://www.tolearnenglish.com/exercises/exercise-english-2/exercise-english-105735.php" },
            { type: "Exercise", title: "Modalities – Engelsklaslokaal", url: "https://engelsklaslokaal.nl/en/english-grammar-exercises/modal-verbs/modalities/" },
            { type: "Exercise", title: "Perfect English Grammar – Could have / Should have", url: "https://www.perfect-english-grammar.com/could-have-should-have-would-have-exercise-1.html" },
            { type: "Exercise", title: "Vedantu – Modals Exercises", url: "https://www.vedantu.com/english/modals-exercises" },
            { type: "Exercise", title: "Testbook – Modals Exercises", url: "https://testbook.com/english-grammar/modals-exercises" }
          ]
        },
        structure: "a/an (indefinite), the (definite), ∅ (general plural)",
        examples: [
          "Is there a ferry in your city?",
          "I'm studying to be an engineer.",
          "What time does the ferry run?",
          "Hostels are usually cheap.",
          "The sun rises in the east.",
          "I need some advice about traffic."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/articles",
        quizTopicId: "articles"
      },
      {
        title: "Modals for Advice (should / could / would)",
        explanation: {
          technicalAnalysis: "**should** – strong recommendation or advice (normative expectation).\n**could** – suggests an option or possibility, softer and less direct.\n**would** – in advice contexts, appears in conditional frames or hedged suggestions (softened advice).\n\n**Syntax:** Modal + base verb (no 'to').\n**Note:** 'must' expresses obligation (external or legal), not advice.",
          advancedNuances: "**Formal:** 'should' for written recommendations. 'would' adds deference.\n**Informal:** 'could' and 'Why don't you...' are natural between friends.\n**Academic:** 'should' in recommendations sections; 'could' for future research possibilities.\n**Register shift:** To a superior, use 'You might want to...' or 'You could consider...' instead of 'You should...'.",
          grayAreas: "• 'shouldn't' advises against but is weaker than 'must not' (prohibition).\n• 'could' can also be the past of 'can' (ability), which is different.\n• 'would' in advice ('I would try the metro') implies 'if I were you'.\n• Compare: 'You should not go' (strong advice against) vs. 'You don't have to go' (no obligation).",
          errorAnalysis: [
            { type: "Correct", example: "You should take the subway.", explanation: "Strong recommendation.", correction: "—" },
            { type: "Correct", example: "You could also get the AirTrain.", explanation: "Softer option.", correction: "—" },
            { type: "Correct", example: "I wouldn't take that route if I were you.", explanation: "Hedged advice.", correction: "—" },
            { type: "Incorrect", example: "You should to take the subway.", explanation: "Modal + bare infinitive, not 'to'.", correction: "You should take the subway." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Modal Verbs – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs" },
            { type: "Theory", title: "Modals of Advice – UVic", url: "https://continuingstudies.uvic.ca/elc/studyzone/330/grammar/330-modals-advice" },
            { type: "Theory", title: "Modals of Advice and Necessity – Ellii", url: "https://ellii.com/blog/suggestions-with-modals-of-advice-and-necessity-2" },
            { type: "Theory", title: "Modals – To Learn English", url: "https://www.tolearnenglish.com/exercises/exercise-english-2/exercise-english-105735.php" },
            { type: "Exercise", title: "Modalities – Engelsklaslokaal", url: "https://engelsklaslokaal.nl/en/english-grammar-exercises/modal-verbs/modalities/" },
            { type: "Exercise", title: "Perfect English Grammar – Could have / Should have", url: "https://www.perfect-english-grammar.com/could-have-should-have-would-have-exercise-1.html" },
            { type: "Exercise", title: "Vedantu – Modals Exercises", url: "https://www.vedantu.com/english/modals-exercises" },
            { type: "Exercise", title: "Testbook – Modals Exercises", url: "https://testbook.com/english-grammar/modals-exercises" }
          ]
        },
        structure: "modal + base verb",
        examples: [
          "You should take the subway.",
          "You could get the AirTrain.",
          "I wouldn't take that route. I'd get a taxi.",
          "You shouldn't drive during rush hour.",
          "Could you try the bus instead?"
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/modal-verbs",
        quizTopicId: "modals_advice"
      }
    ],
    expressions: [
      { cat: "Asking for Directions", phrases: ["Can you tell me how to get to meeting room C?", "How do I get to the stairs?", "Which way is the elevator?", "Do you know which floor the cafeteria is on?"] },
      { cat: "Giving Directions", phrases: ["It's upstairs on the fifth floor.", "Go down that hallway — they're on your right.", "Go through the lobby — it's on the left.", "Take the elevator to the third floor."] },
      { cat: "Repeating to Show Understanding", phrases: ["Meeting room C? — It's upstairs.", "The stairs? — Go down that hallway."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-give-directions-in-english",
      "https://www.fluentu.com/blog/english/english-phrases-for-directions/",
      "https://www.englishclub.com/speaking/asking-directions.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/give-directions",
      "https://www.ef.edu/english-resources/english-vocabulary/city-locations/"
    ],
    writing: {
      task: "Travel blog post about your ideal city weekend",
      skill: "Narrative sequencing with sensory details",
      description: "Write a 120-150 word blog post about a perfect weekend in a city. Include sights, sounds, and tastes.",
      scaffolding: [
        "Setting: Describe your arrival and first impressions.",
        "Morning/Afternoon/Evening: Tell what you did in order.",
        "Highlight: Focus on one special moment.",
        "Closing: Share why it was ideal and recommend it."
      ],
      resourceLink: "https://www.nomadicmatt.com/travel-blog-tips/"
    },
    writingResources: [
      "https://www.nomadicmatt.com/travel-blog-tips/",
      "https://www.grammarly.com/blog/travel-writing/",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/developing_an_outline/index.html",
      "https://www.lonelyplanet.com/articles/tips-for-travel-writing"
    ],
    speaking: {
      focus: "Word Stress Patterns in Compound Nouns",
      explanation: "In two-word nouns, we usually stress the first word. Example: 'TRAFFIC light' not 'traffic LIGHT'.",
      examples: ["TRAFFIC light", "SUBWAY station", "PARKING meter"],
      classroomActivity: [
        "Sorting Game: Give students cards with compound nouns. They sort by stress pattern.",
        "Chain Description: Each student describes a place using 2-3 compound nouns with correct stress. The next student repeats and adds."
      ],
      resourceLink: "https://www.cambridge.org/us/cambridgeenglish/catalogue/?isbn=9781107684986"
    },
    speakingResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/word-stress",
      "https://rachelsenglish.com/word-stress/",
      "https://www.englishclub.com/pronunciation/word-stress.php",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Direction Mapping While Listening",
      explanation: "While someone gives directions, draw a simple map to help you remember.",
      actionSteps: [
        "Partner A describes a route from point A to point B.",
        "Partner B draws a map with arrows and landmarks.",
        "Switch roles and repeat."
      ],
      resources: [
        { type: "Video", title: "English Addict with Mr Steve - Asking for Directions", url: "https://www.youtube.com/watch?v=4QF6bUxYJyE" },
        { type: "Interactive", title: "ESL Lounge - Prepositions of Place Listening", url: "https://www.esl-lounge.com/student/listening-preposition-place.php" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.esl-lab.com/",
      "https://www.ted.com/talks"
    ]
  },
  // ===================== UNIDAD 4 =====================
  {
    id: 4,
    title: "What Will Happen?",
    topic: "Plans, Predictions & Feelings",
    desc: "Learn to make predictions, talk about plans, and reassure someone.",
    vocabulary: [
      {
        topic: "Adjectives — Opinions & Reactions (-ed / -ing)",
        items: [
          { word: "amused / amusing", pos: "adj", def: "Feeling entertained / causing entertainment.", ex: "She was amused. His jokes are amusing." },
          { word: "annoyed / annoying", pos: "adj", def: "Feeling irritated / causing irritation.", ex: "I'm annoyed. The noise is annoying." },
          { word: "disappointed / disappointing", pos: "adj", def: "Feeling let down / causing sadness.", ex: "He was disappointed. The result was disappointing." },
          { word: "embarrassed / embarrassing", pos: "adj", def: "Feeling awkward / causing awkwardness.", ex: "I felt embarrassed. It was embarrassing." },
          { word: "frightened / frightening", pos: "adj", def: "Feeling fear / causing fear.", ex: "She was frightened. The storm was frightening." },
          { word: "shocked / shocking", pos: "adj", def: "Feeling surprise / causing shock.", ex: "Everyone was shocked. The news was shocking." },
          { word: "surprised / surprising", pos: "adj", def: "Feeling astonished / causing surprise.", ex: "I was surprised. That's surprising." },
          { word: "fascinated / fascinating", pos: "adj", def: "Deeply interested / very interesting.", ex: "They were fascinated. It's a fascinating topic." }
        ]
      },
      {
        topic: "Verbs — Making Decisions & Plans",
        items: [
          { word: "arrange", pos: "verb", def: "Organize details in advance.", ex: "Can you arrange the meeting?" },
          { word: "deal with", pos: "v phr", def: "Handle or take responsibility for something.", ex: "I'll deal with booking." },
          { word: "get in touch with", pos: "v phr", def: "Contact someone.", ex: "I'll get in touch with them." },
          { word: "let someone know", pos: "v phr", def: "Tell or inform someone.", ex: "Please let me know." },
          { word: "look into", pos: "v phr", def: "Investigate or research.", ex: "I'll look into the options." },
          { word: "meet up", pos: "v phr", def: "Meet informally.", ex: "Let's meet up at 6." },
          { word: "remind", pos: "verb", def: "Help someone remember.", ex: "Can you remind me tomorrow?" }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "change of plans", pos: "noun phrase", def: "A modification to a previous arrangement.", ex: "Sorry, there's been a change of plans.", register: "Neutral/Occasional formal" },
          { word: "silver lining", pos: "noun", def: "A positive aspect in a difficult situation.", ex: "The silver lining is we get a free day off!", register: "Idiomatic/Positive" },
          { word: "rain check", pos: "noun phrase", def: "Postpone an invitation politely.", ex: "I'll have to take a rain check on dinner tonight.", register: "Friendly/Colloquial" },
          { word: "game changer", pos: "noun", def: "An event or thing that radically changes a situation.", ex: "Remote work has been a game changer for many industries.", register: "Modern/Impactful" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/feelings-emotions-english/",
      "https://www.vocabulary.com/lists/emotions-adjectives",
      "https://www.englishclub.com/vocabulary/adjectives-feelings.php",
      "https://www.merriam-webster.com/games/emotion-vocabulary",
      "https://www.fluentu.com/blog/english/english-emotion-words/"
    ],
    grammar: [
      {
        title: "be going to vs will (predictions)",
        explanation: {
          technicalAnalysis: "**be going to** – prediction based on present evidence (visible signs) or intention already made.\n**will** – prediction based on opinion, belief, or general expectation (no evidence); also used for spontaneous decisions, promises, offers.\n\n**Syntax:**\n• be going to: am/is/are + going to + base verb\n• will: will + base verb\n\n**Certainty scale:** Present continuous (arranged) > be going to (evidence/intention) > will (opinion/prediction).",
          advancedNuances: "**Formal:** 'will' is common in written forecasts ('The report will be released Friday').\n**Informal:** 'be going to' is frequent in speech, often contracted to 'gonna'.\n**Academic:** 'will' for hypotheses ('This study will argue...'); 'be going to' for planned actions.\n**Additional uses of 'will':** promises ('I'll call you back'), offers ('I'll help you'), threats, willingness.\n**Spontaneous vs planned:** 'The phone is ringing – I'll get it' (spontaneous) vs. 'I'm going to call her later' (already decided).",
          grayAreas: "• When evidence and intention overlap, both can be used with little difference: 'She's going to have a baby' / 'She'll have a baby in March'.\n• 'will' never appears in the if‑clause of a conditional: 'If it rains, we'll cancel' (not 'If it will rain').\n• 'Shall' (British) can replace 'will' in first‑person questions and offers.",
          errorAnalysis: [
            { type: "Correct", example: "Look at those clouds — it's going to rain.", explanation: "Evidence present → 'going to'.", correction: "—" },
            { type: "Correct", example: "I think it will be a great trip.", explanation: "Opinion without evidence → 'will'.", correction: "—" },
            { type: "Incorrect", example: "I will going to rain.", explanation: "Mixing forms.", correction: "It is going to rain." },
            { type: "Incorrect", example: "If it will rain, we'll cancel.", explanation: "'will' cannot be in if‑clause.", correction: "If it rains, we'll cancel." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Future forms – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/future-forms-will-be-going-present-continuous" },
            { type: "Theory", title: "Will vs Going to – Test‑English", url: "https://test-english.com/grammar-points/a2/will-vs-be-going-to/" },
            { type: "Theory", title: "Future forms – Test‑English (B1)", url: "https://test-english.com/grammar-points/b1/future-forms/" },
            { type: "Theory", title: "Will vs Going to – 7ESL", url: "https://7esl.com/will-vs-going-to/" },
            { type: "Theory", title: "Future forms – British Council Teens", url: "https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/future-forms" },
            { type: "Exercise", title: "Perfect English Grammar – Will or Going To", url: "https://www.perfect-english-grammar.com/will-or-be-going-to-exercise-1.html" },
            { type: "Exercise", title: "GrammarBank – Will vs Going To", url: "https://www.grammarbank.com/will-vs-going-to-exercises.html" },
            { type: "Exercise", title: "AgendaWeb – Future Simple", url: "https://agendaweb.org/verbs/future-simple-exercises.html" },
            { type: "Exercise", title: "Ego4U – Future Mix", url: "https://www.ego4u.com/en/cram-up/grammar/future-mix/exercises" }
          ]
        },
        structure: "be going to + verb / will + verb",
        examples: [
          "Look at those clouds — it's going to rain.",
          "I think it'll be fun.",
          "She'll be shocked. / She's going to be shocked.",
          "I'll help you with that (spontaneous offer).",
          "We're going to visit Paris next summer (planned intention)."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/will-and-going-to",
        quizTopicId: "will_vs_goingto"
      },
      {
        title: "will (sudden decisions) vs present continuous (arranged plans)",
        explanation: {
          technicalAnalysis: "**will** – spontaneous decision made at the moment of speaking. Not planned.\n**Present continuous (am/is/are + verb-ing)** – arrangement already made (time, place, participants).\n\n**Examples:**\n• 'The phone is ringing – I'll answer it.' (sudden decision)\n• 'We're meeting at 6:30 tonight.' (pre‑arranged)",
          advancedNuances: "**Formal:** Present continuous for fixed scheduled events (timetables, calendars).\n**Informal:** 'will' is natural for quick offers and spontaneous decisions.\n**Additional functions of 'will':** promises ('I'll be there'), offers ('I'll carry that'), willingness.\n**Present simple for timetables:** 'The train leaves at 9' – distinct from personal plans.",
          grayAreas: "• 'going to' and present continuous are often interchangeable for personal plans: 'I'm meeting her' ≈ 'I'm going to meet her'.\n• 'will' is never used in if‑clauses: 'If she calls, I'll answer' (not 'If she will call').\n• Verbs like come, go, meet, stay are common in present continuous future.\n• Learners often overuse 'will' for all future contexts – remember: spontaneous ≠ arranged.",
          errorAnalysis: [
            { type: "Correct", example: "I'll help you with that (spontaneous).", explanation: "Decision made now → 'will'.", correction: "—" },
            { type: "Correct", example: "We're meeting at 6:30 (pre-arranged).", explanation: "Arrangement → present continuous.", correction: "—" },
            { type: "Incorrect", example: "I'm will meet you later.", explanation: "Cannot combine 'am' and 'will'.", correction: "I'll meet you later." },
            { type: "Incorrect", example: "A: Can someone pick up the kids? B: I'm picking them up (spontaneous).", explanation: "Use 'will' for spontaneous offers.", correction: "I'll pick them up." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Future forms – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/future-forms-will-be-going-present-continuous" },
            { type: "Theory", title: "Will vs Going to – Test‑English", url: "https://test-english.com/grammar-points/a2/will-vs-be-going-to/" },
            { type: "Theory", title: "Future forms – Test‑English (B1)", url: "https://test-english.com/grammar-points/b1/future-forms/" },
            { type: "Theory", title: "Will vs Going to – 7ESL", url: "https://7esl.com/will-vs-going-to/" },
            { type: "Theory", title: "Future forms – British Council Teens", url: "https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/future-forms" },
            { type: "Exercise", title: "Perfect English Grammar – Will or Going To", url: "https://www.perfect-english-grammar.com/will-or-be-going-to-exercise-1.html" },
            { type: "Exercise", title: "GrammarBank – Will vs Going To", url: "https://www.grammarbank.com/will-vs-going-to-exercises.html" },
            { type: "Exercise", title: "AgendaWeb – Future Simple", url: "https://agendaweb.org/verbs/future-simple-exercises.html" },
            { type: "Exercise", title: "Ego4U – Future Mix", url: "https://www.ego4u.com/en/cram-up/grammar/future-mix/exercises" }
          ]
        },
        structure: "will + verb / am/is/are + verb-ing",
        examples: [
          "Just a minute — I'll check online.",
          "We're meeting up at 6:30.",
          "They're staying with Leo's cousin.",
          "A: We have no coffee. B: I'll buy some.",
          "I'm flying to Chicago on Thursday."
        ],
        link: "https://www.perfect-english-grammar.com/will-or-going-to.html",
        quizTopicId: "will_vs_pc"
      }
    ],
    expressions: [
      { cat: "Offering Reassurance", phrases: ["It'll be fine.", "These things happen sometimes.", "There's no need to worry.", "You'll be fine — don't worry."] },
      { cat: "Responding to Reassurance", phrases: ["I hope so.", "I really appreciate it.", "Thanks, but I feel so bad about this."] },
      { cat: "Using 'at least' for the Positive Side", phrases: ["At least you're not missing your main class today.", "At least no one was hurt.", "At least we have each other."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-comfort-someone-in-english",
      "https://www.englishclub.com/speaking/conversation-phrases.php",
      "https://www.fluentu.com/blog/english/comforting-phrases-in-english/",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/reassure-someone",
      "https://www.ef.edu/english-resources/english-vocabulary/emotions/"
    ],
    writing: {
      task: "Email proposing a new initiative or event",
      skill: "Persuasive structure with a clear call to action",
      description: "Write a 100-120 word email to a supervisor or club leader suggesting a new idea and explaining its benefits.",
      scaffolding: [
        "Subject Line: Make it clear and attention-grabbing.",
        "Opening: State your proposal directly.",
        "Body (Benefits): Explain 2-3 key advantages.",
        "Call to Action: Request a meeting or ask for approval."
      ],
      resourceLink: "https://hbr.org/2018/07/how-to-write-emails-that-will-actually-get-read"
    },
    writingResources: [
      "https://hbr.org/2018/07/how-to-write-emails-that-will-actually-get-read",
      "https://www.grammarly.com/blog/professional-email/",
      "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/email_etiquette/index.html",
      "https://www.indeed.com/career-advice/career-development/professional-email-format"
    ],
    speaking: {
      focus: "Consonant Clusters: Final /t/ Release",
      explanation: "English has many consonant clusters. In fast speech, the final /t/ in groups like -ft, -pt, -st should be clearly released.",
      examples: ["left: /lɛft/ (release the /t/)", "kept: /kɛpt/", "passed: /pæst/"],
      classroomActivity: [
        "Tongue Twister Sprint: Race to say tongue twisters with /t/ clusters (e.g., 'The thirty-three thieves thought that they thrilled the throne throughout Thursday').",
        "Mirror Drill: Practice releasing final consonants in front of a mirror, focusing on tongue placement."
      ],
      resourceLink: "https://rachelsenglish.com/final-consonant-clusters/"
    },
    speakingResources: [
      "https://rachelsenglish.com/final-consonants/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/consonant-clusters",
      "https://www.pronuncian.com/lessons/consonants",
      "https://www.soundsofenglish.org/pronunciation/"
    ],
    listening: {
      strategy: "Decision Point Annotation",
      explanation: "While listening to conversations about plans or decisions, pause and note key decision points or changes.",
      actionSteps: [
        "Listen to a dialogue about making plans.",
        "Pause at key moments and note: What changed? Why? What's the new plan?"
      ],
      resources: [
        { type: "Video", title: "English with Lucy - Making Plans", url: "https://www.youtube.com/watch?v=2xGkV7bGQk0" },
        { type: "Interactive", title: "ESL Lab - Future Plans", url: "https://www.esl-lab.com/plans/plansrd1.htm" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.esl-lab.com/",
      "https://www.ted.com/talks"
    ]
  },
  // ===================== UNIDAD 5 =====================
  {
    id: 5,
    title: "And Then...",
    topic: "Stories & Surprises",
    desc: "Learn to narrate past events, react with surprise, and tell stories clearly.",
    vocabulary: [
      {
        topic: "Verbs — Losing & Finding",
        items: [
          { word: "appear", pos: "verb", def: "Come into sight unexpectedly.", ex: "My keys suddenly appeared under the sofa." },
          { word: "disappear", pos: "verb", def: "Go missing or be lost.", ex: "My wallet disappeared on the subway." },
          { word: "discover", pos: "verb", def: "Find something for the first time.", ex: "She discovered the ring in her pocket." },
          { word: "drop", pos: "verb", def: "Let something fall accidentally.", ex: "He dropped his passport." },
          { word: "leave behind", pos: "v phr", def: "Forget to take something when leaving.", ex: "I left my umbrella behind." },
          { word: "return", pos: "verb", def: "Bring something back to the owner.", ex: "A stranger returned my bag." },
          { word: "search for", pos: "v phr", def: "Look carefully for something.", ex: "We searched for it everywhere." }
        ]
      },
      {
        topic: "Verbs — Needing & Giving Help",
        items: [
          { word: "be grateful", pos: "v phr", def: "Feel thankful.", ex: "I'm grateful for your help." },
          { word: "be in trouble", pos: "v phr", def: "Be in a difficult situation.", ex: "We were in trouble." },
          { word: "break down", pos: "v phr", def: "Stop working (vehicle).", ex: "Our car broke down." },
          { word: "get lost", pos: "v phr", def: "Lose your direction.", ex: "We got lost downtown." },
          { word: "give (someone) a ride", pos: "v phr", def: "Drive someone somewhere.", ex: "Can you give me a ride?" },
          { word: "warn", pos: "verb", def: "Tell someone about danger.", ex: "She warned us about the roads." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "once upon a time", pos: "phrase", def: "Classic story opening.", ex: "Once upon a time, there lived a wise owl...", register: "Literary/Narrative" },
          { word: "out of the blue", pos: "idiom", def: "Completely unexpected.", ex: "He called me out of the blue after ten years!", register: "Colloquial/Dramatic" },
          { word: "twist of fate", pos: "noun phrase", def: "Unexpected change in fortune.", ex: "Winning the lottery was a twist of fate.", register: "Literary/Romantic" },
          { word: "turn of events", pos: "noun phrase", def: "Series of events that change the course.", ex: "The sudden turn of events left everyone speechless.", register: "Formal/Narrative" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/narrative-vocabulary-english/",
      "https://www.vocabulary.com/lists/storytelling-words",
      "https://www.englishclub.com/vocabulary/story-telling.php",
      "https://www.fluentu.com/blog/english/english-words-for-stories/",
      "https://www.merriam-webster.com/word-games/stories"
    ],
    grammar: [
      {
        title: "Simple Past",
        explanation: {
          technicalAnalysis: "**Form:** regular verbs add -ed (walked); irregular verbs have unique forms (go→went).\n**Pronunciation of -ed:**\n• /t/ after voiceless sounds: walked, passed\n• /d/ after voiced sounds: called, played\n• /ɪd/ after /t/ or /d/: wanted, needed\n**Negative/Question:** did + base verb (She didn't find it; Did she find it?).\n**Key rule:** After 'did' or 'didn't', the main verb is always base form (never past).",
          advancedNuances: "**Formal:** Simple Past is standard in written narratives, reports, and case studies. Use full forms (did not) in formal writing.\n**Informal:** Contractions are natural in storytelling ('I didn't go'). Vague time markers ('the other day') are common.\n**Academic:** Use Simple Past for completed research ('Participants were recruited').\n**Sequencing:** Simple Past can describe a sequence of events ('She walked in, sat down, opened her laptop').",
          grayAreas: "• Irregular verbs must be memorised – no reliable rules.\n• The -ed ending has three pronunciations; learners often overgeneralise /ɪd/ ('walk-ed' as /wɔːkɪd/).\n• Stative verbs (know, like, believe) appear in Simple Past even for states: 'I knew her for years.'\n• Time expressions like 'when', 'before', 'after', 'as soon as', 'until' are common sequence markers.",
          errorAnalysis: [
            { type: "Correct", example: "The ring disappeared.", explanation: "Completed past action.", correction: "—" },
            { type: "Correct", example: "Did she find it?", explanation: "Correct question form.", correction: "—" },
            { type: "Incorrect", example: "She didn't found it.", explanation: "After 'didn't', use base verb.", correction: "She didn't find it." },
            { type: "Fossilized Error", example: "I go to the cinema yesterday.", explanation: "Present tense used for past.", correction: "I went to the cinema yesterday." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Past Continuous / Past Simple – British Council", url: "https://learnenglish.britishcouncil.org/grammar/a1-a2/past-continuous-past-simple" },
            { type: "Theory", title: "Past Continuous vs Past Simple – Test‑English", url: "https://test-english.com/grammar-points/a2/past-continuous-past-simple/" },
            { type: "Theory", title: "Past Simple/Past Continuous/Past Perfect – Test‑English", url: "https://test-english.com/grammar-points/b1/past-simple-past-continuous-past-perfect/" },
            { type: "Theory", title: "Past Continuous – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-continuous" },
            { type: "Exercise", title: "Perfect English Grammar – Past Simple/Continuous", url: "https://www.perfect-english-grammar.com/past-simple-past-continuous-exercise-1.html" },
            { type: "Exercise", title: "Englishpage – Verb Tense Exercise", url: "https://www.englishpage.com/verbpage/verbs3.htm" },
            { type: "Exercise", title: "e‑Grammar – Past Simple/Continuous", url: "https://www.e-grammar.org/past-simple-continuous/" },
            { type: "Exercise", title: "English Test Online – B1", url: "https://englishtest-online.com/grammar/b1/past-simple-past-continuous-past-perfect/" },
            { type: "Exercise", title: "OUP – Grammar Friends", url: "https://elt.oup.com/student/grammarfriends/level04/tests/test9" }
          ]
        },
        structure: "verb-ed or irregular form",
        examples: [
          "The ring disappeared.",
          "She didn't find it.",
          "Did she find it? — Yes, she did.",
          "What happened next?",
          "He went to the store and bought milk.",
          "We searched everywhere but couldn't find it."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-simple",
        quizTopicId: "past_simple"
      },
      {
        title: "Past Continuous + Simple Past (interruption)",
        explanation: {
          technicalAnalysis: "**Past Continuous:** was/were + verb-ing – sets the background scene.\n**Simple Past:** past verb form – a shorter, punctual event that interrupts.\n**Conjunctions:**\n• 'while' + past continuous\n• 'when' + simple past (or past continuous depending on emphasis)\n\n**Example:** I was walking when the phone rang.",
          advancedNuances: "**Formal:** Used in narratives to establish background context.\n**Informal:** Very natural in spoken storytelling ('So I was walking home when suddenly...').\n**Academic:** Useful for setting the scene in case studies or historical accounts.\n**Parallel past continuous:** two simultaneous actions with 'while' ('While she was cooking, he was reading') – no interruption.",
          grayAreas: "• Stative verbs (know, believe, want) are rarely used in past continuous: 'I was knowing her' is wrong; use 'I knew her'.\n• 'when' introduces the interruption; 'while' introduces the background.\n• The interruption is not necessarily dramatic – just bounded and punctual.",
          errorAnalysis: [
            { type: "Correct", example: "I was reading when she called.", explanation: "Background + interruption.", correction: "—" },
            { type: "Correct", example: "While I was looking out the window, the subway came.", explanation: "Continuous background + punctual event.", correction: "—" },
            { type: "Incorrect", example: "I was read when she called.", explanation: "Wrong verb form.", correction: "I was reading when she called." },
            { type: "Fossilized Error", example: "I was knowing the answer when she asked.", explanation: "Stative verb in continuous.", correction: "I knew the answer when she asked." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Past Continuous / Past Simple – British Council", url: "https://learnenglish.britishcouncil.org/grammar/a1-a2/past-continuous-past-simple" },
            { type: "Theory", title: "Past Continuous vs Past Simple – Test‑English", url: "https://test-english.com/grammar-points/a2/past-continuous-past-simple/" },
            { type: "Theory", title: "Past Simple/Past Continuous/Past Perfect – Test‑English", url: "https://test-english.com/grammar-points/b1/past-simple-past-continuous-past-perfect/" },
            { type: "Theory", title: "Past Continuous – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-continuous" },
            { type: "Exercise", title: "Perfect English Grammar – Past Simple/Continuous", url: "https://www.perfect-english-grammar.com/past-simple-past-continuous-exercise-1.html" },
            { type: "Exercise", title: "Englishpage – Verb Tense Exercise", url: "https://www.englishpage.com/verbpage/verbs3.htm" },
            { type: "Exercise", title: "e‑Grammar – Past Simple/Continuous", url: "https://www.e-grammar.org/past-simple-continuous/" },
            { type: "Exercise", title: "English Test Online – B1", url: "https://englishtest-online.com/grammar/b1/past-simple-past-continuous-past-perfect/" },
            { type: "Exercise", title: "OUP – Grammar Friends", url: "https://elt.oup.com/student/grammarfriends/level04/tests/test9" }
          ]
        },
        structure: "was/were + -ing / simple past",
        examples: [
          "While I was looking, the subway came.",
          "When I looked up, the doors were closing.",
          "She was walking home when it started to rain.",
          "While they were sleeping, someone knocked on the door.",
          "He was talking on the phone when the accident happened."
        ],
        link: "https://www.perfect-english-grammar.com/past-continuous.html",
        quizTopicId: "past_cont"
      }
    ],
    expressions: [
      { cat: "Giving Surprising News", phrases: ["And guess what happened next?", "You'll never believe this, but...", "I couldn't believe it!"] },
      { cat: "Reacting with Surprise", phrases: ["Are you serious?", "No way!", "You're kidding me!"] },
      { cat: "Storytelling Expressions", phrases: ["So, there I was...", "Then suddenly...", "In the end...", "It turned out that..."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-tell-a-story-in-english",
      "https://www.fluentu.com/blog/english/english-storytelling-phrases/",
      "https://www.englishclub.com/speaking/conversation-reactions.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/tell-a-story",
      "https://www.ef.edu/english-resources/english-vocabulary/narrative-phrases/"
    ],
    writing: {
      task: "Flash fiction story (100 words max)",
      skill: "Economy of language with maximum impact",
      description: "Write a very short story using exactly 100 words that includes a surprise ending or twist.",
      scaffolding: [
        "Opening Hook: Grab attention in the first line.",
        "Build-Up: Develop characters or setting quickly.",
        "Conflict: Introduce a problem or tension.",
        "Twist Ending: Surprise the reader with an unexpected conclusion."
      ],
      resourceLink: "https://blog.reedsy.com/short-story-prompts/"
    },
    writingResources: [
      "https://blog.reedsy.com/short-story-prompts/",
      "https://www.grammarly.com/blog/how-to-write-a-short-story/",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html",
      "https://www.writingforward.com/creative-writing/flash-fiction",
      "https://www.nanowrimo.org/writing-tips"
    ],
    speaking: {
      focus: "Pronouncing Past Tense Endings (/t/, /d/, /ɪd/)",
      explanation: "Regular past verbs end in -ed, but pronunciation varies based on the preceding sound.",
      examples: [
        "/t/ after voiceless sounds: looked /lʊkt/, passed /pæst/",
        "/d/ after voiced sounds: called /kɔːld/, played /pleɪd/",
        "/ɪd/ after /t/ or /d/: wanted /ˈwɒntɪd/, needed /ˈniːdɪd/"
      ],
      classroomActivity: [
        "Sorting Game: Give students verb cards. They categorize them by ending sound (/t/, /d/, /ɪd/).",
        "Minimal Pair Drills: Practice contrasting pairs like 'looked' /lʊkt/ vs. 'loved' /lʌvd/."
      ],
      resourceLink: "https://elsaspeak.com/en/english-pronunciation-rules-ed-ending/"
    },
    speakingResources: [
      "https://elsaspeak.com/en/english-pronunciation-rules-ed-ending/",
      "https://rachelsenglish.com/ed-ending/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/ep-170710",
      "https://www.pronuncian.com/lessons/past-tense-endings"
    ],
    listening: {
      strategy: "Retelling with Story Arcs",
      explanation: "After listening to a story, reconstruct it using a simple story arc (beginning, conflict, climax, resolution).",
      actionSteps: [
        "Listen to a short story (e.g., from BBC Learning English).",
        "Draw a 4-box comic strip representing the arc.",
        "Retell orally using your drawing as a guide."
      ],
      resources: [
        { type: "Video", title: "BBC Learning English - Drama", url: "https://www.bbc.co.uk/learningenglish/english/features/drama" },
        { type: "Interactive", title: "Breaking News English - Short Stories", url: "https://breakingnewsenglish.com/stories.html" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/drama",
      "https://breakingnewsenglish.com/stories.html",
      "https://www.storynory.com/",
      "https://www.esl-lab.com/stories/"
    ]
  },
  // ===================== UNIDAD 6 =====================
  {
    id: 6,
    title: "City Living",
    topic: "Urban Life & Problems",
    desc: "Learn to discuss urban problems, quantities, and solutions (real conditionals).",
    vocabulary: [
      {
        topic: "Nouns — Urban Problems",
        items: [
          { word: "graffiti", pos: "noun", def: "Illegal writing/drawings on walls.", ex: "There's graffiti on the bridge." },
          { word: "noise", pos: "noun", def: "Unwanted sound.", ex: "The noise keeps me awake." },
          { word: "pollution", pos: "noun", def: "Harmful substances in air or water.", ex: "Pollution is a big problem." },
          { word: "traffic", pos: "noun", def: "Vehicles on roads.", ex: "There's so much traffic." },
          { word: "traffic jam", pos: "noun", def: "Long line of cars that can't move.", ex: "I was stuck in a traffic jam." },
          { word: "trash", pos: "noun", def: "Waste in public spaces.", ex: "There was trash everywhere." },
          { word: "concrete", pos: "noun", def: "Hard building material.", ex: "Almost everything is concrete downtown." }
        ]
      },
      {
        topic: "Adverbs — Manner",
        items: [
          { word: "angrily", pos: "adv", def: "In an angry way.", ex: "He spoke angrily." },
          { word: "calmly", pos: "adv", def: "In a calm way.", ex: "Explain calmly." },
          { word: "clearly", pos: "adv", def: "In a clear way.", ex: "Speak clearly." },
          { word: "politely", pos: "adv", def: "In a polite way.", ex: "Ask politely." },
          { word: "safely", pos: "adv", def: "Without danger.", ex: "Cross safely." },
          { word: "loudly", pos: "adv", def: "With a lot of noise.", ex: "They were talking loudly." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "urban jungle", pos: "noun phrase", def: "Metaphor for a congested and chaotic city.", ex: "Living in the urban jungle can be exhausting.", register: "Colloquial/Descriptive" },
          { word: "green space", pos: "noun phrase", def: "Natural area within a city.", ex: "More green spaces are needed for residents' wellbeing.", register: "Informative/Urban planning" },
          { word: "concrete jungle", pos: "noun phrase", def: "City dominated by concrete buildings.", ex: "New York is often called a concrete jungle.", register: "Literary/Descriptive" },
          { word: "smart city initiatives", pos: "noun phrase", def: "Technology projects to improve cities.", ex: "The city launched new smart city initiatives to reduce traffic.", register: "Formal/Technological" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/urban-problems-english/",
      "https://www.vocabulary.com/lists/city-living-words",
      "https://www.englishclub.com/vocabulary/environment.php",
      "https://www.bbc.co.uk/learningenglish/english/features/vocabulary/urban",
      "https://dictionary.cambridge.org/topics/environment/"
    ],
    grammar: [
      {
        title: "Quantifiers (count vs non-count nouns)",
        explanation: {
          technicalAnalysis: "**Countable nouns** – can be counted (cars, parks). Quantifiers: many, a few, several, a number of, few (negative).\n**Uncountable/mass nouns** – cannot be counted individually (traffic, pollution, water). Quantifiers: much, a little, a great deal of, little (negative).\n**Both types:** some, any, a lot of, lots of, plenty of, no, most, enough.\n**Key distinction:** 'a few/a little' (positive – some exist) vs. 'few/little' (negative – not enough).",
          advancedNuances: "**Formal/Academic:** Use 'many' and 'much' in formal writing. 'A great deal of' (uncountable) and 'a large number of' (countable) are preferred.\n**Informal:** 'a lot of' is common for both.\n**Data precision:** In statistics, replace vague quantifiers with exact numbers.\n**Fewer vs less:** 'fewer' for count, 'less' for non‑count – frequently confused even by natives.",
          grayAreas: "• Some nouns change meaning: 'chicken' (animal – count) vs. 'chicken' (meat – uncountable); 'glass' (vessel – count) vs. 'glass' (material – uncountable).\n• 'none' can be singular or plural: 'None of the water is clean' (uncountable → singular); 'None of the students have arrived' (plural – informal).\n• 'much' sounds awkward in affirmative informal speech ('There is much traffic' is correct but unusual – use 'a lot of').",
          errorAnalysis: [
            { type: "Correct", example: "There are many cars on this road.", explanation: "Count noun → 'many'.", correction: "—" },
            { type: "Correct", example: "There is much traffic today.", explanation: "Non‑count noun → 'much'.", correction: "—" },
            { type: "Incorrect", example: "There is many traffic.", explanation: "'many' cannot modify non‑count.", correction: "There is much traffic." },
            { type: "Fossilized Error", example: "I need few informations about the route.", explanation: "'information' is uncountable.", correction: "I need some information." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Quantifiers – British Council", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/quantifiers" },
            { type: "Theory", title: "Quantifiers – Cambridge Dictionary", url: "https://dictionary.cambridge.org/grammar/british-grammar/quantifiers" },
            { type: "Theory", title: "Conditionals (if) – Cambridge", url: "https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if" },
            { type: "Theory", title: "Quantifiers – EF", url: "https://www.ef.edu/english-resources/english-grammar/quantifiers/" },
            { type: "Theory", title: "Quantifiers – Langeek", url: "https://langeek.co/en/grammar/course/739/quantitatives" },
            { type: "Theory", title: "Quantifiers – Linguapress", url: "https://linguapress.com/grammar/quantifiers" },
            { type: "Exercise", title: "IELTS IDP – Quantifiers", url: "https://ielts.idp.com/prepare/article-ielts-grammar-tips-learn-how-to-use-quantifiers" },
            { type: "Exercise", title: "Learn English Weekly – Quantifiers", url: "https://learnenglishweekly.com/grammar/quantifiers-in-english-grammar" },
            { type: "Exercise", title: "Perfect English Grammar – Mixed Exercises", url: "https://www.perfect-english-grammar.com/grammar-exercises.html" }
          ]
        },
        structure: "many / much / a few / a little / several / so much",
        examples: [
          "So many cars / so much traffic",
          "A few trees / a little green space",
          "Almost no parks / almost none",
          "Several neighborhoods lack green space.",
          "There isn't enough public transportation."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/quantifiers",
        quizTopicId: "quantifiers"
      },
      {
        title: "Present & Future Real Conditionals",
        explanation: {
          technicalAnalysis: "**Zero Conditional (present real):** If/When + present simple, present simple – general truths, scientific facts, habitual cause‑effect. ('If you heat water to 100°C, it boils.')\n**First Conditional (future real):** If + present simple, will + base verb – likely future outcomes dependent on a possible condition. ('If you explain clearly, they will understand.')\n**Critical rule:** 'will' NEVER appears in the if‑clause.",
          advancedNuances: "**Formal:** First conditional appears in business proposals and academic hypotheses.\n**Informal:** Contractions are natural ('If it rains, we'll just stay in').\n**Academic:** Zero conditionals in scientific laws; first conditionals in predictions.\n**Modals in main clause:** can, may, might, should instead of 'will' for different certainty or advice: 'If you study hard, you can pass' (ability); 'If it rains, you should bring an umbrella' (advice).\n**When vs if:** 'when' implies certainty; 'if' implies possibility.",
          grayAreas: "• The if‑clause can come first (comma) or second (no comma).\n• 'unless' = if not: 'We'll cancel unless it stops raining.'\n• Present continuous in if‑clause adds an ongoing condition: 'If you're feeling tired, take a break.'\n• Zero conditional can also use 'whenever', 'as soon as', 'every time'.",
          errorAnalysis: [
            { type: "Correct", example: "If you explain clearly, they will understand.", explanation: "First conditional: present + will.", correction: "—" },
            { type: "Correct", example: "When there is trash, people leave more.", explanation: "Zero conditional: present + present.", correction: "—" },
            { type: "Incorrect", example: "If you will explain clearly, they understand.", explanation: "'will' cannot be in if‑clause.", correction: "If you explain clearly, they will understand." },
            { type: "Fossilized Error", example: "When it rains tomorrow, I'll stay home.", explanation: "'when' implies certainty – use 'if' for uncertainty.", correction: "If it rains tomorrow, I'll stay home." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Quantifiers – British Council", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/quantifiers" },
            { type: "Theory", title: "Quantifiers – Cambridge Dictionary", url: "https://dictionary.cambridge.org/grammar/british-grammar/quantifiers" },
            { type: "Theory", title: "Conditionals (if) – Cambridge", url: "https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if" },
            { type: "Theory", title: "Quantifiers – EF", url: "https://www.ef.edu/english-resources/english-grammar/quantifiers/" },
            { type: "Theory", title: "Quantifiers – Langeek", url: "https://langeek.co/en/grammar/course/739/quantitatives" },
            { type: "Theory", title: "Quantifiers – Linguapress", url: "https://linguapress.com/grammar/quantifiers" },
            { type: "Exercise", title: "IELTS IDP – Quantifiers", url: "https://ielts.idp.com/prepare/article-ielts-grammar-tips-learn-how-to-use-quantifiers" },
            { type: "Exercise", title: "Learn English Weekly – Quantifiers", url: "https://learnenglishweekly.com/grammar/quantifiers-in-english-grammar" },
            { type: "Exercise", title: "Perfect English Grammar – Mixed Exercises", url: "https://www.perfect-english-grammar.com/grammar-exercises.html" }
          ]
        },
        structure: "If/When + present → present (truth) OR If + present → will (likely result)",
        examples: [
          "If there is trash, people often leave more.",
          "When you speak angrily, they keep making noise.",
          "If you explain clearly, they will understand.",
          "If you recycle, you can help reduce pollution.",
          "When it gets cold, the park empties quickly."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/conditionals",
        quizTopicId: "real_conditionals"
      }
    ],
    expressions: [
      { cat: "Expressing Concern", phrases: ["Are you all right?", "I was really worried!", "Is anything wrong?"] },
      { cat: "Expressing Relief", phrases: ["I'm so relieved.", "What a relief!", "That's such a relief."] },
      { cat: "Problems & Solutions", phrases: ["If you explain your feelings clearly, they will understand.", "If you make a special area for graffiti, people won't paint elsewhere."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-express-concern-in-english",
      "https://www.fluentu.com/blog/english/english-phrases-for-expressing-worry/",
      "https://www.englishclub.com/speaking/conversation-sympathy.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/express-concern",
      "https://www.ef.edu/english-resources/english-vocabulary/expressing-emotions/"
    ],
    writing: {
      task: "Opinion editorial (Op-Ed) on a city issue",
      skill: "Argumentative writing with evidence and solutions",
      description: "Write a persuasive 150-word op-ed on a pressing urban issue (e.g., pollution, housing shortage) proposing a solution.",
      scaffolding: [
        "Issue Introduction: Clearly state the problem.",
        "Evidence: Provide one statistic or example supporting the issue.",
        "Solution: Propose a feasible solution with reasoning.",
        "Conclusion: Call to action or final thought."
      ],
      resourceLink: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html"
    },
    writingResources: [
      "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html",
      "https://www.grammarly.com/blog/persuasive-writing/",
      "https://writingcenter.unc.edu/tips-and-tools/argument/",
      "https://www.theguardian.com/cities/opinion"
    ],
    speaking: {
      focus: "Reduced Final Vowels in Adverbs",
      explanation: "Many -ly adverbs have a reduced final vowel sound (/li/ → /lɪ/ or even /lə/). Overpronouncing can sound unnatural.",
      examples: ["politely /pəˈlaɪtlɪ/", "clearly /ˈklɪrlɪ/", "angrily /ˈæŋɡrəli/"],
      classroomActivity: [
        "Whisper Race: Students whisper adverbs repeatedly, focusing on reducing the final vowel.",
        "Stress Shift Challenge: Compare 'polite' /pəˈlaɪt/ vs. 'politely' /pəˈlaɪtlɪ/, noting the shift and reduction."
      ],
      resourceLink: "https://rachelsenglish.com/word-lessons/adverbs/"
    },
    speakingResources: [
      "https://rachelsenglish.com/adverbs-pronunciation/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/ep-170206",
      "https://www.pronuncian.com/lessons/word-endings",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Conditional Solution Spotting",
      explanation: "Listen for real conditionals (If + present, will + verb) used to propose solutions to problems.",
      actionSteps: [
        "Listen to a discussion about city problems.",
        "Write down each conditional solution proposed.",
        "Evaluate one solution: Is it realistic? Why or why not?"
      ],
      resources: [
        { type: "Video", title: "Test English - B1 Listening", url: "https://test-english.com/listening/b1/" },
        { type: "Interactive", title: "British Council - Conditionals", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/conditionals-1-zero-first-and-second-conditionals" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.esl-lab.com/",
      "https://www.ted.com/talks"
    ]
  },
  // ===================== UNIDAD 7 =====================
  {
    id: 7,
    title: "Entertainment",
    topic: "Music, TV & Movies",
    desc: "Learn to discuss taste in music and TV, and make comparisons.",
    vocabulary: [
      {
        topic: "Music Genres",
        items: [
          { word: "classical", pos: "noun", def: "Formal orchestral music.", ex: "She listens to classical music while studying." },
          { word: "EDM", pos: "noun", def: "Electronic Dance Music.", ex: "The festival had a huge EDM stage." },
          { word: "folk", pos: "noun", def: "Traditional acoustic music.", ex: "He plays folk music at the coffee shop." },
          { word: "hip-hop", pos: "noun", def: "Genre with rap vocals and beats.", ex: "Hip-hop is popular worldwide." },
          { word: "jazz", pos: "noun", def: "Music with improvisation.", ex: "We went to a jazz bar." },
          { word: "pop", pos: "noun", def: "Popular mainstream music.", ex: "Pop music is everywhere." },
          { word: "reggae", pos: "noun", def: "Jamaican music with offbeat rhythm.", ex: "Playing reggae makes me feel relaxed." },
          { word: "rock", pos: "noun", def: "Music driven by electric guitars.", ex: "She listens to classic rock." }
        ]
      },
      {
        topic: "TV Shows & Movies",
        items: [
          { word: "animated movie", pos: "noun", def: "Film made with drawings or computer graphics.", ex: "The kids watched an animated movie." },
          { word: "comedy", pos: "noun", def: "Intended to make audiences laugh.", ex: "After a stressful week, I watch a comedy." },
          { word: "documentary", pos: "noun", def: "Non-fiction film about real events.", ex: "I watched a documentary about ocean life." },
          { word: "drama", pos: "noun", def: "Serious show with realistic characters.", ex: "That crime drama has incredible acting." },
          { word: "horror", pos: "noun", def: "Designed to frighten.", ex: "I can't watch horror movies alone." },
          { word: "science fiction", pos: "noun", def: "Set in the future or alternate worlds.", ex: "That sci-fi series is gripping." },
          { word: "thriller", pos: "noun", def: "Exciting, suspenseful story.", ex: "I couldn't stop watching the thriller." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "must-see", pos: "adj.", def: "That you can't miss.", ex: "That documentary is a must-see for film buffs.", register: "Commercial/Recommendation" },
          { word: "binge-watch", pos: "v.", def: "Watch multiple episodes in a row.", ex: "We binge-watched the entire season in one weekend.", register: "Modern/Colloquial" },
          { word: "cult classic", pos: "noun phrase", def: "Film appreciated by a specific group.", ex: "The Rocky Horror Picture Show became a cult classic.", register: "Cultural/Informative" },
          { word: "box office hit", pos: "noun phrase", def: "Commercially successful film.", ex: "Avengers was a massive box office hit.", register: "Industrial/Cultural" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/music-genres-english/",
      "https://www.vocabulary.com/lists/entertainment-english",
      "https://www.englishclub.com/vocabulary/movies-music.php",
      "https://www.merriam-webster.com/games/entertainment-vocabulary",
      "https://dictionary.cambridge.org/topics/art-and-entertainment/"
    ],
    grammar: [
      {
        title: "used to — Past Habits and States",
        explanation: {
          technicalAnalysis: "**Form:**\n• Affirmative: used to + base verb\n• Negative: didn't use to + base verb\n• Question: Did + subject + use to + base verb?\n\n**Meaning:** past habits or states that no longer exist. Contrasts past with present.\n**Note:** 'would' can replace 'used to' for repeated actions (not states) in literary contexts. ('When I was young, I would walk to school.')",
          advancedNuances: "**Formal/Informal:** used in all registers.\n**Pronunciation:** 'used to' is pronounced /ˈjuːstə/ – the 'd' is silent, leading to spelling errors ('use to' in affirmatives).\n**Distinction from 'be/get used to':** 'I used to swim' (past habit) ≠ 'I am used to swimming' (accustomed to).",
          grayAreas: "• 'used to' cannot describe a single past event ('I used to go to the cinema last Tuesday' – wrong).\n• 'would' cannot describe past states: 'I used to own a dog' (correct) ≠ 'I would own a dog'.\n• Negative spelling: 'didn't used to' is a common error – correct is 'didn't use to'.\n• 'used to' has no present tense equivalent; use 'usually' for present habits.",
          errorAnalysis: [
            { type: "Correct", example: "I used to like country music.", explanation: "Affirmative – past habit/state.", correction: "—" },
            { type: "Correct", example: "Did you use to watch cartoons?", explanation: "Question form.", correction: "—" },
            { type: "Incorrect", example: "I didn't used to buy much music.", explanation: "After 'didn't', use 'use to'.", correction: "I didn't use to buy much music." },
            { type: "Fossilized Error", example: "I use to like country music.", explanation: "Missing 'd' in affirmative.", correction: "I used to like country music." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Video", title: "EngVid – Used To", url: "https://www.engvid.com/learn-english-grammar-use-used-and-used-to/" },
            { type: "Video", title: "EngVid – Comparisons with Like/As", url: "https://www.engvid.com/english-grammar-comparing-with-like-as/" },
            { type: "Video", title: "EngVid – Comparative Adjectives", url: "https://www.engvid.com/english-grammar-comparative-adjectives/" },
            { type: "Theory", title: "Used To – Test‑English", url: "https://test-english.com/grammar-points/a2/used-to/" },
            { type: "Theory", title: "Used To – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/used-to" },
            { type: "Exercise", title: "GrammarBank – Used To", url: "https://www.grammarbank.com/used-to.html" },
            { type: "Exercise", title: "Perfect English Grammar – Used To", url: "https://www.perfect-english-grammar.com/used-to-exercise-1.html" },
            { type: "Exercise", title: "e‑Grammar – As...As", url: "https://www.e-grammar.org/as-as-comparative/" }
          ]
        },
        structure: "used to + base verb",
        examples: [
          "I used to like country music.",
          "I didn't use to buy much music.",
          "Did you use to watch cartoons? — Yes, I did.",
          "She used to play the piano every day.",
          "We would go to the cinema every Sunday."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/used-to",
        quizTopicId: "used_to"
      },
      {
        title: "Comparisons with (not) as ... as",
        explanation: {
          technicalAnalysis: "**as + adjective/adverb + as** – expresses equality (same degree).\n**not as + adjective/adverb + as** – expresses inequality (first has less).\n**Important:** Always use the base form of the adjective/adverb (never comparative or superlative).\n**Action comparisons:** use adverbs ('She runs as fast as her brother').\n**Quantity:** 'as much as' for uncountable/verbs, 'as many as' for countable nouns.",
          advancedNuances: "**Formal:** Used in analytical writing for precise comparisons.\n**Informal:** Very common in everyday speech.\n**Academic:** Neutral comparisons in studies ('The control group performed as well as the experimental group').\n**Pronoun case:** Formal: 'She is as tall as I am'; Informal: 'She is as tall as me'.\n**'so...as' in negatives:** formal British 'not so...as' is possible but rare.",
          grayAreas: "• Only base form allowed: 'as good as' (not 'as better as').\n• Double negatives can confuse: 'He is not as unreliable as you think' means he IS somewhat reliable.\n• After 'as', the second element can be a clause, a noun phrase, or a pronoun.",
          errorAnalysis: [
            { type: "Correct", example: "This movie is as good as that one.", explanation: "Equality comparison.", correction: "—" },
            { type: "Correct", example: "This movie is not as good as that one.", explanation: "Inequality comparison.", correction: "—" },
            { type: "Incorrect", example: "This movie is as better as that one.", explanation: "Comparative form not allowed.", correction: "as good as" },
            { type: "Incorrect", example: "He is not as fast than me.", explanation: "'than' used instead of 'as'.", correction: "He is not as fast as me." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Video", title: "EngVid – Used To", url: "https://www.engvid.com/learn-english-grammar-use-used-and-used-to/" },
            { type: "Video", title: "EngVid – Comparisons with Like/As", url: "https://www.engvid.com/english-grammar-comparing-with-like-as/" },
            { type: "Video", title: "EngVid – Comparative Adjectives", url: "https://www.engvid.com/english-grammar-comparative-adjectives/" },
            { type: "Theory", title: "Used To – Test‑English", url: "https://test-english.com/grammar-points/a2/used-to/" },
            { type: "Theory", title: "Used To – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/used-to" },
            { type: "Exercise", title: "GrammarBank – Used To", url: "https://www.grammarbank.com/used-to.html" },
            { type: "Exercise", title: "Perfect English Grammar – Used To", url: "https://www.perfect-english-grammar.com/used-to-exercise-1.html" },
            { type: "Exercise", title: "e‑Grammar – As...As", url: "https://www.e-grammar.org/as-as-comparative/" }
          ]
        },
        structure: "as + adjective/adverb + as / not as + adjective/adverb + as",
        examples: [
          "Personal devices are as good as TVs.",
          "Watching at home isn't as frightening as in a theater.",
          "I don't train as hard as my brother.",
          "This album is not as popular as her previous one.",
          "She speaks English as fluently as a native speaker."
        ],
        link: "https://www.perfect-english-grammar.com/comparatives-superlatives.html",
        quizTopicId: "as_as"
      }
    ],
    expressions: [
      { cat: "Discussing Changing Tastes", phrases: ["What did you use to listen to?", "I used to like country music.", "My taste has really changed over the years."] },
      { cat: "Refusing Invitations", phrases: ["Maybe after that.", "I'd love to, but...", "I'm sorry, I can't make it."] },
      { cat: "Softening Comments", phrases: ["I'm sorry, I'm going to be kind of busy.", "Actually, it was more interesting than I expected."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-talk-about-music-in-english",
      "https://www.fluentu.com/blog/english/english-phrases-for-movies/",
      "https://www.englishclub.com/speaking/conversation-preferences.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/talk-about-films",
      "https://www.ef.edu/english-resources/english-vocabulary/music-film/"
    ],
    writing: {
      task: "Social media review for a trending show/movie",
      skill: "Engaging, concise critique with hashtags",
      description: "Write a 60-80 word review suitable for Instagram or Twitter, including emojis and 2-3 relevant hashtags.",
      scaffolding: [
        "Hook: Start with an emoji or punchy phrase.",
        "Plot/Theme: Briefly describe what it's about.",
        "Opinion: Share your honest take (love/hate/neutral).",
        "Hashtags: Include relevant tags (e.g., #MovieReview #Netflix)."
      ],
      resourceLink: "https://www.socialmediaexaminer.com/how-to-write-social-media-posts/"
    },
    writingResources: [
      "https://www.socialmediaexaminer.com/how-to-write-social-media-posts/",
      "https://www.grammarly.com/blog/movie-review/",
      "https://blog.reedsy.com/how-to-write-a-book-review/",
      "https://www.rottentomatoes.com/",
      "https://letterboxd.com/"
    ],
    speaking: {
      focus: "Consonant Clusters (str-, spl-, thr-)",
      explanation: "English allows complex consonant clusters that can be tricky. Practice blending them smoothly.",
      examples: ["strong /strɒŋ/", "splash /splæʃ/", "three /θriː/"],
      classroomActivity: [
        "Cluster Chain: Take turns saying words with increasingly difficult clusters (start with 'stop', go to 'strength').",
        "Speed Pronunciation Game: Flashcards with cluster-initial words; say them quickly and correctly."
      ],
      resourceLink: "https://www.youtube.com/watch?v=3Xq6v6v6v6v6"
    },
    speakingResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/consonant-clusters",
      "https://rachelsenglish.com/consonant-clusters/",
      "https://www.pronuncian.com/lessons/consonant-clusters",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Comparative and Superlative Spotting",
      explanation: "While listening to reviews, note how comparatives (better than) and superlatives (best ever) are used to express opinions.",
      actionSteps: [
        "Listen to a movie or music review.",
        "Circle all comparative or superlative expressions.",
        "Discuss: Do these make the reviewer's opinion stronger or weaker?"
      ],
      resources: [
        { type: "Video", title: "BBC 6 Minute English - Entertainment", url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english/ep-180726" },
        { type: "Interactive", title: "ESL Lounge - Comparatives and Superlatives", url: "https://www.esl-lounge.com/student/grammar/comparatives-superlatives-intro.php" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.ted.com/talks",
      "https://www.npr.org/podcasts/"
    ]
  },
  // ===================== UNIDAD 8 =====================
  {
    id: 8,
    title: "Getting There",
    topic: "Progress & Time",
    desc: "Learn to describe ongoing activities, talk about progress, and catch up with people.",
    vocabulary: [
      {
        topic: "Nouns — Describing Experiences",
        items: [
          { word: "achievement", pos: "noun", def: "Something successfully accomplished.", ex: "Finishing her first marathon was her greatest achievement." },
          { word: "challenge", pos: "noun", def: "A difficult task that requires effort.", ex: "Learning a new language is a challenge." },
          { word: "chore", pos: "noun", def: "A routine household task.", ex: "Doing the dishes is my least favorite chore." },
          { word: "opportunity", pos: "noun", def: "A favorable situation.", ex: "The internship was an amazing opportunity." },
          { word: "process", pos: "noun", def: "A series of steps to achieve a result.", ex: "Learning to cook well is a slow process." },
          { word: "project", pos: "noun", def: "A planned piece of work.", ex: "I've been working on a photo project." },
          { word: "success", pos: "noun", def: "Accomplishment of a goal.", ex: "Her new restaurant has been a huge success." }
        ]
      },
      {
        topic: "Verbs — Describing Progress",
        items: [
          { word: "concentrate on", pos: "v phr", def: "Focus attention on one thing.", ex: "I've been concentrating on improving my vocabulary." },
          { word: "do your best", pos: "v phr", def: "Make the maximum effort.", ex: "Even if you fail, you can be proud if you do your best." },
          { word: "get nowhere", pos: "v phr", def: "Make no progress.", ex: "I've been getting nowhere with this math problem." },
          { word: "make good progress", pos: "v phr", def: "Advance steadily.", ex: "You've been making good progress with your English!" },
          { word: "save time", pos: "v phr", def: "Use less time.", ex: "Working from home has saved me a lot of time." },
          { word: "waste time", pos: "v phr", def: "Use time on unimportant things.", ex: "I've been wasting time scrolling through social media." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "work in progress", pos: "noun phrase", def: "Something still being developed.", ex: "My thesis is a work in progress, not final yet.", register: "Neutral/Professional" },
          { word: "milestone moment", pos: "noun phrase", def: "Significant moment in a process.", ex: "Graduating was a milestone moment for her.", register: "Formal/Inspirational" },
          { word: "step-by-step approach", pos: "noun phrase", def: "Slow and organized method.", ex: "Learning a language works best with a step-by-step approach.", register: "Educational/Instructive" },
          { word: "light at the end of the tunnel", pos: "idiom", def: "Sign of hope at the end of a difficulty.", ex: "After months of studying, there's finally light at the end of the tunnel.", register: "Idiomatic/Optimistic" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/progress-time-english/",
      "https://www.vocabulary.com/lists/achievement-words",
      "https://www.englishclub.com/vocabulary/time-management.php",
      "https://www.fluentu.com/blog/english/english-words-for-progress/",
      "https://dictionary.cambridge.org/topics/success-and-achievement/"
    ],
    grammar: [
      {
        title: "Present Perfect Continuous",
        explanation: {
          technicalAnalysis: "**Form:** have/has + been + verb-ing\n\n**Uses:**\n• Actions that started in the past and continue to the present (emphasis on duration).\n• Recently stopped actions with visible present results.\n\n**Contrast with Present Perfect Simple:**\n• I've painted the house (result – it's done).\n• I've been painting the house (activity – I'm tired or it's ongoing).\n\n**Time expressions:** for + duration, since + starting point.",
          advancedNuances: "**Formal:** Used to describe ongoing processes ('Researchers have been investigating for a decade').\n**Informal:** Very natural in conversation ('What have you been up to?').\n**Academic:** Useful for ongoing research.\n**Visible results:** 'You've been crying' (eyes are red).\n**Temporary vs permanent:** Continuous often implies temporary ('She's been living in Madrid for a year'); simple may imply permanent ('She has lived here all her life').",
          grayAreas: "• Stative verbs (know, believe) cannot be used in continuous: 'I've been knowing her' → wrong.\n• With verbs like live, work, study, both forms are often interchangeable with little difference.\n• For very long/permanent situations, simple may be preferred: 'Scientists have known this for centuries' (not continuous).\n• Number of completions: use simple – 'I've written three reports' (not 'I've been writing three reports').",
          errorAnalysis: [
            { type: "Correct", example: "I've been working here for 3 months.", explanation: "Ongoing activity – emphasis on process.", correction: "—" },
            { type: "Correct", example: "You look tired. Have you been running?", explanation: "Visible present evidence.", correction: "—" },
            { type: "Incorrect", example: "I've been known her for years.", explanation: "Stative verb in continuous.", correction: "I've known her for years." },
            { type: "Incorrect", example: "I have been go to school every day.", explanation: "Wrong verb form after 'been'.", correction: "I have been going to school every day." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Present Perfect Simple/Continuous – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-simple-continuous" },
            { type: "Theory", title: "Present Perfect Continuous – Quillbot", url: "https://quillbot.com/blog/verbs/present-perfect-continuous/" },
            { type: "Theory", title: "Present Perfect Continuous – Test‑English", url: "https://test-english.com/grammar-points/b1/present-perfect-continuous/" },
            { type: "Exercise", title: "Perfect English Grammar – PP or PPC", url: "https://www.perfect-english-grammar.com/present-perfect-or-present-perfect-continuous-exercise-1.html" },
            { type: "Exercise", title: "Englishpage – Present Perfect Continuous", url: "https://www.englishpage.com/verbpage/presentperfectcontinuous.htm" },
            { type: "Exercise", title: "GrammarBank – Present Perfect Continuous", url: "https://www.grammarbank.com/present-perfect-continuous-exercises.html" },
            { type: "Exercise", title: "Wall Street English – Present Perfect & Passive", url: "https://www.wallstreetenglish.com/exercises/the-present-perfect-tense-and-the-passive-voice/" }
          ]
        },
        structure: "have/has + been + verb-ing",
        examples: [
          "What have you been doing?",
          "I've been painting pictures.",
          "I haven't been going out at all.",
          "She's been studying for three hours.",
          "They've been renovating the apartment since March."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-continuous",
        quizTopicId: "pp_cont"
      },
      {
        title: "Present Perfect vs Present Perfect Continuous",
        explanation: {
          technicalAnalysis: "**Present Perfect Simple (have/has + past participle):**\n• Result or completion of an action ('I've cleaned the house' – it's clean now).\n• Number of completions ('She's written three books').\n• State continuing to now ('I've known him for years').\n\n**Present Perfect Continuous (have/has + been + verb-ing):**\n• Activity itself as ongoing process ('I've been cleaning all morning').\n• Duration or effort involved ('She's been studying for hours').\n• Recently stopped action with visible consequences ('You've been crying').\n\n**Key question:** Result/completion (simple) or activity/duration (continuous)?",
          advancedNuances: "**Formal:** Simple is more common in formal writing.\n**Informal:** Continuous is natural in speech for activities.\n**Academic:** Simple for findings ('The study has demonstrated...'); Continuous for ongoing investigations ('Researchers have been examining...').\n**Subtle meaning shift:** 'She's worked here for 24 years' (permanent) vs. 'She's been working here for 3 months' (temporary).\n**With numbers:** Use simple: 'I've written five emails today' (not continuous).",
          grayAreas: "• Stative verbs only in simple: 'I've known her for years' (not 'I've been knowing').\n• Verbs like live, work, study can use either with little difference when a duration is specified.\n• 'just' typically collocates with simple for very recent actions.\n• No time expression: continuous implies still in progress; simple implies possibly complete.\n• Temporary situations: continuous ('I've been staying at a hotel') implies temporary; simple ('I've stayed here before') implies experience.",
          errorAnalysis: [
            { type: "Correct", example: "I've cleaned the bathroom.", explanation: "Result‑focused.", correction: "—" },
            { type: "Correct", example: "I've been cleaning the bathroom.", explanation: "Activity‑focused.", correction: "—" },
            { type: "Correct", example: "She's written two reports today.", explanation: "Count of results – use simple.", correction: "—" },
            { type: "Incorrect", example: "I've been known her for years.", explanation: "Stative verb misuse.", correction: "I've known her for years." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Present Perfect Simple/Continuous – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-simple-continuous" },
            { type: "Theory", title: "Present Perfect Continuous – Quillbot", url: "https://quillbot.com/blog/verbs/present-perfect-continuous/" },
            { type: "Theory", title: "Present Perfect Continuous – Test‑English", url: "https://test-english.com/grammar-points/b1/present-perfect-continuous/" },
            { type: "Exercise", title: "Perfect English Grammar – PP or PPC", url: "https://www.perfect-english-grammar.com/present-perfect-or-present-perfect-continuous-exercise-1.html" },
            { type: "Exercise", title: "Englishpage – Present Perfect Continuous", url: "https://www.englishpage.com/verbpage/presentperfectcontinuous.htm" },
            { type: "Exercise", title: "GrammarBank – Present Perfect Continuous", url: "https://www.grammarbank.com/present-perfect-continuous-exercises.html" },
            { type: "Exercise", title: "Wall Street English – Present Perfect & Passive", url: "https://www.wallstreetenglish.com/exercises/the-present-perfect-tense-and-the-passive-voice/" }
          ]
        },
        structure: "have/has + past participle / have/has + been + -ing",
        examples: [
          "I've cleaned the bathroom.",
          "I've been cleaning the bathroom.",
          "She's worked here for 24 years.",
          "She's been working there for 3 months.",
          "I've written five emails. / I've been writing emails all morning."
        ],
        link: "https://www.perfect-english-grammar.com/present-perfect-continuous.html",
        quizTopicId: "pp_vs_ppc"
      }
    ],
    expressions: [
      { cat: "Asking About News", phrases: ["What have you been up to?", "What have you been doing lately?", "How have you been?", "It's been ages! Fill me in!"] },
      { cat: "Saying How Long It's Been", phrases: ["It's been a long time!", "I haven't seen you since last spring.", "I haven't seen you for over a year!"] },
      { cat: "Talking About Progress", phrases: ["I've been making good progress.", "I've been getting nowhere with that.", "I've been concentrating on that lately."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-talk-about-your-progress-in-english",
      "https://www.fluentu.com/blog/english/catching-up-phrases/",
      "https://www.englishclub.com/speaking/conversation-updates.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/talk-about-progress",
      "https://www.ef.edu/english-resources/english-vocabulary/personal-development/"
    ],
    writing: {
      task: "Progress journal entry reflecting on a personal goal",
      skill: "Reflective writing with specific examples",
      description: "Write a 120-150 word journal entry reflecting on progress toward a goal over the past month.",
      scaffolding: [
        "Goal Statement: What are you working on?",
        "Current Status: Where are you now compared to a month ago?",
        "Challenges/Successes: Detail one major challenge overcome or success achieved.",
        "Looking Ahead: What's your plan for next steps?"
      ],
      resourceLink: "https://positivepsychology.com/benefits-of-journaling/"
    },
    writingResources: [
      "https://positivepsychology.com/benefits-of-journaling/",
      "https://www.grammarly.com/blog/reflective-writing/",
      "https://writingcenter.unc.edu/tips-and-tools/reflective-writing/",
      "https://www.futurelearn.com/info/courses/reflective-writing-practice"
    ],
    speaking: {
      focus: "Contracted Future Forms ('ll)",
      explanation: "In natural speech, 'will' contracts to 'll after pronouns. The contracted form is very short.",
      examples: ["I will → I'll /aɪl/", "you will → you'll /juːl/", "it will → it'll /ɪtl/"],
      classroomActivity: [
        "Contraction Bingo: Cards with full and contracted forms. Teacher reads sentences; students mark if they hear the contraction.",
        "Shadow Reading: Play audio of native speakers; students repeat, mimicking speed and contraction."
      ],
      resourceLink: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1/session-2"
    },
    speakingResources: [
      "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1/session-2",
      "https://rachelsenglish.com/contractions/",
      "https://www.pronuncian.com/lessons/contractions",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Time Expression Mapping",
      explanation: "Listen for expressions indicating duration or sequence (for two weeks, lately, next) and map them to a timeline.",
      actionSteps: [
        "Listen to a conversation about progress.",
        "Identify and list all time expressions.",
        "Create a timeline showing the sequence of events or progress."
      ],
      resources: [
        { type: "Video", title: "BBC 6 Minute English - Success", url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english/ep-180712" },
        { type: "Interactive", title: "ESL Games Plus - Time Expressions", url: "https://www.eslgamesplus.com/time-expressions-esl-vocabulary-game/" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.esl-lab.com/",
      "https://www.ted.com/talks"
    ]
  },
  // ===================== UNIDAD 9 =====================
  {
    id: 9,
    title: "College & Work",
    topic: "Education & Employment",
    desc: "Learn to talk about education, jobs, workplace rules, and express confidence.",
    vocabulary: [
      {
        topic: "College Subjects",
        items: [
          { word: "architecture", pos: "noun", def: "Designing buildings.", ex: "She's studying architecture." },
          { word: "biology", pos: "noun", def: "Study of living organisms.", ex: "His passion is biology." },
          { word: "chemistry", pos: "noun", def: "Study of substances and reactions.", ex: "She got a degree in chemistry." },
          { word: "computer science", pos: "noun", def: "Study of computing and programming.", ex: "A degree in computer science opens many doors." },
          { word: "economics", pos: "noun", def: "Study of money management.", ex: "He studied economics." },
          { word: "engineering", pos: "noun", def: "Applying science to design machines.", ex: "She chose engineering." },
          { word: "law", pos: "noun", def: "Study of legal systems.", ex: "After studying law, he passed the bar exam." },
          { word: "medicine", pos: "noun", def: "Science of treating illness.", ex: "Studying medicine takes many years." }
        ]
      },
      {
        topic: "Employment",
        items: [
          { word: "career", pos: "noun", def: "Long-term professional journey.", ex: "She built a successful career in journalism." },
          { word: "contract", pos: "noun", def: "Legally binding agreement.", ex: "He signed a two-year contract." },
          { word: "salary", pos: "noun", def: "Fixed regular payment (monthly).", ex: "He negotiated a higher salary." },
          { word: "wage", pos: "noun", def: "Payment based on hours worked.", ex: "The minimum wage was increased." },
          { word: "working hours", pos: "noun", def: "Regular times expected to work.", ex: "My working hours are 9 to 6." },
          { word: "apply", pos: "verb", def: "Formally request consideration.", ex: "She decided to apply for the job." },
          { word: "hire", pos: "verb", def: "Employ someone.", ex: "The company hired ten new engineers." },
          { word: "manage", pos: "verb", def: "Be in charge of a team.", ex: "She manages a team of fifteen." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "land a job", pos: "v. phr.", def: "Get a job.", ex: "She finally landed a job at her dream company.", register: "Colloquial/Success" },
          { word: "career trajectory", pos: "noun phrase", def: "Direction of professional development.", ex: "His career trajectory is pointing towards management.", register: "Professional/Formal" },
          { word: "side hustle", pos: "noun phrase", def: "Secondary job to earn extra money.", ex: "Many students have a side hustle like tutoring or freelancing.", register: "Modern/Young" },
          { word: "burnout", pos: "noun", def: "Physical or emotional exhaustion.", ex: "Working 60 hours a week led to serious burnout.", register: "Occupational health/Current" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/college-work-vocabulary/",
      "https://www.vocabulary.com/lists/workplace-english",
      "https://www.englishclub.com/vocabulary/work.php",
      "https://www.bbc.co.uk/learningenglish/english/features/vocabulary/business",
      "https://dictionary.cambridge.org/topics/business/"
    ],
    grammar: [
      {
        title: "Modals of Necessity: have to, need to, must",
        explanation: {
          technicalAnalysis: "**External obligation (rules, circumstances):** have to, need to. (e.g., 'Students have to submit assignments by Friday.')\n**Internal/moral obligation:** must (strong conviction or authority). (e.g., 'You must try this dish – it's incredible.')\n**Syntax:** have to / need to / must + base verb.\n**Negatives:**\n• must not/mustn't = prohibition (not allowed)\n• don't have to/don't need to = no obligation (not required, but you can if you want)\n**Past:** use 'had to' (must has no past form).",
          advancedNuances: "**Formal:** 'must' is common in written rules, legal documents, official notices.\n**Informal:** 'have to' and 'need to' are far more common in speech.\n**Academic:** 'must' for strong recommendations ('Future research must address...'); 'need to' for requirements.\n**Register shift:** 'must' sounds authoritative; 'have to' is neutral.\n**'Need' as modal:** in formal/negative contexts: 'Need I remind you?' (rare in modern speech).",
          grayAreas: "• 'must' has no past – use 'had to'.\n• 'need to' vs 'must': often interchangeable, but 'must' carries more personal conviction.\n• Critical negative distinction: 'mustn't' (prohibition) ≠ 'don't have to' (no obligation).\n• 'have got to' = 'have to' in informal British English: 'I've got to go.'",
          errorAnalysis: [
            { type: "Correct", example: "I have to finish my homework by tomorrow.", explanation: "External obligation.", correction: "—" },
            { type: "Correct", example: "Students must wear uniforms.", explanation: "Strong rule.", correction: "—" },
            { type: "Incorrect", example: "I must to finish my homework.", explanation: "Modal + bare infinitive, not 'to'.", correction: "I must finish my homework." },
            { type: "Fossilized Error", example: "He musted attend the meeting.", explanation: "No past form – use 'had to'.", correction: "He had to attend the meeting." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Modal Verbs – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs" },
            { type: "Theory", title: "Modals of Advice – UVic", url: "https://continuingstudies.uvic.ca/elc/studyzone/330/grammar/330-modals-advice" },
            { type: "Theory", title: "Modal Verbs – San José State", url: "https://www.sjsu.edu/writingcenter/docs/handouts/Modal%20Verbs.pdf" },
            { type: "Exercise", title: "Modalities – Engelsklaslokaal", url: "https://engelsklaslokaal.nl/en/english-grammar-exercises/modal-verbs/modalities/" },
            { type: "Exercise", title: "Perfect English Grammar – Mixed Exercises", url: "https://www.perfect-english-grammar.com/grammar-exercises.html" },
            { type: "Exercise", title: "Testbook – Modals Exercises", url: "https://testbook.com/english-grammar/modals-exercises" },
            { type: "Exercise", title: "Vedantu – Modals Exercises", url: "https://www.vedantu.com/english/modals-exercises" }
          ]
        },
        structure: "have to / need to / must + base verb",
        examples: [
          "I have to take enough courses to get a degree.",
          "I don't have to choose a job yet.",
          "Students must enroll in four classes each semester.",
          "You don't have to attend the optional workshop.",
          "She had to work all weekend (past obligation)."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/modal-verbs",
        quizTopicId: "necessity"
      },
      {
        title: "Modals of Prohibition and Permission",
        explanation: {
          technicalAnalysis: "**Prohibition:**\n• can't / cannot (general informal)\n• must not / mustn't (strong, formal, often written)\n\n**Permission:**\n• can (informal, general)\n• may (formal, official)\n• could (polite or tentative request)\n\n**Politeness hierarchy for requests:** Can I...? < Could I...? < May I...? (most formal).\n**Syntax:** all modals + base verb.",
          advancedNuances: "**Formal:** 'may' for written permission; 'must not' for rules.\n**Informal:** 'can' for both permission and prohibition ('You can go', 'You can't do that').\n**Academic:** 'may' marks permitted actions; 'must not' marks integrity violations.\n**Register shift:** 'You can't do that' (casual) → 'That is not permitted' (formal) → 'Such conduct is strictly prohibited' (legal).\n**Possibility vs permission:** 'May' can also express possibility ('It may rain') – context resolves.",
          grayAreas: "• 'must not' = prohibition – fundamentally different from 'don't have to' (no obligation). Confusing them is a critical error.\n• 'could' for permission is present polite request, not past.\n• 'be allowed to' can replace 'can/may' in all tenses and is clearer for past permission.\n• 'Can I...?' is most common; 'May I...?' is very formal.",
          errorAnalysis: [
            { type: "Correct", example: "You can't smoke here.", explanation: "Informal prohibition.", correction: "—" },
            { type: "Correct", example: "May I leave early today?", explanation: "Formal request.", correction: "—" },
            { type: "Incorrect", example: "You mustn't to smoke here.", explanation: "Modal + bare infinitive.", correction: "You mustn't smoke here." },
            { type: "Incorrect", example: "Can I to go to the bathroom?", explanation: "Modal + base verb, not 'to'.", correction: "Can I go to the bathroom?" }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Modal Verbs – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs" },
            { type: "Theory", title: "Modals of Advice – UVic", url: "https://continuingstudies.uvic.ca/elc/studyzone/330/grammar/330-modals-advice" },
            { type: "Theory", title: "Modal Verbs – San José State", url: "https://www.sjsu.edu/writingcenter/docs/handouts/Modal%20Verbs.pdf" },
            { type: "Exercise", title: "Modalities – Engelsklaslokaal", url: "https://engelsklaslokaal.nl/en/english-grammar-exercises/modal-verbs/modalities/" },
            { type: "Exercise", title: "Perfect English Grammar – Mixed Exercises", url: "https://www.perfect-english-grammar.com/grammar-exercises.html" },
            { type: "Exercise", title: "Testbook – Modals Exercises", url: "https://testbook.com/english-grammar/modals-exercises" },
            { type: "Exercise", title: "Vedantu – Modals Exercises", url: "https://www.vedantu.com/english/modals-exercises" }
          ]
        },
        structure: "can't / must not + verb / can / may / could + verb",
        examples: [
          "You can't waste time.",
          "You must not miss your deadlines.",
          "You can take short breaks.",
          "May I email you? — Yes, you may.",
          "Could I leave a few minutes early today?"
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/permission-obligation",
        quizTopicId: "prohibition_permission"
      }
    ],
    expressions: [
      { cat: "Talking About Rules", phrases: ["I have to get a degree first.", "Students must take 120 credits.", "You can't waste time.", "You can take short breaks."] },
      { cat: "Expressing Confidence", phrases: ["That won't be a problem.", "That doesn't bother me.", "I think I can handle that.", "I'm ready for this challenge."] },
      { cat: "Expressing Lack of Confidence", phrases: ["I'm not sure I can handle that.", "I don't think I'm strong enough.", "That concerns me a little."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-talk-about-your-job-in-english",
      "https://www.fluentu.com/blog/english/professional-english-phrases/",
      "https://www.englishclub.com/speaking/conversation-job.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/talk-about-work",
      "https://www.ef.edu/english-resources/english-vocabulary/workplace/"
    ],
    writing: {
      task: "Cover letter for a job application",
      skill: "Targeted persuasion with parallel structure",
      description: "Write a 150-word cover letter applying for a specific (real or fictional) job, highlighting relevant skills and experience.",
      scaffolding: [
        "Intro: State the position and where you found it.",
        "Body (Skills Match): Connect your experience to job requirements using parallel structure (e.g., 'Managed teams, developed strategies, improved outcomes').",
        "Closing: Reiterate interest and request an interview."
      ],
      resourceLink: "https://www.indeed.com/career-advice/resumes-cover-letters/cover-letter-examples"
    },
    writingResources: [
      "https://www.indeed.com/career-advice/resumes-cover-letters/cover-letter-examples",
      "https://www.grammarly.com/blog/cover-letter/",
      "https://owl.purdue.edu/owl/job_search_writing/job_search_letters/cover_letters_1/index.html",
      "https://www.careercup.com/interview",
      "https://resumelab.com/cover-letter/examples"
    ],
    speaking: {
      focus: "Contrasting Stressed and Unstressed Syllables",
      explanation: "English is stress-timed; stressed syllables are louder and longer, unstressed syllables are reduced.",
      examples: ["em-PLOY-er", "e-CON-o-mics", "ar-chi-TEC-ture"],
      classroomActivity: [
        "Beatboxing Stress: Clap or snap on stressed syllables while whispering unstressed ones.",
        "Word Pyramid: Build words layering syllables, emphasizing stress shift (eco-NOM-ics → eco-NOM-i-CAL)."
      ],
      resourceLink: "https://rachelsenglish.com/word-stress-rhythm/"
    },
    speakingResources: [
      "https://rachelsenglish.com/word-stress/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/word-stress-2",
      "https://www.pronuncian.com/lessons/word-stress",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Modal Verb Identification",
      explanation: "Listen for modal verbs expressing necessity (have to, must), permission (can, may), and possibility (might, could).",
      actionSteps: [
        "Listen to a job interview or workplace conversation.",
        "List all modal verbs heard.",
        "Categorize them by function (necessity, permission, etc.)."
      ],
      resources: [
        { type: "Video", title: "BBC 6 Minute English - Work", url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english/ep-180719" },
        { type: "Interactive", title: "Perfect English Grammar - Modals", url: "https://www.perfect-english-grammar.com/modal-verbs.html" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.ted.com/talks",
      "https://www.npr.org/podcasts/"
    ]
  },
  // ===================== UNIDAD 10 =====================
  {
    id: 10,
    title: "What Is It Made Of?",
    topic: "Materials & Products",
    desc: "Learn to describe materials, production processes, and where things come from.",
    vocabulary: [
      {
        topic: "Materials",
        items: [
          { word: "cotton", pos: "noun", def: "Soft natural fabric from the cotton plant.", ex: "My favorite T-shirt is made of cotton." },
          { word: "glass", pos: "noun", def: "Hard transparent material from sand.", ex: "The vase is made of glass." },
          { word: "leather", pos: "noun", def: "Durable material from animal skin.", ex: "These boots are real leather." },
          { word: "metal", pos: "noun", def: "Hard shiny material like iron.", ex: "The frame is made of metal." },
          { word: "plastic", pos: "noun", def: "Lightweight synthetic material.", ex: "The toy is made of plastic." },
          { word: "polyester", pos: "noun", def: "Synthetic fabric from petroleum.", ex: "The jacket is polyester." },
          { word: "wood", pos: "noun", def: "Natural material from trees.", ex: "The table is made of wood." },
          { word: "wool", pos: "noun", def: "Natural fabric from sheep's fleece.", ex: "This sweater is made of wool." }
        ]
      },
      {
        topic: "Adjectives & Verbs — Properties & Production",
        items: [
          { word: "artificial", pos: "adj", def: "Made by humans, not natural.", ex: "The flowers are artificial." },
          { word: "fragile", pos: "adj", def: "Easily broken.", ex: "The glassware is fragile." },
          { word: "natural", pos: "adj", def: "Coming from nature.", ex: "Natural materials are eco-friendly." },
          { word: "waterproof", pos: "adj", def: "Does not allow water through.", ex: "My boots are waterproof." },
          { word: "manufacture", pos: "verb", def: "Make goods in large quantities.", ex: "The company manufactures furniture." },
          { word: "import", pos: "verb", def: "Bring goods into a country.", ex: "We import coffee from Colombia." },
          { word: "export", pos: "verb", def: "Send goods out of a country.", ex: "Mexico exports avocados." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "eco-friendly", pos: "adj.", def: "Friendly to the environment.", ex: "This bottle is made from eco-friendly materials.", register: "Modern/Social responsibility" },
          { word: "sustainable fashion", pos: "noun phrase", def: "Clothing produced responsibly.", ex: "She only buys sustainable fashion brands now.", register: "Fashion/Awareness" },
          { word: "built to last", pos: "adj. phrase", def: "Made to last a long time.", ex: "Quality furniture is built to last.", register: "Consumption/Value" },
          { word: "single-use plastic", pos: "noun phrase", def: "Plastic designed for one use only.", ex: "Many countries are banning single-use plastic bags.", register: "Environmental/Policy" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/materials-english-vocabulary/",
      "https://www.vocabulary.com/lists/materials-and-substances",
      "https://www.englishclub.com/vocabulary/materials.php",
      "https://dictionary.cambridge.org/topics/materials/",
      "https://www.merriam-webster.com/games/materials-vocabulary"
    ],
    grammar: [
      {
        title: "Simple Present Passive",
        explanation: {
          technicalAnalysis: "**Form:** am/is/are + past participle\n\n**Focus:** on the action or recipient, not the doer (agent).\n**Agent:** optional, introduced by 'by' (often omitted when unknown, obvious, or irrelevant).\n**Subject‑verb agreement:** singular → is, plural → are.\n**Uses:** current states, habitual processes, general truths (scientific, technical, journalistic writing).\n**'Made of' vs 'made from':** 'of' – material retains identity (wood); 'from' – material is transformed (paper from wood).",
          advancedNuances: "**Formal/Academic:** Passive is heavily used in scientific writing, lab reports ('The sample is filtered').\n**Informal:** Active voice is preferred in conversation.\n**Industrial contexts:** product descriptions, instruction manuals rely on present passive ('Each component is tested individually').\n**Agent omission logic:**\n• Unknown: 'The window is broken'\n• Obvious: 'The president is elected every four years'\n• Unimportant: 'Coffee is grown in Colombia'",
          grayAreas: "• Intransitive verbs (arrive, happen) cannot be made passive.\n• 'by' only included when the agent adds meaningful information.\n• Some verbs (know, understand, believe) appear in passive in formal contexts: 'It is known that...'.",
          errorAnalysis: [
            { type: "Correct", example: "The furniture is made here.", explanation: "Proper present passive.", correction: "—" },
            { type: "Correct", example: "Coffee is grown in many countries.", explanation: "General truth – agent omitted.", correction: "—" },
            { type: "Incorrect", example: "The furniture made here.", explanation: "Missing auxiliary 'is'.", correction: "The furniture is made here." },
            { type: "Fossilized Error", example: "The furniture is make here.", explanation: "Wrong past participle.", correction: "The furniture is made here." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Passives – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/passives" },
            { type: "Theory", title: "Advanced Passives – British Council", url: "https://learnenglish.britishcouncil.org/grammar/c1-grammar/advanced-passives-review" },
            { type: "Theory", title: "Present Perfect and Passive – Wall Street English", url: "https://www.wallstreetenglish.com/exercises/the-present-perfect-tense-and-the-passive-voice/" },
            { type: "Theory", title: "Passive Voice, Conditionals, Reported Speech – SCTCC", url: "https://sctcc.edu/sites/default/files/uploads/doc/2023-03/The%20Passive%20Voice,%20Conditional%20If%20sentences,%20Reported%20Speech,%20Subjunctive.pdf" },
            { type: "Exercise", title: "Perfect English Grammar – Passive 1", url: "https://www.perfect-english-grammar.com/passive-voice-exercise-1.html" },
            { type: "Exercise", title: "Perfect English Grammar – Passive 3", url: "https://www.perfect-english-grammar.com/passive-voice-exercise-3.html" },
            { type: "Exercise", title: "Practising English – Passive Voice", url: "https://www.practisingenglish.com/english-grammar-exercises/passive-voice_3.htm" },
            { type: "Exercise", title: "Perfect English Grammar – Mixed Exercises", url: "https://www.perfect-english-grammar.com/grammar-exercises.html" }
          ]
        },
        structure: "is/are + past participle",
        examples: [
          "The furniture is made in this factory.",
          "These chairs are used in restaurants.",
          "Coffee is grown in many countries.",
          "The components are tested individually.",
          "This jacket is designed for extreme weather conditions."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/passive",
        quizTopicId: "passive_present"
      },
      {
        title: "Simple Past Passive",
        explanation: {
          technicalAnalysis: "**Form:** was (singular) / were (plural) + past participle\n\n**Uses:** completed actions in the past where the focus is on the recipient, not the doer.\n• Historical events ('The phone was invented by Bell.')\n• Manufacturing/product origins ('It was designed in Germany.')\n• Formal reports of completed processes ('The samples were analyzed in the lab.')\n\n**Agent:** optionally introduced with 'by', often omitted.\n**Time expressions:** common to anchor events in time ('It was invented in 1876').",
          advancedNuances: "**Formal:** dominates historical writing, formal reports, legal documents, academic methodology ('Participants were recruited...').\n**Informal:** rare in casual speech – active is more natural ('They built the bridge in 1920').\n**Academic:** 'Data were collected' – note 'data' is technically plural, though 'data was' is accepted informally.\n**Agent specification:** include 'by' only when the agent is surprising or necessary: 'Gravity was described by Newton' (important).",
          grayAreas: "• Agreement error: 'The phone was designed' (singular) vs. 'The phones were shipped' (plural).\n• 'Have/has been + past participle' = Present Perfect Passive (not Simple Past Passive): 'The bridge has been repaired' (recent, present relevance) vs. 'The bridge was repaired in 2010' (specific past).\n• Irregular past participles: build→built, make→made, write→written, break→broken.",
          errorAnalysis: [
            { type: "Correct", example: "The phone was designed in 2019.", explanation: "Proper past passive.", correction: "—" },
            { type: "Correct", example: "The phones were shipped yesterday.", explanation: "Plural subject → 'were'.", correction: "—" },
            { type: "Incorrect", example: "The phone were designed in 2019.", explanation: "Subject‑verb agreement error.", correction: "The phone was designed..." },
            { type: "Fossilized Error", example: "The building was builded in 1900.", explanation: "Irregular past participle.", correction: "The building was built in 1900." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Passives – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/passives" },
            { type: "Theory", title: "Advanced Passives – British Council", url: "https://learnenglish.britishcouncil.org/grammar/c1-grammar/advanced-passives-review" },
            { type: "Theory", title: "Present Perfect and Passive – Wall Street English", url: "https://www.wallstreetenglish.com/exercises/the-present-perfect-tense-and-the-passive-voice/" },
            { type: "Theory", title: "Passive Voice, Conditionals, Reported Speech – SCTCC", url: "https://sctcc.edu/sites/default/files/uploads/doc/2023-03/The%20Passive%20Voice,%20Conditional%20If%20sentences,%20Reported%20Speech,%20Subjunctive.pdf" },
            { type: "Exercise", title: "Perfect English Grammar – Passive 1", url: "https://www.perfect-english-grammar.com/passive-voice-exercise-1.html" },
            { type: "Exercise", title: "Perfect English Grammar – Passive 3", url: "https://www.perfect-english-grammar.com/passive-voice-exercise-3.html" },
            { type: "Exercise", title: "Practising English – Passive Voice", url: "https://www.practisingenglish.com/english-grammar-exercises/passive-voice_3.htm" },
            { type: "Exercise", title: "Perfect English Grammar – Mixed Exercises", url: "https://www.perfect-english-grammar.com/grammar-exercises.html" }
          ]
        },
        structure: "was/were + past participle",
        examples: [
          "The phone was designed in 2019.",
          "The phones were shipped yesterday.",
          "The Eiffel Tower was built in 1889.",
          "The samples were analyzed in the laboratory.",
          "These shoes were made by hand."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/passive",
        quizTopicId: "passive_past"
      }
    ],
    expressions: [
      { cat: "Shopping & Products", phrases: ["What's it made of?", "Where was it made?", "Is it durable?", "It's worth the price."] },
      { cat: "Describing Materials", phrases: ["It's made from recycled plastic.", "The bag is made of leather.", "This fabric is waterproof."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-describe-materials-in-english",
      "https://www.fluentu.com/blog/english/english-phrases-for-shopping/",
      "https://www.englishclub.com/speaking/conversation-shopping.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/describe-products",
      "https://www.ef.edu/english-resources/english-vocabulary/shopping/"
    ],
    writing: {
      task: "Infographic caption for a product launch",
      skill: "Informative writing with passive voice highlights",
      description: "Write a 50-70 word caption for an infographic showcasing a new sustainable product.",
      scaffolding: [
        "Product Name & Benefit: Name and main eco-feature.",
        "Production Process: Describe how it's made using 2-3 passive sentences.",
        "Call to Action: Encourage readers to learn more or buy."
      ],
      resourceLink: "https://venngage.com/blog/infographic-design-tips/"
    },
    writingResources: [
      "https://venngage.com/blog/infographic-design-tips/",
      "https://www.grammarly.com/blog/technical-writing/",
      "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/index.html",
      "https://www.canva.com/learn/infographic-design/"
    ],
    speaking: {
      focus: "Intonation in Questions",
      explanation: "Yes/no questions usually end with rising intonation. Information questions usually end with falling intonation.",
      examples: ["Did you buy it? (↗ rising)", "Where was it made? (↘ falling)"],
      classroomActivity: [
        "Tone Detective Game: Students record themselves asking both types of questions. Partners guess if it was yes/no or info based solely on tone.",
        "Pitch Line Drawing: Draw a pitch line above a dialog, marking rises and falls for questions."
      ],
      resourceLink: "https://rachelsenglish.com/question-intonation/"
    },
    speakingResources: [
      "https://rachelsenglish.com/question-intonation/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/intonation",
      "https://www.pronuncian.com/lessons/intonation",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Passive Voice Spotting",
      explanation: "While listening to manufacturing or product descriptions, identify passive constructions (is made, are grown, was invented).",
      actionSteps: [
        "Listen to a product documentary segment.",
        "Count how many passive voice sentences you hear.",
        "Discuss: Why is passive voice used so much in this context?"
      ],
      resources: [
        { type: "Video", title: "National Geographic - Manufacturing", url: "https://www.youtube.com/user/NationalGeographic" },
        { type: "Interactive", title: "British Council - Passive Voice", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/passive-voice" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.ted.com/talks",
      "https://www.nationalgeographic.com/podcasts/"
    ]
  },
  // ===================== UNIDAD 11 =====================
  {
    id: 11,
    title: "Moving On",
    topic: "Life Changes & Decisions",
    desc: "Learn to talk about risks, opportunities, imaginary situations, and life decisions.",
    vocabulary: [
      {
        topic: "Nouns — Opportunities & Risks",
        items: [
          { word: "advantage", pos: "noun", def: "Favorable position.", ex: "The main advantage is having everything nearby." },
          { word: "disadvantage", pos: "noun", def: "Drawback.", ex: "The disadvantage is the long commute." },
          { word: "effect", pos: "noun", def: "Result of an action.", ex: "The effect of the policy has been positive." },
          { word: "goal", pos: "noun", def: "Something you aim to achieve.", ex: "Her goal is to speak three languages." },
          { word: "option", pos: "noun", def: "A choice available.", ex: "You have two options." },
          { word: "reward", pos: "noun", def: "Something given for effort.", ex: "The reward was a promotion." },
          { word: "risk", pos: "noun", def: "Possibility of something bad happening.", ex: "There's always a risk when starting a business." },
          { word: "situation", pos: "noun", def: "Set of circumstances.", ex: "The situation at work is difficult." }
        ]
      },
      {
        topic: "Phrasal Verbs — Succeeding",
        items: [
          { word: "figure out", pos: "phr v", def: "Find a solution.", ex: "I finally figured out how to fix the bug." },
          { word: "get over", pos: "phr v", def: "Recover from a difficulty.", ex: "It took months to get over losing the competition." },
          { word: "give up", pos: "phr v", def: "Stop trying.", ex: "Don't give up — you're so close!" },
          { word: "keep something up", pos: "phr v", def: "Continue doing something.", ex: "Keep it up and you'll pass!" },
          { word: "set something up", pos: "phr v", def: "Create or establish.", ex: "She set up her own online store." },
          { word: "stand out", pos: "phr v", def: "Be noticeably different or better.", ex: "You need to stand out from other applicants." },
          { word: "work out", pos: "phr v", def: "Have a successful result.", ex: "Moving abroad really worked out." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "take the plunge", pos: "v. phr.", def: "Take a risk to do something important.", ex: "After months of planning, she finally took the plunge and started her own business.", register: "Colloquial/Decisive" },
          { word: "leap of faith", pos: "noun phrase", def: "Decision based on trust, not proof.", ex: "Moving abroad was a leap of faith, but it paid off.", register: "Inspirational/Philosophical" },
          { word: "crossroads moment", pos: "noun phrase", def: "Critical point where you must make a decision.", ex: "Graduation was a crossroads moment that shaped his future.", register: "Literary/Reflective" },
          { word: "pivot point", pos: "noun phrase", def: "Fundamental change in direction or strategy.", ex: "The pandemic became a pivot point for many companies to go digital.", register: "Modern/Business" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/life-decisions-vocabulary/",
      "https://www.vocabulary.com/lists/phrasal-verbs-english",
      "https://www.englishclub.com/vocabulary/phrasal-verbs-list.php",
      "https://dictionary.cambridge.org/grammar/british-grammar/phrasal-verbs",
      "https://www.fluentu.com/blog/english/phrasal-verbs-list/"
    ],
    grammar: [
      {
        title: "Phrasal Verbs — Separable vs Inseparable",
        explanation: {
          technicalAnalysis: "**Separable phrasal verbs:** the noun object can go between verb and particle OR after the particle. When the object is a pronoun, it MUST go between (never after).\n• 'set up a company' → 'set it up' (correct) / 'set up it' (WRONG)\n\n**Inseparable phrasal verbs:** the object must always follow the full phrasal verb (cannot be placed between).\n• 'get over the failure' → 'get over it' (object always after)\n\n**Three‑part phrasal verbs** (verb + adverb + preposition) are always inseparable: look forward to, put up with, run out of.",
          advancedNuances: "**Formal:** Avoid phrasal verbs; use Latinate synonyms: 'establish' instead of 'set up', 'abandon' instead of 'give up'.\n**Informal:** Phrasal verbs are natural and frequent in speech and informal writing.\n**Academic:** Use formal synonyms.\n**Meaning changes:** Some phrasal verbs change meaning based on separability or context (e.g., 'turn up' = arrive vs. 'turn it up' = increase volume).",
          grayAreas: "• Particle as adverb → tends to be separable; particle as preposition → tends to be inseparable.\n• Some verbs can be both with different meanings: 'make out a form' (fill in, separable) vs. 'make out with someone' (kiss, inseparable).\n• Three‑part phrasal verbs are always inseparable.\n• Stress pattern: particle is typically stressed ('She TURNED the music UP').",
          errorAnalysis: [
            { type: "Correct", example: "They set up a company.", explanation: "Separable with noun object.", correction: "—" },
            { type: "Correct", example: "They set it up.", explanation: "Pronoun between verb and particle.", correction: "—" },
            { type: "Correct", example: "She got over the failure quickly.", explanation: "Inseparable – object after.", correction: "—" },
            { type: "Incorrect", example: "They set up it.", explanation: "Pronoun after particle – wrong.", correction: "They set it up." },
            { type: "Incorrect", example: "I look forward to meet you.", explanation: "'look forward to' + -ing (gerund).", correction: "I look forward to meeting you." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Phrasal Verbs – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/phrasal-verbs" },
            { type: "Theory", title: "Second Conditional – Test‑English", url: "https://test-english.com/grammar-points/b1/second-conditional/" },
            { type: "Theory", title: "Third Conditional – Test‑English", url: "https://test-english.com/grammar-points/b2/third-conditional/" },
            { type: "Exercise", title: "Perfect English Grammar – Phrasal Verbs", url: "https://www.perfect-english-grammar.com/phrasal-verbs.html" },
            { type: "Exercise", title: "Perfect English Grammar – Second Conditional", url: "https://www.perfect-english-grammar.com/second-conditional-exercise-1.html" },
            { type: "Exercise", title: "Perfect English Grammar – Third Conditional", url: "https://www.perfect-english-grammar.com/third-conditional-exercise-1.html" },
            { type: "Exercise", title: "GrammarBank – Conditional Sentences", url: "https://www.grammarbank.com/conditional-sentences-exercises.html" },
            { type: "Exercise", title: "AgendaWeb – Phrasal Verbs", url: "https://agendaweb.org/vocabulary/phrasal-verbs-exercises.html" }
          ]
        },
        structure: "verb + particle + object / verb + object + particle (separable) | verb + particle + object (inseparable)",
        examples: [
          "They set up a company. → They set it up.",
          "Get over the failure. → Get over it.",
          "She figured out the problem. → She figured it out.",
          "Don't give up your dream. → Don't give it up.",
          "I look forward to meeting you (three-part: always inseparable)."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/phrasal-verbs",
        quizTopicId: "phrasal"
      },
      {
        title: "Present & Future Unreal Conditionals",
        explanation: {
          technicalAnalysis: "**Second Conditional (Unreal/Hypothetical):**\n• Form: If + past simple, would + base verb\n• Meaning: imaginary situations, contrary to present fact, or highly unlikely in the present/future.\n• The past simple in the if‑clause does NOT indicate past time – it marks unreality (subjunctive mood).\n• For the verb 'be', formal usage requires 'were' for all persons ('If I were you...'). 'was' is accepted in informal speech for I/he/she/it.\n• Main clause can use 'would' (certainty), 'could' (ability), or 'might' (possibility).",
          advancedNuances: "**Formal/Academic:** Essential for hypothetical reasoning, policy analysis ('If the government were to invest more, outcomes would improve'). 'Were to' + infinitive makes it more distant and formal.\n**Informal:** Natural for dreams, wishes, advice ('If I had a million dollars...').\n**'Were' vs 'was':** In formal writing, 'were' is prescribed; in speech, 'was' is common but non‑standard for 'If I was you'.\n**Modal variation:** 'would' (certainty) > 'could' (possibility/ability) > 'might' (weaker possibility).",
          grayAreas: "• The past simple in if‑clause marks unreality, not past time: 'If I knew' means 'I don't know currently'.\n• 'If I were you' is a fixed phrase for advice – always 'were'.\n• The if‑clause can come before or after the main clause; comma when first.\n• First Conditional (real) vs Second Conditional (unreal): 'If it rains, I'll take an umbrella' (real possibility) vs. 'If it rained every day, I would move' (hypothetical).\n• Third Conditional (past hypothetical): If + past perfect, would have + past participle.",
          errorAnalysis: [
            { type: "Correct", example: "If I had a million dollars, I'd start a business.", explanation: "Standard second conditional.", correction: "—" },
            { type: "Correct", example: "If I were you, I'd take the job.", explanation: "Formal subjunctive 'were'.", correction: "—" },
            { type: "Incorrect", example: "If I have a million dollars, I would start a business.", explanation: "First conditional (real) mixed with second.", correction: "If I had a million dollars, I would start a business." },
            { type: "Incorrect", example: "If I would have more money, I'd travel.", explanation: "'would' cannot be in if‑clause.", correction: "If I had more money, I'd travel." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Phrasal Verbs – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/phrasal-verbs" },
            { type: "Theory", title: "Second Conditional – Test‑English", url: "https://test-english.com/grammar-points/b1/second-conditional/" },
            { type: "Theory", title: "Third Conditional – Test‑English", url: "https://test-english.com/grammar-points/b2/third-conditional/" },
            { type: "Exercise", title: "Perfect English Grammar – Phrasal Verbs", url: "https://www.perfect-english-grammar.com/phrasal-verbs.html" },
            { type: "Exercise", title: "Perfect English Grammar – Second Conditional", url: "https://www.perfect-english-grammar.com/second-conditional-exercise-1.html" },
            { type: "Exercise", title: "Perfect English Grammar – Third Conditional", url: "https://www.perfect-english-grammar.com/third-conditional-exercise-1.html" },
            { type: "Exercise", title: "GrammarBank – Conditional Sentences", url: "https://www.grammarbank.com/conditional-sentences-exercises.html" },
            { type: "Exercise", title: "AgendaWeb – Phrasal Verbs", url: "https://agendaweb.org/vocabulary/phrasal-verbs-exercises.html" }
          ]
        },
        structure: "If + past simple, would + base verb",
        examples: [
          "If I had a million dollars, I'd start a business.",
          "What would you do if you had more free time?",
          "If I were you, I'd take the job.",
          "If she knew the answer, she could help us.",
          "If they invested more, the results might improve."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/conditionals",
        quizTopicId: "unreal_conditional"
      }
    ],
    expressions: [
      { cat: "Talking About Success", phrases: ["Keep trying. Don't give up.", "Stand out from the crowd.", "If that doesn't work out, try something else."] },
      { cat: "Imaginary Situations", phrases: ["Would you swim across a river full of crocodiles for $1M?", "If I succeeded, the reward would be fantastic."] },
      { cat: "Softening an Opinion", phrases: ["I guess it's hard to give up a good job.", "I feel like that's a risky decision.", "I suppose it depends on the situation."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-talk-about-decisions-in-english",
      "https://www.fluentu.com/blog/english/english-phrases-for-success/",
      "https://www.englishclub.com/speaking/conversation-decisions.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/talk-about-change",
      "https://www.ef.edu/english-resources/english-vocabulary/life-decisions/"
    ],
    writing: {
      task: "Motivational blog post about overcoming a challenge",
      skill: "Narrative arc with emotional resonance",
      description: "Write a 150-180 word blog post sharing a personal challenge and how you overcame it, aiming to inspire readers.",
      scaffolding: [
        "Hook: Start with a relatable feeling or situation.",
        "The Challenge: Describe the obstacle and your emotions.",
        "Turning Point: What action or realization helped you?",
        "Resolution & Message: What did you learn? What message do you have for others?"
      ],
      resourceLink: "https://copyblogger.com/storytelling-content-marketing/"
    },
    writingResources: [
      "https://copyblogger.com/storytelling-content-marketing/",
      "https://www.grammarly.com/blog/inspirational-writing/",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html",
      "https://www.medium.com/",
      "https://www.positivelypositive.com/"
    ],
    speaking: {
      focus: "Rising and Falling Lists",
      explanation: "In lists, your voice rises on each item except the last, which falls.",
      examples: ["I need courage, patience, and determination. (↗ ↗ ↘)"],
      classroomActivity: [
        "Tone Auction: Students bid on items using lists with correct intonation.",
        "List Echo: Teacher reads a list with exaggerated intonation; students echo perfectly."
      ],
      resourceLink: "https://www.cambridge.org/features/cambridgeenglishpronunciation/"
    },
    speakingResources: [
      "https://www.cambridge.org/features/cambridgeenglishpronunciation/",
      "https://rachelsenglish.com/intonation/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/intonation-lists",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Conditional Logic Mapping",
      explanation: "Listen for unreal conditionals (If I had..., I would...) and map the hypothetical scenario and imagined result.",
      actionSteps: [
        "Listen to a motivational talk or podcast.",
        "Identify and write down 2-3 unreal conditional sentences.",
        "For each, explain: What is the hypothetical? What is the imagined consequence?"
      ],
      resources: [
        { type: "Video", title: "TED Talks - Life Choices", url: "https://www.ted.com/talks" },
        { type: "Interactive", title: "ESL Lounge - Conditionals", url: "https://www.esl-lounge.com/student/grammar/second-conditional.php" }
      ]
    },
    listeningResources: [
      "https://www.ted.com/talks",
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.npr.org/podcasts/"
    ]
  },
  // ===================== UNIDAD 12 =====================
  {
    id: 12,
    title: "What a Story!",
    topic: "Extreme Experiences & Stories",
    desc: "Learn to describe extreme feelings, accidents, and use reported speech.",
    vocabulary: [
      {
        topic: "Adjectives — Describing Extremes",
        items: [
          { word: "boiling", pos: "adj", def: "Extremely hot.", ex: "It was absolutely boiling in the desert." },
          { word: "enormous", pos: "adj", def: "Extremely large.", ex: "The portion size was enormous." },
          { word: "exhausted", pos: "adj", def: "Completely tired.", ex: "I was absolutely exhausted after the flight." },
          { word: "freezing", pos: "adj", def: "Extremely cold.", ex: "We were freezing without sleeping bags." },
          { word: "magnificent", pos: "adj", def: "Impressively beautiful.", ex: "The view was absolutely magnificent." },
          { word: "miserable", pos: "adj", def: "Extremely unhappy.", ex: "He was miserable during the rainy trip." },
          { word: "starving", pos: "adj", def: "Extremely hungry.", ex: "I'm absolutely starving — can we eat?" },
          { word: "terrified", pos: "adj", def: "Extremely frightened.", ex: "She was terrified when the roller coaster dropped." },
          { word: "thrilled", pos: "adj", def: "Extremely excited.", ex: "I was thrilled to get the scholarship." },
          { word: "tiny", pos: "adj", def: "Extremely small.", ex: "The apartment was tiny." }
        ]
      },
      {
        topic: "Verbs — Describing Accidents",
        items: [
          { word: "blame", pos: "verb", def: "Hold someone responsible.", ex: "Nobody blamed her — it was bad luck." },
          { word: "damage", pos: "verb", def: "Cause harm.", ex: "The storm damaged several cars." },
          { word: "destroy", pos: "verb", def: "Completely ruin.", ex: "The fire destroyed the kitchen." },
          { word: "knock off", pos: "phr v", def: "Push something accidentally so it falls.", ex: "She knocked off her glass." },
          { word: "slip", pos: "verb", def: "Accidentally lose footing.", ex: "She slipped on the wet floor." },
          { word: "spill", pos: "verb", def: "Cause liquid to flow out accidentally.", ex: "He spilled coffee on the keyboard." }
        ]
      },
      {
        topic: "Collocations & Modern Usage",
        items: [
          { word: "hair-raising", pos: "adj.", def: "Very exciting or terrifying.", ex: "The escape from the burning building was hair-raising.", register: "Narrative/Dramatic" },
          { word: "edge of your seat", pos: "adj. phrase", def: "Very excited or intrigued.", ex: "The thriller kept everyone on the edge of their seats.", register: "Expressive/Entertainment" },
          { word: "larger than life", pos: "adj. phrase", def: "Exaggerated or supernatural.", ex: "The legend of the haunted house grew larger than life with each retelling.", register: "Literary/Folklore" },
          { word: "come full circle", pos: "v. phr.", def: "Return to the starting point, completing a cycle.", ex: "After twenty years, his career came full circle back to his roots.", register: "Reflective/Complete" }
        ]
      }
    ],
    vocabularyResources: [
      "https://quizlet.com/subject/extreme-adjectives-english/",
      "https://www.vocabulary.com/lists/extreme-adjectives",
      "https://www.englishclub.com/vocabulary/extreme-adjectives.php",
      "https://www.bbc.co.uk/learningenglish/english/features/vocabulary/extreme-adjectives",
      "https://www.fluentu.com/blog/english/extreme-adjectives/"
    ],
    grammar: [
      {
        title: "Indefinite Pronouns",
        explanation: {
          technicalAnalysis: "**Formation:** prefixes (every‑, some‑, any‑, no‑) + suffixes (‑one, ‑body, ‑thing, ‑where) → 16 forms: everyone/everybody, someone/somebody, anyone/anybody, no one/nobody; everything, something, anything, nothing; everywhere, somewhere, anywhere, nowhere.\n**Grammatical agreement:** almost all are singular and take singular verbs ('Everyone is ready').\n**Distribution:**\n• some‑ forms in affirmative statements\n• any‑ forms in questions and negatives\n• every‑ and no‑ forms in all contexts\n**Double negative rule:** 'no‑' forms already create negation; do NOT add 'not': 'I didn't see nobody' is wrong (use 'I saw nobody' or 'I didn't see anybody').",
          advancedNuances: "**Formal:** singular verb required.\n**Informal:** plural pronouns are often used for gender‑neutral reference: 'Everyone brought their lunch' – widely accepted despite grammatical mismatch.\n**Academic:** singular agreement maintained strictly.\n**Gender‑neutral 'they':** 'Someone left their umbrella' – standard in many style guides.\n**'None' – special case:** can be singular (uncountable) or plural (countable, informal). 'None of the water is clean' (uncountable → singular). 'None of the students have arrived' (plural – informal).",
          grayAreas: "• Double negative: 'I didn't see nobody' – incorrect.\n• 'some‑' vs 'any‑': use 'some‑' in affirmative and offers ('Would you like something?'); 'any‑' in questions and negatives.\n• 'every‑' vs 'all': 'Everyone' is singular; 'all people' is plural.\n• Emphatic use: 'nothing at all', 'nowhere near', 'everybody else'.",
          errorAnalysis: [
            { type: "Correct", example: "Everyone was happy.", explanation: "Singular verb with indefinite pronoun.", correction: "—" },
            { type: "Correct", example: "Someone left their umbrella.", explanation: "Gender‑neutral 'their' accepted.", correction: "—" },
            { type: "Incorrect", example: "Everyone were happy.", explanation: "Verb agreement error.", correction: "Everyone was happy." },
            { type: "Incorrect", example: "I didn't see nobody.", explanation: "Double negative.", correction: "I didn't see anybody. / I saw nobody." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Reported Speech – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/reported-speech-statements" },
            { type: "Theory", title: "Reported Speech – Test‑English", url: "https://test-english.com/grammar-points/b1/reported-speech/" },
            { type: "Theory", title: "Indefinite Pronouns – Cambridge", url: "https://dictionary.cambridge.org/grammar/british-grammar/pronouns/indefinite-pronouns" },
            { type: "Theory", title: "Passive, Conditionals, Reported Speech – SCTCC", url: "https://sctcc.edu/sites/default/files/uploads/doc/2023-03/The%20Passive%20Voice,%20Conditional%20If%20sentences,%20Reported%20Speech,%20Subjunctive.pdf" },
            { type: "Exercise", title: "Perfect English Grammar – Reported Speech Mixed 1", url: "https://www.perfect-english-grammar.com/reported-speech-mixed-exercise-1.html" },
            { type: "Exercise", title: "Perfect English Grammar – Reported Speech Mixed 2", url: "https://www.perfect-english-grammar.com/reported-speech-mixed-exercise-2.html" },
            { type: "Exercise", title: "Perfect English Grammar – Reported Questions", url: "https://www.perfect-english-grammar.com/reported-questions-exercise-1.html" },
            { type: "Exercise", title: "GrammarBank – Reported Speech", url: "https://www.grammarbank.com/reported-speech-exercises.html" }
          ]
        },
        structure: "everyone, someone, anyone, no one, everything, something, anything, nothing, everywhere, somewhere, anywhere, nowhere",
        examples: [
          "Everyone was mad at me.",
          "Can someone pass me the ketchup?",
          "I can't find it anywhere.",
          "No one blamed me.",
          "Something strange happened last night.",
          "Nobody knew the answer."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/indefinite-pronouns",
        quizTopicId: "indef_pronouns"
      },
      {
        title: "Reported Speech",
        explanation: {
          technicalAnalysis: "**Changes when converting direct to reported speech:**\n1. **Tense backshifting** (one step back):\n   • present simple → past simple\n   • present continuous → past continuous\n   • present perfect → past perfect\n   • will → would\n   • can → could\n   • is going to → was going to\n2. **Pronoun changes:** I/we → he/she/they; you → he/she/they (depending on context)\n3. **Time/place changes:** now → then; today → that day; tomorrow → the next day; here → there\n\n**Reporting verbs:**\n• 'say' – no object needed ('She said she was tired')\n• 'tell' – requires an indirect object ('She told me she was tired')\n\n**Reported questions:** statement word order (no inversion), 'if/whether' for yes/no questions.",
          advancedNuances: "**Formal:** Backshifting expected in writing and academic citation.\n**Informal:** Backshifting may be skipped when the original statement is still true or very recent ('She said she is coming' – still valid).\n**Academic:** Essential for paraphrasing ('Smith (2020) argued that...').\n**Reporting orders/requests:** use 'tell/ask + object + to‑infinitive': 'Clean your room!' → 'She told me to clean my room.'\n**Optional backshifting:** can be skipped when reporting verb is present tense, statement still true, or speech was very recent.",
          grayAreas: "• Backshifting optional when reporting verb is present or statement still true.\n• Reported questions become embedded declarative clauses: 'He asked where I lived' (no inversion, no question mark).\n• Yes/No questions use 'if' or 'whether'.\n• Modal verbs: 'must' can remain or become 'had to' (obligation). 'would', 'could', 'should', 'might' do not change.\n• 'say' vs 'tell': 'She told that...' is incorrect – always 'She told me that...' or 'She said that...'.",
          errorAnalysis: [
            { type: "Correct", example: "She said she was tired.", explanation: "Proper backshift.", correction: "—" },
            { type: "Correct", example: "He asked where I lived.", explanation: "Reported question – statement order.", correction: "—" },
            { type: "Correct", example: "She told me to close the door.", explanation: "Reported command.", correction: "—" },
            { type: "Incorrect", example: "He asked where did I live.", explanation: "Inversion in reported question.", correction: "He asked where I lived." },
            { type: "Fossilized Error", example: "She told that she was ready.", explanation: "'tell' requires an object.", correction: "She said she was ready. / She told me she was ready." }
          ],
          resources: [
            { type: "Video", title: "YouTube Channels (general)", url: "https://www.youtube.com/@engvid" },
            { type: "Video", title: "BBC Learning English", url: "https://www.youtube.com/@BBCLearningEnglish" },
            { type: "Theory", title: "Reported Speech – British Council", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/reported-speech-statements" },
            { type: "Theory", title: "Reported Speech – Test‑English", url: "https://test-english.com/grammar-points/b1/reported-speech/" },
            { type: "Theory", title: "Indefinite Pronouns – Cambridge", url: "https://dictionary.cambridge.org/grammar/british-grammar/pronouns/indefinite-pronouns" },
            { type: "Theory", title: "Passive, Conditionals, Reported Speech – SCTCC", url: "https://sctcc.edu/sites/default/files/uploads/doc/2023-03/The%20Passive%20Voice,%20Conditional%20If%20sentences,%20Reported%20Speech,%20Subjunctive.pdf" },
            { type: "Exercise", title: "Perfect English Grammar – Reported Speech Mixed 1", url: "https://www.perfect-english-grammar.com/reported-speech-mixed-exercise-1.html" },
            { type: "Exercise", title: "Perfect English Grammar – Reported Speech Mixed 2", url: "https://www.perfect-english-grammar.com/reported-speech-mixed-exercise-2.html" },
            { type: "Exercise", title: "Perfect English Grammar – Reported Questions", url: "https://www.perfect-english-grammar.com/reported-questions-exercise-1.html" },
            { type: "Exercise", title: "GrammarBank – Reported Speech", url: "https://www.grammarbank.com/reported-speech-exercises.html" }
          ]
        },
        structure: "say (that) + clause / tell + someone + (that) + clause",
        examples: [
          "'I play baseball.' → She said she played.",
          "'I'm working.' → He said he was working.",
          "'I've seen it.' → She said she had seen it.",
          "'It'll be difficult.' → She said it would be difficult.",
          "'Where do you live?' → He asked where I lived.",
          "'Clean your room!' → She told me to clean my room."
        ],
        link: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/reported-speech",
        quizTopicId: "reported_speech"
      }
    ],
    expressions: [
      { cat: "Describing Your Feelings", phrases: ["Actually, I was shocked.", "What a nightmare!", "I couldn't stop smiling!", "It was a horrible / fantastic experience."] },
      { cat: "Asking About / Guessing Feelings", phrases: ["You must have been furious.", "I bet that made you feel good.", "How did that make you feel?"] },
      { cat: "Ending a Story", phrases: ["In the end, it turned into a dream vacation!", "Looking back, I realize that...", "And that's how it all worked out."] }
    ],
    expressionsResources: [
      "https://www.phrasemix.com/collections/how-to-react-with-surprise-in-english",
      "https://www.fluentu.com/blog/english/english-exclamations/",
      "https://www.englishclub.com/speaking/conversation-reactions.php",
      "https://www.bbc.co.uk/learningenglish/english/features/how-to/react-to-news",
      "https://www.ef.edu/english-resources/english-vocabulary/expressing-surprise/"
    ],
    writing: {
      task: "Podcast script excerpt about a personal legend",
      skill: "Engaging oral storytelling techniques",
      description: "Write a 120-150 word excerpt of a podcast script where you tell a dramatic or funny personal story.",
      scaffolding: [
        "Hook: Grab attention with a surprising opening line.",
        "Build-Up: Use vivid details and sensory language.",
        "Climax: Peak moment of tension or humor.",
        "Resolution: How it ended and what you learned."
      ],
      resourceLink: "http://transom.org/"
    },
    writingResources: [
      "https://transom.org/",
      "https://www.grammarly.com/blog/podcast-script/",
      "https://www.thepodcasthost.com/writing/podcast-scripts/",
      "https://blog.reedsy.com/creative-writing-tips/"
    ],
    speaking: {
      focus: "Intonation in Exclamations and Stories",
      explanation: "Exclamations use a fall-rise intonation pattern for dramatic effect. Surprise causes a sharp rising tone.",
      examples: ["What a nightmare! (↘↗ fall-rise)", "Really? (↗ sharp rise)"],
      classroomActivity: [
        "Emotion Tone Charades: Students read exclamations with different emotions (shock, joy, sarcasm) using tone.",
        "Story Theater: Groups perform a short story, focusing on varied intonation for drama."
      ],
      resourceLink: "https://rachelsenglish.com/storytelling-with-intonation/"
    },
    speakingResources: [
      "https://rachelsenglish.com/storytelling-with-intonation/",
      "https://www.bbc.co.uk/learningenglish/english/features/pronunciation/intonation-exclamations",
      "https://www.pronuncian.com/lessons/intonation-patterns",
      "https://youglish.com/"
    ],
    listening: {
      strategy: "Backshift Detection in Reported Speech",
      explanation: "Listen for how tenses shift when reporting speech (I am → he said he was).",
      actionSteps: [
        "Listen to a news report quoting someone.",
        "Write down the original quote and how it was reported.",
        "Note all tense/backshift changes."
      ],
      resources: [
        { type: "Video", title: "BBC Learning English - News Reports", url: "https://www.bbc.co.uk/learningenglish/english/features/newsreport" },
        { type: "Interactive", title: "British Council - Reported Speech", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/reported-speech-reporting-verbs" }
      ]
    },
    listeningResources: [
      "https://www.bbc.co.uk/learningenglish/english/features/newsreport",
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
      "https://elllo.org/",
      "https://www.ted.com/talks"
    ]
  }
];
