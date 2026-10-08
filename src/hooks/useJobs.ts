import { useQuery } from '@tanstack/react-query';

import { fetchJobs } from '../services/jobsApi';

export function useJobs(search = '', category = 'all') {
  return useQuery({
    queryKey: ['jobs', search, category],
    queryFn: () => fetchJobs({ search, category }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
