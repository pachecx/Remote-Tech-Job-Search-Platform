import { ArrowUpDown } from 'lucide-react';

interface JobsHeaderProps {
  resultsCount: number;
  selectedCountLabel: string;
}

export function JobsHeader({ resultsCount, selectedCountLabel }: JobsHeaderProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-slate-500">Showing</p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{resultsCount} roles</h2>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
        <ArrowUpDown className="h-4 w-4" />
        {selectedCountLabel}
      </div>
    </div>
  );
}
