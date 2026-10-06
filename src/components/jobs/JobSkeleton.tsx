export function JobSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-10 w-10 rounded-2xl bg-slate-200" />
        <div className="h-8 w-20 rounded-full bg-slate-200" />
      </div>
      <div className="mb-4 h-4 w-32 rounded bg-slate-200" />
      <div className="mb-2 h-5 w-3/4 rounded bg-slate-200" />
      <div className="mb-4 h-4 w-1/2 rounded bg-slate-200" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-5/6 rounded bg-slate-200" />
      </div>
    </div>
  );
}
