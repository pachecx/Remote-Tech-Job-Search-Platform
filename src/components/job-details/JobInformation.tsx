import { BriefcaseBusiness, CalendarDays, MapPin, Wallet } from 'lucide-react';

import type { Job } from '../../types/job';
import { formatDate } from '../../utils/formatDate';

interface JobInformationProps {
  job: Job;
}

export function JobInformation({ job }: JobInformationProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
          <MapPin className="mt-0.5 h-4 w-4 text-violet-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Location</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{job.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
          <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-violet-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Employment</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{job.job_type}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
          <CalendarDays className="mt-0.5 h-4 w-4 text-violet-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Posted</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{formatDate(job.publication_date)}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
          <Wallet className="mt-0.5 h-4 w-4 text-violet-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Compensation</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{job.salary ?? 'Not disclosed'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
