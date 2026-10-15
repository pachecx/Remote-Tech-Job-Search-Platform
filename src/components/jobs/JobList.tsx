import type { Job } from '../../types/job';
import { getJobKey } from '../../utils/jobIdentity';
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
          key={getJobKey(job)}
          job={job}
          isSaved={savedJobs.includes(getJobKey(job))}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}
