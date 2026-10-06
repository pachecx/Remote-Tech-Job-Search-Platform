import { ArrowRight, BookmarkCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Job } from '../../types/job';
import { formatDate } from '../../utils/formatDate';

interface SavedJobsListProps {
  jobs: Job[];
}

export function SavedJobsList({ jobs }: SavedJobsListProps) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 text-violet-600">
          <BookmarkCheck className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">No saved roles yet</h3>
        <p className="mt-2 text-sm text-slate-500">Save interesting jobs to keep track of your next application.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {job.company_logo ? (
              <img src={job.company_logo} alt={job.company_name} className="h-12 w-12 rounded-2xl object-cover" />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-600">
                {job.company_name.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{job.company_name}</p>
              <Link to={`/job/${job.id}`} className="mt-1 block text-lg font-semibold text-slate-900 hover:text-violet-700">
                {job.title}
              </Link>
              <p className="mt-1 text-sm text-slate-500">{job.location} • {job.job_type}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">{formatDate(job.publication_date)}</span>
            <Link to={`/job/${job.id}`} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
              View
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
