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
  {
    id: 'mc-6',
    type: 'multiple-choice',
    question: 'I ___ become a doctor.',
    options: ['will', 'am going to'],
    correctAnswer: 'am going to',
    explanation: 'Used for a long-term plan or ambition.'
  },
  {
    id: 'mc-7',
    type: 'multiple-choice',
    question: 'I think robots ___ replace some jobs.',
    options: ['will', 'are going to'],
    correctAnswer: 'will',
    explanation: 'We use "will" for predictions about the future based on our opinion.'
  },
  {
    id: 'mc-8',
    type: 'multiple-choice',
    question: 'Look at her! She ___ be a great teacher.',
    options: ['will', 'is going to'],
    correctAnswer: 'is going to',
    explanation: 'We use "be going to" when there is present evidence for a prediction.'
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
  },
  {
    id: 'sc-5',
    type: 'sentence-construction',
    question: 'I / be / designer',
    correctAnswer: ['I will be a designer', 'I am going to be a designer'],
    explanation: 'Both "will" (prediction/ambition) and "am going to" (plan) can be used here.'
  },
  {
    id: 'sc-6',
    type: 'sentence-construction',
    question: 'I / work / in an office',
    correctAnswer: ['I will work in an office', 'I am going to work in an office'],
    explanation: 'Future intention or prediction.'
  },
  {
    id: 'sc-7',
    type: 'sentence-construction',
    question: 'I / help / people',
    correctAnswer: ['I will help people', 'I am going to help people'],
    explanation: 'Future intention or prediction.'
  },
  // 4. Present Simple (jobs)
  {
    id: 'ps-1',
    type: 'fill-in-the-blank',
    question: 'A teacher __ students',
    correctAnswer: 'teaches',
    explanation: 'Present Simple for habits and permanent states (3rd person singular).'
  },
  {
    id: 'ps-2',
    type: 'fill-in-the-blank',
    question: 'A driver __ a car',
    correctAnswer: 'drives',
    explanation: 'Present Simple for habits and permanent states (3rd person singular).'
  },
  {
    id: 'ps-3',
    type: 'fill-in-the-blank',
    question: 'A designer __ things',
    correctAnswer: 'designs',
    explanation: 'Present Simple for habits and permanent states (3rd person singular).'
  },
  {
    id: 'ps-4',
    type: 'fill-in-the-blank',
    question: 'A doctor __ people',
    correctAnswer: 'helps',
    explanation: 'Present Simple for habits and permanent states (3rd person singular).'
  }
];
