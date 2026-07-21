export const stateCodes = [
  {
    code: 'N01',
    meaning: 'Not on Duty',
    description: 'Officer is not on duty',
    example: 'Off-shift officers',
    legislation: 'Police Procedures',
  },
  {
    code: 'N02',
    meaning: 'Available',
    description: 'Officer is available for deployment',
    example: 'Officer between calls',
    legislation: 'Police Procedures',
  },
  {
    code: 'N03',
    meaning: 'Engaged',
    description: 'Officer is engaged on current task',
    example: 'Attending incident',
    legislation: 'Police Procedures',
  },
  {
    code: 'N04',
    meaning: 'Meal Break',
    description: 'Officer is on meal break',
    example: 'Scheduled break time',
    legislation: 'Police Procedures',
  },
  {
    code: 'N05',
    meaning: 'Administrative',
    description: 'Officer is performing administrative duties',
    example: 'Report writing, paperwork',
    legislation: 'Police Procedures',
  },
];

export const priorityGrades = [
  {
    grade: 'IMMEDIATE',
    responseTime: '< 5 minutes',
    description: 'Immediate threat to life or serious crime in progress',
    example: 'Armed robbery, assault with weapon',
  },
  {
    grade: 'URGENT',
    responseTime: '5 - 15 minutes',
    description: 'Urgent incidents requiring rapid response',
    example: 'Vehicle collision, fighting',
  },
  {
    grade: 'PRIORITY',
    responseTime: '15 - 30 minutes',
    description: 'Important incidents requiring prompt response',
    example: 'Theft, fraud',
  },
  {
    grade: 'STANDARD',
    responseTime: '> 30 minutes',
    description: 'Standard incidents handled in normal order',
    example: 'Lost property, minor complaints',
  },
];
