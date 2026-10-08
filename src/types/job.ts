export type JobType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'temporary' | 'internship' | 'all';

export interface Job {
  id: string;
  title: string;
  company_name: string;
  company_logo?: string | null;
  location: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location?: string;
  salary?: string;
  description: string;
  url: string;
  category: string;
}

export interface JobFilters {
  selectedType: string;
  selectedLocation: string;
  remoteOnly: boolean;
}

export interface JobApiResponse {
  jobs: Job[];
}
