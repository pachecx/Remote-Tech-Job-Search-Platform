import { ArrowUpRight } from 'lucide-react';

import type { Job } from '../../types/job';

interface JobActionsProps {
  job: Job;
}

export function JobActions({ job }: JobActionsProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Quick actions</h3>
      <div className="mt-4 flex flex-col gap-3">
        {job.source === 'mock' ? (
          <p className="rounded-2xl bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-800">
            Demo position — applications unavailable
          </p>
        ) : job.url ? (
          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            Apply on company website
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <p className="rounded-2xl bg-slate-100 px-4 py-3 text-center text-sm text-slate-600">
            Application link unavailable
          </p>
        )}
      </div>
    </div>
  );
}
