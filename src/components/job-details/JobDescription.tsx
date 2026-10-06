import type { Job } from '../../types/job';

interface JobDescriptionProps {
  job: Job;
}

export function JobDescription({ job }: JobDescriptionProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">Role overview</h2>
      <div
        className="prose max-w-none text-sm leading-7 text-slate-600 prose-headings:text-slate-900 prose-strong:text-slate-800 prose-ul:list-disc prose-ol:list-decimal"
        dangerouslySetInnerHTML={{ __html: job.description || '<p>No description available yet.</p>' }}
      />
    </div>
  );
}
