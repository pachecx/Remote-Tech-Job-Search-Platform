import { Search } from 'lucide-react';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface JobSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export function JobSearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search for roles, skills or companies',
}: JobSearchBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:gap-3">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-14 border-0 bg-slate-50 pl-11 text-base shadow-none focus:ring-0"
          aria-label="Search for jobs"
        />
      </div>
      <Button type="button" size="lg" onClick={onSubmit} className="sm:min-w-40">
        Search jobs
      </Button>
    </div>
  );
}
