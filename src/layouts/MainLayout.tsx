import { Outlet } from 'react-router-dom';

import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pb-20 pt-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
