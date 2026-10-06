import { SlidersHorizontal } from 'lucide-react';

import { Button } from '../ui/Button';
import { JobFilters } from './JobFilters';

interface JobFiltersMobileProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  remoteOnly: boolean;
  setRemoteOnly: (value: boolean) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
}

export function JobFiltersMobile({
  isOpen,
  onClose,
  selectedType,
  setSelectedType,
  remoteOnly,
  setRemoteOnly,
  selectedLocation,
  setSelectedLocation,
}: JobFiltersMobileProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/35 p-4 lg:hidden">
      <div className="mx-auto mt-10 max-w-lg rounded-[28px] bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900">
            <SlidersHorizontal className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          <button type="button" onClick={onClose} className="text-sm text-slate-500 hover:text-slate-900">
            Close
          </button>
        </div>

        <JobFilters
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          remoteOnly={remoteOnly}
          setRemoteOnly={setRemoteOnly}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        <div className="mt-4 flex justify-end">
          <Button size="sm" onClick={onClose}>
            Apply filters
          </Button>
        </div>
      </div>
    </div>
  );
}
