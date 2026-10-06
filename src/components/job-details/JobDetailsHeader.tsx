import { ArrowLeft, Bookmark, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import type { Job } from "../../types/job";

interface JobDetailsHeaderProps {
  job: Job;
  isSaved: boolean;
  onToggleSave: (job: Job) => void;
}

export function JobDetailsHeader({
  job,
  isSaved,
  onToggleSave,
}: JobDetailsHeaderProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
              {job.company_name}
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              {job.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onToggleSave(job)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              isSaved
                ? "bg-violet-50 text-violet-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Saved" : "Save role"}
          </button>
          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Apply now
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
