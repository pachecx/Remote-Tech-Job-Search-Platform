import { useMemo, useState } from 'react';

import { CategoryChips } from '../../components/home/CategoryChips';
import { Hero } from '../../components/home/Hero';
import { JobSearchBar } from '../../components/home/JobSearchBar';
import { JobsSection } from '../../components/jobs/JobsSection';
import { PageContainer } from '../../components/layout/PageContainer';
import { jobCategories } from '../../constants/jobCategories';
import { useJobs } from '../../hooks/useJobs';
import { useSavedJobs } from '../../hooks/useSavedJobs';
import { filterJobs } from '../../utils/filterJobs';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [remoteOnly, setRemoteOnly] = useState(true);

  const { data = [], isLoading, error } = useJobs(searchTerm, selectedCategory);
  const { savedJobs, toggleJob } = useSavedJobs();

  const filteredJobs = useMemo(
    () => filterJobs(data, { selectedType, selectedLocation, remoteOnly }, searchTerm),
    [data, remoteOnly, searchTerm, selectedLocation, selectedType],
  );

  return (
    <>
      <Hero />

      <PageContainer className="space-y-6 pb-12">
        <JobSearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSubmit={() => undefined}
          placeholder="Search product, frontend, remote, design..."
        />

        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
          <CategoryChips
            categories={jobCategories}
            selectedCategory={selectedCategory}
            onChange={(value) => setSelectedCategory(value)}
          />
        </div>
      </PageContainer>

      <JobsSection
        jobs={filteredJobs}
        isLoading={isLoading}
        error={error as Error | null}
        searchTerm={searchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        remoteOnly={remoteOnly}
        setRemoteOnly={setRemoteOnly}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        savedJobs={savedJobs.map((job) => job.id)}
        onToggleSave={toggleJob}
      />
    </>
  );
}
