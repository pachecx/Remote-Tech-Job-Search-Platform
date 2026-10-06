import { CheckCircle2, Filter } from 'lucide-react';

import { jobTypes } from '../../constants/jobCategories';

interface JobFiltersProps {
  selectedType: string;
  setSelectedType: (value: string) => void;
  remoteOnly: boolean;
  setRemoteOnly: (value: boolean) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
}

const locationOptions = ['all', 'remote', 'us', 'europe', 'asia', 'canada'];

export function JobFilters({
  selectedType,
  setSelectedType,
  remoteOnly,
  setRemoteOnly,
  selectedLocation,
  setSelectedLocation,
}: JobFiltersProps) {
  return (
    <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-2 text-slate-900">
        <Filter className="h-4 w-4" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-medium text-slate-700">Job type</p>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                <input
                  type="radio"
                  name="jobType"
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className="h-4 w-4 border-slate-300 text-violet-600 focus:ring-violet-500"
                />
                <span className="capitalize">{type === 'all' ? 'Any type' : type.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-slate-700">Location</p>
          <div className="space-y-2">
            {locationOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                <input
                  type="radio"
                  name="location"
                  checked={selectedLocation === option}
                  onChange={() => setSelectedLocation(option)}
                  className="h-4 w-4 border-slate-300 text-violet-600 focus:ring-violet-500"
                />
                <span className="capitalize">{option === 'all' ? 'Anywhere' : option}</span>
              </label>
            ))}
          </div>
        </div>

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-violet-600" />
            Remote only
          </span>
          <input
            type="checkbox"
            checked={remoteOnly}
            onChange={(event) => setRemoteOnly(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
          />
        </label>
      </div>
    </aside>
  );
}
