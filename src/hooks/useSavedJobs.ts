import { useEffect, useState } from 'react';

import type { Job } from '../types/job';

const STORAGE_KEY = 'devjobs-saved-jobs';

export function useSavedJobs() {
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    try {
      const storedJobs = window.localStorage.getItem(STORAGE_KEY);
      return storedJobs ? (JSON.parse(storedJobs) as Job[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobs));
  }, [savedJobs]);

  const toggleJob = (job: Job) => {
    setSavedJobs((currentJobs) => {
      const alreadySaved = currentJobs.some((savedJob) => savedJob.id === job.id);

      if (alreadySaved) {
        return currentJobs.filter((savedJob) => savedJob.id !== job.id);
      }

      return [job, ...currentJobs];
    });
  };

  const isSaved = (jobId: string) => savedJobs.some((job) => job.id === jobId);

  return { savedJobs, toggleJob, isSaved };
}
