import { useParams } from 'react-router-dom';

import { JobActions } from '../../components/job-details/JobActions';
import { JobDescription } from '../../components/job-details/JobDescription';
import { JobDetailsHeader } from '../../components/job-details/JobDetailsHeader';
import { JobInformation } from '../../components/job-details/JobInformation';
import { PageContainer } from '../../components/layout/PageContainer';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { useJobs } from '../../hooks/useJobs';
import { useSavedJobs } from '../../hooks/useSavedJobs';

export function JobDetailsPage() {
  const { id } = useParams();
  const { data = [], isLoading } = useJobs('', 'all');
  const { savedJobs, toggleJob, isSaved } = useSavedJobs();

  const job = data.find((item) => item.id === id) ?? savedJobs.find((item) => item.id === id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!job) {
    return (
      <PageContainer className="py-12">
        <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Role not found</h1>
          <p className="mt-2 text-slate-500">The job you’re looking for is no longer available.</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="space-y-6 pb-12">
      <JobDetailsHeader job={job} isSaved={isSaved(job.id)} onToggleSave={toggleJob} />
      <JobInformation job={job} />
      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.5fr]">
        <JobDescription job={job} />
        <JobActions job={job} />
      </div>
    </PageContainer>
  );
}
