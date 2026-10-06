import type { Job } from '../../types/job';
import { JobCard } from './JobCard';

interface JobListProps {
  jobs: Job[];
  savedJobs: string[];
  onToggleSave: (job: Job) => void;
}

export function JobList({ jobs, savedJobs, onToggleSave }: JobListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          isSaved={savedJobs.includes(job.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}
