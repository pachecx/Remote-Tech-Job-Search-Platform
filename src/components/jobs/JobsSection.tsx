import { SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';

import type { Job } from '../../types/job';
import { Button } from '../ui/Button';
import { EmptyState } from '../ui/EmptyState';
import { ErrorState } from '../ui/ErrorState';
import { JobFilters } from './JobFilters';
import { JobFiltersMobile } from './JobFiltersMobile';
import { JobList } from './JobList';
import { JobsHeader } from './JobsHeader';
import { Pagination } from './Pagination';

interface JobsSectionProps {
  jobs: Job[];
  isLoading: boolean;
  error: Error | null;
  searchTerm: string;
  selectedType: string;
  setSelectedType: (value: string) => void;
  remoteOnly: boolean;
  setRemoteOnly: (value: boolean) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  savedJobs: string[];
  onToggleSave: (job: Job) => void;
}

export function JobsSection({
  jobs,
  isLoading,
  error,
  selectedType,
  setSelectedType,
  remoteOnly,
  setRemoteOnly,
  selectedLocation,
  setSelectedLocation,
  savedJobs,
  onToggleSave,
  searchTerm,
}: JobsSectionProps) {
  const [page, setPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const itemsPerPage = 6;

  const paginatedJobs = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return jobs.slice(startIndex, startIndex + itemsPerPage);
  }, [jobs, page]);

  const totalPages = Math.max(1, Math.ceil(jobs.length / itemsPerPage));

  const selectedCountLabel =
    searchTerm.trim().length > 0
      ? `Search: “${searchTerm.trim()}”`
      : `${selectedType === 'all' ? 'All types' : selectedType.replace('-', ' ')}`;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-center justify-between gap-3 lg:hidden">
        <div className="text-sm text-slate-500">Explore roles</div>
        <Button variant="outline" size="sm" onClick={() => setIsMobileFiltersOpen(true)} icon={<SlidersHorizontal className="h-4 w-4" />}>
          Filters
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <JobFilters
            selectedType={selectedType}
            setSelectedType={(value) => {
              setSelectedType(value);
              setPage(1);
            }}
            remoteOnly={remoteOnly}
            setRemoteOnly={(value) => {
              setRemoteOnly(value);
              setPage(1);
            }}
            selectedLocation={selectedLocation}
            setSelectedLocation={(value) => {
              setSelectedLocation(value);
              setPage(1);
            }}
          />
        </div>

        <div>
          <JobsHeader resultsCount={jobs.length} selectedCountLabel={selectedCountLabel} />

          {isLoading ? (
            <div className="grid gap-5 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                  <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-slate-200" />
                  <div className="mt-4 h-4 w-5/6 animate-pulse rounded bg-slate-200" />
                  <div className="mt-4 h-20 animate-pulse rounded-2xl bg-slate-200" />
                </div>
              ))}
            </div>
          ) : error ? (
            <ErrorState message={error.message} />
          ) : jobs.length === 0 ? (
            <EmptyState
              title="No roles match your criteria"
              description="Try broadening your search or switching the selected filters."
            />
          ) : (
            <>
              <JobList jobs={paginatedJobs} savedJobs={savedJobs} onToggleSave={onToggleSave} />
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </>
          )}
        </div>
      </div>

      <JobFiltersMobile
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        selectedType={selectedType}
        setSelectedType={(value) => {
          setSelectedType(value);
          setPage(1);
        }}
        remoteOnly={remoteOnly}
        setRemoteOnly={(value) => {
          setRemoteOnly(value);
          setPage(1);
        }}
        selectedLocation={selectedLocation}
        setSelectedLocation={(value) => {
          setSelectedLocation(value);
          setPage(1);
        }}
      />
    </section>
  );
}
