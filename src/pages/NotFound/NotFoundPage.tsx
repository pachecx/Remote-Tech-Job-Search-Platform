import { Link } from 'react-router-dom';

import { Button } from '../../components/ui/Button';
import { PageContainer } from '../../components/layout/PageContainer';

export function NotFoundPage() {
  return (
    <PageContainer className="py-12">
      <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.14em] text-violet-700">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">This page doesn’t exist or the role has moved.</p>
        <div className="mt-6 flex justify-center">
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
