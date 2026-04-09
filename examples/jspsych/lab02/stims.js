// stims.js — Stimuli for Self-Paced Reading Tutorial
//
// Adapted from Breheny, Katsos & Williams (2006), Cognition 100, 434–463.
// Experiment 3: "Controlling for plugs"

const experimentStimuli = [
  {
    item: 1,
    condition: "upper_bound",
    sentence: "Mary asked John whether he intended to host all his relatives in his tiny apartment . John replied that he intended to host some of his relatives . The rest would stay in a nearby hotel .",
    target_word: "rest",
    question: "Was it his schoolmates that John intended to host?",
    correct_answer: "No"
  },
  {
    item: 1,
    condition: "lower_bound",
    sentence: "Mary was surprised to see John cleaning his apartment and she asked the reason why . John replied that he intended to host some of his relatives . The rest would stay in a nearby hotel .",
    target_word: "rest",
    question: "Was John cleaning his apartment?",
    correct_answer: "Yes"
  },

  {
    item: 2,
    condition: "upper_bound",
    sentence: "Mary wanted to create a special atmosphere and wondered whether to light all her candles . Eventually she lit some of her candles . The others were left unlit to create a nice effect .",
    target_word: "others",
    question: "Did Mary light all of her candles?",
    correct_answer: "No"
  },
  {
    item: 2,
    condition: "lower_bound",
    sentence: "Mary pays attention to every detail in order to create a romantic atmosphere for dinner parties . Last night she lit some of her candles . The others were left unlit to create a nice effect .",
    target_word: "others",
    question: "Was Mary preparing for a dinner party?",
    correct_answer: "Yes"
  },

  {
    item: 3,
    condition: "upper_bound",
    sentence: "George asked Mary whether John had gone to the cinema with all his friends . Mary said that he went with some of his friends . The others went bowling and skating .",
    target_word: "others",
    question: "Did John go to the cinema?",
    correct_answer: "Yes"
  },
  {
    item: 3,
    condition: "lower_bound",
    sentence: "John's mother is anxious about his whereabouts . She asked Mary what John did on Friday night . Mary said that he went with some of his friends . The others went bowling and skating .",
    target_word: "others",
    question: "Was John's mother asking about Friday night?",
    correct_answer: "Yes"
  },

  {
    item: 4,
    condition: "upper_bound",
    sentence: "The warden of the zoo asked whether all the lions had been fed . The worker replied that he had fed some of the lions . The rest were being examined by the vets .",
    target_word: "rest",
    question: "Were some lions being examined by vets?",
    correct_answer: "Yes"
  },
  {
    item: 4,
    condition: "lower_bound",
    sentence: "The warden of the zoo asked the worker what he had been doing all morning . The worker replied that he had fed some of the lions . The rest were being examined by the vets .",
    target_word: "rest",
    question: "Did the warden ask about the worker's morning?",
    correct_answer: "Yes"
  },

  {
    item: 5,
    condition: "upper_bound",
    sentence: "The manager asked whether all the employees had completed the safety training . The supervisor reported that some of the employees had finished . The rest would complete it next week .",
    target_word: "rest",
    question: "Had all employees finished the training?",
    correct_answer: "No"
  },
  {
    item: 5,
    condition: "lower_bound",
    sentence: "The manager stopped by to check on how the department was running . The supervisor reported that some of the employees had finished . The rest would complete it next week .",
    target_word: "rest",
    question: "Did the manager stop by the department?",
    correct_answer: "Yes"
  },

  {
    item: 6,
    condition: "upper_bound",
    sentence: "The teacher asked whether all the students had submitted their final essays . The assistant said that some of the students had submitted . The others requested an extension until Friday .",
    target_word: "others",
    question: "Did some students request an extension?",
    correct_answer: "Yes"
  },
  {
    item: 6,
    condition: "lower_bound",
    sentence: "The teacher was curious about how the class had been doing this quarter . The assistant said that some of the students had submitted . The others requested an extension until Friday .",
    target_word: "others",
    question: "Was the teacher asking about the class?",
    correct_answer: "Yes"
  },

  {
    item: 7,
    condition: "filler",
    sentence: "The professor canceled the afternoon lecture because she was feeling unwell . The students were disappointed but understood .",
    target_word: null,
    question: "Was the lecture canceled?",
    correct_answer: "Yes"
  },
  {
    item: 8,
    condition: "filler",
    sentence: "The new coffee shop on the corner opened last Monday . It has been very popular with students ever since .",
    target_word: null,
    question: "Did the coffee shop close?",
    correct_answer: "No"
  },
  {
    item: 9,
    condition: "filler",
    sentence: "A heavy rainstorm flooded several streets near the park . The city sent crews to clear the drains by evening .",
    target_word: null,
    question: "Was there a rainstorm?",
    correct_answer: "Yes"
  },
  {
    item: 10,
    condition: "filler",
    sentence: "The library will remain closed for renovations until next Wednesday . Students can use the reading room in the basement instead .",
    target_word: null,
    question: "Is the library open today?",
    correct_answer: "No"
  }
];
