export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-in-the-blank' | 'sentence-construction';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export const willGoingToExercises: Exercise[] = [
  // 1. Choose the correct answer
  {
    id: 'mc-1',
    type: 'multiple-choice',
    question: 'I think it __ rain tomorrow.',
    options: ['will', 'am going to'],
    correctAnswer: 'will',
    explanation: 'We use "will" for predictions based on what we think or believe.'
  },
  {
    id: 'mc-2',
    type: 'multiple-choice',
    question: 'Look at those clouds! It __ rain.',
    options: ['will', 'is going to'],
    correctAnswer: 'is going to',
    explanation: 'We use "be going to" for predictions based on present evidence.'
  },
  {
    id: 'mc-3',
    type: 'multiple-choice',
    question: 'I __ visit my grandmother this weekend.',
    options: ['will', 'am going to'],
    correctAnswer: 'am going to',
    explanation: 'We use "be going to" for plans and intentions made before the moment of speaking.'
  },
  {
    id: 'mc-4',
    type: 'multiple-choice',
    question: 'Don’t worry, I __ help you.',
    options: ['will', 'am going to'],
    correctAnswer: 'will',
    explanation: 'We use "will" for spontaneous decisions and offers.'
  },
  {
    id: 'mc-5',
    type: 'multiple-choice',
    question: 'She __ study medicine in the future.',
    options: ['will', 'is going to'],
    correctAnswer: 'is going to',
    explanation: 'We use "be going to" for long-term plans or intentions.'
  },
  // 2. Fill in the blanks
  {
    id: 'fb-1',
    type: 'fill-in-the-blank',
    question: 'I __ become a teacher one day.',
    correctAnswer: 'will',
    explanation: 'Used for a general prediction or a dream about the future.'
  },
  {
    id: 'fb-2',
    type: 'fill-in-the-blank',
    question: 'We __ watch a movie tonight (we already planned it).',
    correctAnswer: 'are going to',
    explanation: 'Used for a pre-decided plan.'
  },
  {
    id: 'fb-3',
    type: 'fill-in-the-blank',
    question: 'Be careful! You __ fall!',
    correctAnswer: 'are going to',
    explanation: 'Used for a prediction based on present evidence (the person is being careless).'
  },
  {
    id: 'fb-4',
    type: 'fill-in-the-blank',
    question: 'I promise I __ call you later.',
    correctAnswer: 'will',
    explanation: 'Used for promises.'
  },
  {
    id: 'fb-5',
    type: 'fill-in-the-blank',
    question: 'They __ travel to Paris next year.',
    correctAnswer: 'are going to',
    explanation: 'Used for a planned event in the future.'
  },
  // 3. Make sentences
  {
    id: 'sc-1',
    type: 'sentence-construction',
    question: '(I / be / doctor)',
    correctAnswer: 'I will be a doctor',
    explanation: 'A general statement or prediction about the future.'
  },
  {
    id: 'sc-2',
    type: 'sentence-construction',
    question: '(She / study / English tonight – planned)',
    correctAnswer: 'She is going to study English tonight',
    explanation: 'A planned activity.'
  },
  {
    id: 'sc-3',
    type: 'sentence-construction',
    question: '(We / help / you – promise)',
    correctAnswer: 'We will help you',
    explanation: 'A promise.'
  },
  {
    id: 'sc-4',
    type: 'sentence-construction',
    question: '(They / play / football tomorrow)',
    correctAnswer: 'They are going to play football tomorrow',
    explanation: 'A planned future activity.'
  }
];
