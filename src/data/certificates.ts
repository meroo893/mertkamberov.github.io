/** Certificates rendered in the Certificates section. Edit freely. */
export interface Certificate {
  name: string;
  issuer: string;
  link?: string;
}

export const certificates: Certificate[] = [
  { name: 'AI Fluency (multiple certificates)', issuer: 'Anthropic' },
  { name: 'AI Fluency (multiple certificates)', issuer: 'Microsoft' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
  { name: 'Databricks Optimizations', issuer: 'Databricks' },
  { name: 'Databricks Genie Space', issuer: 'Databricks' },
  { name: 'Python track (multiple certificates)', issuer: 'SoftUni' },
];
