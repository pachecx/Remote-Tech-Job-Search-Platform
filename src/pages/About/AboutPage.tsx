import { PageContainer } from '../../components/layout/PageContainer';

export function AboutPage() {
  return (
    <PageContainer className="pb-12">
      <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm uppercase tracking-[0.16em] text-violet-700">About DevJobs</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">Designed for remote-first careers.</h1>
        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
          <p>
            DevJobs helps developers discover product, engineering, and design roles that fit a flexible,
            remote-first lifestyle.
          </p>
          <p>
            The experience is built around clarity and speed: search by skill, explore curated categories,
            compare roles, and keep the best matches close at hand.
          </p>
          <p>
            It’s a portfolio project focused on modern frontend craftsmanship, real API integration, and a clean,
            thoughtful job discovery experience.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
