export interface RubricLevel {
  label: 'Exceptional' | 'Effective' | 'Acceptable' | 'Developing';
  points: number;
  description: string;
}

export interface RubricCategory {
  id: string;
  title: string;
  levels: RubricLevel[];
}

export const rubricData: RubricCategory[] = [
  {
    id: 'visual',
    title: 'Visual appeal and multimedia',
    levels: [
      { label: 'Exceptional', points: 10, description: 'Highly appealing graphic and multimedia elements are expertly included and fit the topic. Graphics and multimedia exceptionally used to enhance the WebQuest.' },
      { label: 'Effective', points: 9, description: 'Appealing graphic and multimedia elements are included appropriately and fit the topic. The graphics and multimedia are supportive of the quest.' },
      { label: 'Acceptable', points: 8, description: 'There are few graphic and multimedia elements. The graphics are related to the topic of the quest. Animation is used sparingly and only where appropriate to the topic rather than being decorative.' },
      { label: 'Developing', points: 7, description: 'There are few or no graphic and/or multimedia elements. Or graphics and animation are distracting and overused.' }
    ]
  },
  {
    id: 'navigation',
    title: 'Internal navigation',
    levels: [
      { label: 'Exceptional', points: 10, description: 'Navigation buttons are consistent from page to page and there are no dead links. Scaffolding tools and links are seamless. Title page with authorship, target grade level, source and revised date exceptionally well designed.' },
      { label: 'Effective', points: 9, description: 'Navigation buttons are consistent from page to page and there are no dead links. Scaffolding tools are seamless. Title page with authorship, target grade level, source and revised date effectively designed.' },
      { label: 'Acceptable', points: 8, description: 'Navigation buttons are consistent from page to page and there are few dead links. Scaffolding tools are seamless. Title page with authorship, target grade level, source and revised date appropriately designed.' },
      { label: 'Developing', points: 7, description: 'Navigation buttons and anchors are inconsistent from page to page and/or are dead links. Title page with authorship, target grade level, source and revised date not included or not well designed.' }
    ]
  },
  {
    id: 'domains',
    title: 'Learning domains',
    levels: [
      { label: 'Exceptional', points: 15, description: 'Expert application of Learning Domains. Introduction and all elements exceptionally engage the learner. Essential (Big) question or problem is central to the quest.' },
      { label: 'Effective', points: 14, description: 'Effective application of Learning Domains. Introduction and all elements effectively engage the learner. Essential (Big) question or problem is clearly defined.' },
      { label: 'Acceptable', points: 13, description: 'Appropriate application of Learning Domains. Introduction and all elements appropriately engage the learner. Essential (Big) question or problem is present.' },
      { label: 'Developing', points: 11, description: 'Basic application of Learning Domains. Introduction and all elements marginally engage learners. Essential (Big) question or problem marginally linked.' }
    ]
  },
  {
    id: 'task',
    title: 'Task clarity',
    levels: [
      { label: 'Exceptional', points: 10, description: 'The written description of the end/culminating product exceptionally describes the goal/s of this WebQuest. Exceptionally consistent with one of the "12 taskonomies". Task is highly engaging, involves inquiry and problem solving.' },
      { label: 'Effective', points: 9, description: 'The written description of the end/culminating product effectively describes the goal/s of this WebQuest. Effectively consistent with one of the "12 taskonomies". Task is very engaging and involves inquiry.' },
      { label: 'Acceptable', points: 8, description: 'The written description of the end/culminating product appropriately describes the goal/s of this WebQuest. Appropriately consistent with one of the "12 taskonomies". Task is appropriately engaging.' },
      { label: 'Developing', points: 7, description: 'The written description of the end/culminating product marginally describes the goal/s of this WebQuest. Marginally consistent with one of the "12 taskonomies". Task is marginally engaging.' }
    ]
  },
  {
    id: 'process',
    title: 'Process clarity',
    levels: [
      { label: 'Exceptional', points: 10, description: 'WebQuest process sequence exceptionally defined. Most learners know exactly how to proceed. Scaffolds and supports based on the WebQuest Process Guide are expertly utilized.' },
      { label: 'Effective', points: 9, description: 'WebQuest process sequence effectively defined. Most learners know exactly how to proceed. Scaffolds and supports based on the WebQuest Process Guide are included.' },
      { label: 'Acceptable', points: 8, description: 'WebQuest process sequence appropriately defined. Most learners know how to proceed. Scaffolds and supports are effective.' },
      { label: 'Developing', points: 7, description: 'WebQuest process sequence marginally defined. Most learners would not know exactly how to proceed. Scaffolds and supports are minimal.' }
    ]
  },
  {
    id: 'resources',
    title: 'Resource quality and quantity',
    levels: [
      { label: 'Exceptional', points: 10, description: '5 or more age-appropriate resources are included. Expert use of offline resources as needed.' },
      { label: 'Effective', points: 9, description: 'Effective use of age-appropriate resources (3-4). Effective use of offline resources as needed.' },
      { label: 'Acceptable', points: 8, description: 'Appropriate use of age-appropriate resources (3-4). Appropriate use of offline resources as needed.' },
      { label: 'Developing', points: 7, description: 'Links are few or mundane. Design includes links that are not appropriate for the grade level.' }
    ]
  },
  {
    id: 'evaluation',
    title: 'Evaluation and alignment with standards',
    levels: [
      { label: 'Exceptional', points: 15, description: 'Criteria for success on each task/process is exceptionally well-integrated. Linked to ISTE or learning standards with numbered references and links.' },
      { label: 'Effective', points: 14, description: 'Criteria for success on each task/process is effectively integrated. Linked to standards with numbered references and links.' },
      { label: 'Acceptable', points: 13, description: 'Criteria for success on each task/process is appropriately integrated. Gradations of success are appropriately defined.' },
      { label: 'Developing', points: 11, description: 'Criteria for success on each task/process is marginally well-integrated. Gradations of success are marginally defined.' }
    ]
  },
  {
    id: 'teacher',
    title: 'Teacher page and conclusion',
    levels: [
      { label: 'Exceptional', points: 10, description: 'MLS and ISTE Performance Profiles exceptionally well listed. All graphics/music have APA copyright info. Extension activities exceptionally described. Conclusion provides further study links.' },
      { label: 'Effective', points: 9, description: 'MLS and ISTE Performance Profiles effectively listed. Copyright information effectively stated. Extension activities effectively described. Conclusion effectively provides further study.' },
      { label: 'Acceptable', points: 8, description: 'MLS and ISTE Performance Profiles appropriately listed. Copyright information appropriately stated. Extension activities appropriately described.' },
      { label: 'Developing', points: 7, description: 'MLS and ISTE Performance Profiles marginally listed. Copyright information marginally stated. Conclusion marginally provides information.' }
    ]
  },
  {
    id: 'mechanics',
    title: 'Mechanics',
    levels: [
      { label: 'Exceptional', points: 10, description: 'WebQuest completed exceptionally well. No grammatical or spelling errors. Professional finish.' },
      { label: 'Effective', points: 9, description: 'WebQuest completed effectively. Few errors if any. High quality finish.' },
      { label: 'Acceptable', points: 8, description: 'WebQuest completed appropriately. Some minor errors but does not distract from content.' },
      { label: 'Developing', points: 7, description: 'WebQuest marginally completed. Significant errors or incomplete sections.' }
    ]
  }
];
