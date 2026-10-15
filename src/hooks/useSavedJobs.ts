import { useEffect, useState } from 'react';

import type { Job } from '../types/job';
import { getJobKey } from '../utils/jobIdentity';

const STORAGE_KEY = 'devjobs-saved-jobs';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isSavedJob(value: unknown): value is Job {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === 'string' &&
    typeof value.title === 'string' &&
    typeof value.company_name === 'string' &&
    typeof value.location === 'string' &&
    Array.isArray(value.tags) &&
    typeof value.job_type === 'string' &&
    typeof value.publication_date === 'string' &&
    typeof value.description === 'string' &&
    typeof value.url === 'string' &&
    typeof value.category === 'string'
  );
}

export function useSavedJobs() {
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    try {
      const storedJobs = window.localStorage.getItem(STORAGE_KEY);
      if (!storedJobs) {
        return [];
      }

      const parsed: unknown = JSON.parse(storedJobs);
      if (!Array.isArray(parsed)) {
        throw new Error('Saved jobs data must be an array.');
      }

      return parsed
        .filter(isSavedJob)
        .map((job) => ({
          ...job,
          source: job.source === 'mock' ? 'mock' : 'api',
        }));
    } catch (error) {
      console.error('Unable to read saved jobs from localStorage.', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobs));
    } catch (error) {
      console.error('Unable to save jobs to localStorage.', error);
    }
  }, [savedJobs]);

  const toggleJob = (job: Job) => {
    setSavedJobs((currentJobs) => {
      const jobKey = getJobKey(job);
      const alreadySaved = currentJobs.some(
        (savedJob) => getJobKey(savedJob) === jobKey,
      );

      if (alreadySaved) {
        return currentJobs.filter(
          (savedJob) => getJobKey(savedJob) !== jobKey,
        );
      }

      return [job, ...currentJobs];
    });
  };

  const isSaved = (job: Pick<Job, 'id' | 'source'>) =>
    savedJobs.some((savedJob) => getJobKey(savedJob) === getJobKey(job));

  return { savedJobs, toggleJob, isSaved };
}
