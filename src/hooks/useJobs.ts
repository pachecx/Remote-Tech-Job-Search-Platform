import { useQuery } from '@tanstack/react-query';

import { dataSource } from '../config/dataSource';
import { getJobs } from '../services/jobsApi';

export function useJobs(search = '', category = 'all') {
  return useQuery({
    queryKey: ['jobs', dataSource, search, category],
    queryFn: () => getJobs({ search, category }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
