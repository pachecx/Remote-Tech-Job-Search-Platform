import { ArrowRight, BriefcaseBusiness, Globe, Sparkles } from 'lucide-react';

import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
              <Sparkles className="h-3.5 w-3.5" />
              Discover remote roles
            </div>

            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Build your next chapter with remote opportunities.
              </h1>
              <p className="max-w-lg text-base text-slate-600 sm:text-lg">
                Explore software, product, and design roles from world-class companies working from anywhere.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Explore jobs
              </Button>
              <Button variant="outline" size="lg">
                View saved roles
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-violet-600" />
                2.4k live roles
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-violet-600" />
                Remote-first teams
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-inner">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Trending today</p>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-700">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {[
                  ['Senior Frontend Engineer', 'Remote • US / EU'],
                  ['Product Designer', 'Remote • Global'],
                  ['Staff Platform Engineer', 'Remote • Canada'],
                ].map(([title, meta]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-3">
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-xs text-slate-500">{meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
