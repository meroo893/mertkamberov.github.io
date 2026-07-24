/** Skill groups rendered in the Skills section. Edit freely. */
export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'languages',
    items: ['Python', 'SQL', 'C++', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'data',
    items: [
      'Pandas',
      'PostgreSQL',
      'SQLAlchemy',
      'Big Data Processing',
      'ETL Automation',
      'Databricks',
    ],
  },
  {
    label: 'infra & tools',
    items: [
      'Docker',
      'Docker Compose',
      'Microsoft Azure',
      'Linux',
      'WSL2',
      'git',
      'uv',
      'Flask',
    ],
  },
];
