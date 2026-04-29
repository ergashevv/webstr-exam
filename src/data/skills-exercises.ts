export interface SkillExercise {
  id: string;
  type: 'word-builder' | 'matching' | 'fill-in-the-blank';
  title: string;
  description?: string;
  items?: { id: string; question: string; answer: string }[];
  pairs?: { left: string; right: string; id: string }[];
}

export const skillsExercises: SkillExercise[] = [
  {
    id: 'wb-1',
    type: 'word-builder',
    title: '🎲 1. Word Builder',
    description: 'Задание: составь слова из букв',
    items: [
      { id: 'wb1-1', question: 'tcaor', answer: 'actor' },
      { id: 'wb1-2', question: 'ramerf', answer: 'farmer' },
      { id: 'wb1-3', question: 'reginnee', answer: 'engineer' },
      { id: 'wb1-4', question: 'tistsar', answer: 'artist' },
      { id: 'wb1-5', question: 'nestiscit', answer: 'scientist' },
      { id: 'wb1-6', question: 'topil', answer: 'pilot' }
    ]
  },
  {
    id: 'm-1',
    type: 'matching',
    title: '🧠 2. Match job – skill',
    description: 'Соедини профессию и навык',
    pairs: [
      { id: 'm1-1', left: 'doctor', right: 'helping people' },
      { id: 'm1-2', left: 'designer', right: 'creativity' },
      { id: 'm1-3', left: 'programmer', right: 'coding' },
      { id: 'm1-4', left: 'teacher', right: 'communication' },
      { id: 'm1-5', left: 'police officer', right: 'physical strength' },
      { id: 'm1-6', left: 'scientist', right: 'analytical thinking' },
      { id: 'm1-7', left: 'firefighter', right: 'bravery' },
      { id: 'm1-8', left: 'pilot', right: 'responsibility' }
    ]
  },
  {
    id: 'f-1',
    type: 'fill-in-the-blank',
    title: '✍️ 3. Fill the gaps (skills)',
    description: 'Вставь слова: (creative / strong / friendly / smart / patient / brave / responsible)',
    items: [
      { id: 'f1-1', question: 'A teacher must be __', answer: 'patient' },
      { id: 'f1-2', question: 'A designer must be __', answer: 'creative' },
      { id: 'f1-3', question: 'A police officer must be __', answer: 'strong' },
      { id: 'f1-4', question: 'A doctor must be __', answer: 'smart' },
      { id: 'f1-5', question: 'A waiter must be __', answer: 'friendly' },
      { id: 'f1-6', question: 'A firefighter must be __', answer: 'brave' },
      { id: 'f1-7', question: 'A pilot must be __', answer: 'responsible' }
    ]
  }
];
