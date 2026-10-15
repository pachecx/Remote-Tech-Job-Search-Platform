import { ArrowUpRight, MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { useJobs } from '../../hooks/useJobs';
import { getJobPath } from '../../utils/jobIdentity';

function shuffleJobs<T>(items: T[], seed: number): T[] {
  const shuffled = [...items];
  let state = Math.floor(seed * 0x1_0000_0000);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = (state * 1_664_525 + 1_013_904_223) >>> 0;
    const swapIndex = state % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function TrendingJobs() {
  const { data: jobs = [], isLoading, error } = useJobs('', 'all');
  const [visitSeed] = useState(() => Math.random());
  const trendingJobs = useMemo(
    () => shuffleJobs(jobs, visitSeed).slice(0, 3),
    [jobs, visitSeed],
  );

  return (
    <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-inner">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">Trending today</p>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-700">
          {isLoading ? 'Loading' : 'Explore'}
        </span>
      </div>

      <div className="space-y-3" aria-live="polite">
        {isLoading ? (
          Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="h-[76px] animate-pulse rounded-2xl border border-slate-200 bg-white"
            />
          ))
        ) : error ? (
          <p className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            Trending roles are temporarily unavailable.
          </p>
        ) : trendingJobs.length > 0 ? (
          trendingJobs.map((job) => (
            <Link
              key={`${job.source}:${job.id}`}
              to={getJobPath(job)}
              className="group block rounded-2xl border border-slate-200 bg-white p-3 transition hover:border-violet-200 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-violet-700">
                    {job.title}
                  </p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {job.company_name}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-violet-600" />
              </div>
            </Link>
          ))
        ) : (
          <p className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            No trending roles are available right now.
          </p>
        )}
      </div>
    </div>
  );
}
