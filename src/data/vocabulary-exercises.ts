export interface VocabExercise {
  id: string;
  type: 'matching' | 'fill-in-the-blank';
  title: string;
  description?: string;
  pairs?: { left: string; right: string; id: string }[];
  questions?: { id: string; question: string; answer: string }[];
}

export const vocabularyExercises: VocabExercise[] = [
  {
    id: 'match-1',
    type: 'matching',
    title: '1. Match jobs and workplaces',
    description: 'Соедини профессию с местом работы',
    pairs: [
      { id: 'm1-1', left: 'doctor', right: 'hospital' },
      { id: 'm1-2', left: 'teacher', right: 'school' },
      { id: 'm1-3', left: 'pilot', right: 'airport' },
      { id: 'm1-4', left: 'chef', right: 'restaurant' },
      { id: 'm1-5', left: 'police officer', right: 'police station' },
      { id: 'm1-6', left: 'farmer', right: 'farm' },
      { id: 'm1-7', left: 'photographer', right: 'studio' },
      { id: 'm1-8', left: 'mechanic', right: 'garage' },
      { id: 'm1-9', left: 'nurse', right: 'clinic' },
      { id: 'm1-10', left: 'librarian', right: 'library' },
      { id: 'm1-11', left: 'baker', right: 'bakery' },
      { id: 'm1-12', left: 'architect', right: 'office' }
    ]
  },
  {
    id: 'match-2',
    type: 'matching',
    title: '2. Match jobs and actions',
    description: 'Соедини профессию с действием',
    pairs: [
      { id: 'm2-1', left: 'firefighter', right: 'puts out fires' },
      { id: 'm2-2', left: 'programmer', right: 'writes code' },
      { id: 'm2-3', left: 'waiter', right: 'serves food' },
      { id: 'm2-4', left: 'dentist', right: 'fixes teeth' },
      { id: 'm2-5', left: 'actor', right: 'plays roles in films' },
      { id: 'm2-6', left: 'veterinarian', right: 'helps sick animals' },
      { id: 'm2-7', left: 'journalist', right: 'writes news stories' },
      { id: 'm2-8', left: 'architect', right: 'designs buildings' }
    ]
  },
  {
    id: 'fill-1',
    type: 'fill-in-the-blank',
    title: '3. Complete the sentences',
    description: 'Вставь правильную профессию',
    questions: [
      { id: 'f1-1', question: 'A __ helps people in emergencies (fire).', answer: 'firefighter' },
      { id: 'f1-2', question: 'A __ works with computers and creates apps.', answer: 'programmer' },
      { id: 'f1-3', question: 'A __ takes photos.', answer: 'photographer' },
      { id: 'f1-4', question: 'A __ works in court.', answer: 'lawyer' },
      { id: 'f1-5', question: 'A __ flies a plane.', answer: 'pilot' },
      { id: 'f1-6', question: 'A __ bakes delicious bread and cakes.', answer: 'baker' },
      { id: 'f1-7', question: 'A __ helps the doctor in a hospital.', answer: 'nurse' },
      { id: 'f1-8', question: 'A __ designs new houses and buildings.', answer: 'architect' }
    ]
  },
  {
    id: 'match-3',
    type: 'matching',
    title: '4. Extra Jobs',
    description: 'Узнай больше профессий из видео',
    pairs: [
      { id: 'm3-1', left: 'astronaut', right: 'travels into space' },
      { id: 'm3-2', left: 'scientist', right: 'does experiments' },
      { id: 'm3-3', left: 'artist', right: 'paints pictures' },
      { id: 'm3-4', left: 'bus driver', right: 'drives people' },
      { id: 'm3-5', left: 'soccer player', right: 'plays football' }
    ]
  }
];
