import type { Job } from '../types/job';

export function getJobKey(job: Pick<Job, 'id' | 'source'>): string {
  return `${job.source}:${job.id}`;
}

export function getJobPath(job: Pick<Job, 'id' | 'source'>): string {
  return `/job/${job.source}/${encodeURIComponent(job.id)}`;
}
