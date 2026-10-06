import { Bookmark, BriefcaseBusiness, CalendarDays, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Job } from '../../types/job';
import { formatDate } from '../../utils/formatDate';

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onToggleSave: (job: Job) => void;
}

export function JobCard({ job, isSaved, onToggleSave }: JobCardProps) {
  return (
    <article className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {job.company_logo ? (
            <img src={job.company_logo} alt={job.company_name} className="h-10 w-10 rounded-2xl object-cover" />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-600">
              {job.company_name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{job.company_name}</p>
            <p className="mt-1 text-sm text-slate-500">{job.category}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onToggleSave(job)}
          className={`rounded-full p-2 transition ${isSaved ? 'bg-violet-50 text-violet-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
          aria-label={isSaved ? 'Remove from saved jobs' : 'Save job'}
        >
          <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        <Link to={`/job/${job.id}`} className="block text-xl font-semibold text-slate-900 hover:text-violet-700">
          {job.title}
        </Link>

        <div className="flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BriefcaseBusiness className="h-4 w-4" />
            {job.job_type}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {job.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <div className="inline-flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />
          {formatDate(job.publication_date)}
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
          <Sparkles className="h-3.5 w-3.5" />
          {job.salary ? job.salary : 'Salary not listed'}
        </div>
      </div>
    </article>
  );
}
