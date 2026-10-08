import { PageContainer } from '../../components/layout/PageContainer';
import { SavedJobsList } from '../../components/saved-jobs/SavedJobsList';
import { useSavedJobs } from '../../hooks/useSavedJobs';

export function SavedJobsPage() {
  const { savedJobs } = useSavedJobs();

  return (
    <PageContainer className="space-y-6 pb-12">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.14em] text-violet-700">Saved roles</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Your shortlist</h1>
      </div>

      <SavedJobsList jobs={savedJobs} />
    </PageContainer>
  );
}
