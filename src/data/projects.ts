/**
 * Project cards shown on the homepage, in order.
 * Edit freely — add, remove, or reorder entries here and the site updates.
 */
export interface Project {
  name: string;
  description: string;
  tags: string[];
  repo?: string; // GitHub URL
  link?: string; // live demo / external link
  placeholder?: boolean; // marks cards awaiting a real write-up
}

export const projects: Project[] = [
  {
    // TODO(mert): replace with your real data-pipeline project
    name: 'etl-pipeline',
    description:
      'Containerized ETL pipeline — description coming soon. Replace this card in src/data/projects.ts.',
    tags: ['Python', 'Docker', 'PostgreSQL'],
    placeholder: true,
  },
  {
    // TODO(mert): replace with your real IoT project
    name: 'iot-telemetry',
    description:
      'Real-time IoT telemetry system — description coming soon. Replace this card in src/data/projects.ts.',
    tags: ['C++', 'IoT', 'MQTT'],
    placeholder: true,
  },
  {
    name: 'speaker-splitter',
    description:
      'Python tool that separates audio files by speaker using diarization data — useful for preparing clean per-speaker datasets from recordings.',
    tags: ['Python', 'Audio', 'Diarization'],
    repo: 'https://github.com/meroo893/speaker-splitter',
  },
  {
    name: 'voiceDializator',
    description:
      'Voice-driven dialer experiment in Python — speech input mapped to actions.',
    tags: ['Python', 'Speech'],
    repo: 'https://github.com/meroo893/voiceDializator',
  },
  {
    name: 'Digital-processing-of-signals',
    description:
      'Programming solutions for the Digital Signal Processing course at TU Sofia — filtering, transforms, and analysis in Jupyter notebooks.',
    tags: ['Python', 'Jupyter', 'DSP'],
    repo: 'https://github.com/meroo893/Digital-processing-of-signals',
  },
  {
    name: 'HackAUBG-6.0',
    description:
      'Hackathon project built with the SSAI TU Sofia team at HackAUBG 6.0.',
    tags: ['Python', 'Hackathon'],
    repo: 'https://github.com/meroo893/HackAUBG-6.0',
  },
];
