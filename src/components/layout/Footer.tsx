import { dataSource } from '../../config/dataSource';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © 2026 DevJobs. Built for discovering remote product roles.
          {dataSource === 'api' && (
            <> Job listings powered by <a href="https://remotive.com/" target="_blank" rel="noreferrer" className="underline underline-offset-2">Remotive</a>.</>
          )}
        </p>
        <div className="flex items-center gap-4">
          <a href="/about" className="transition hover:text-slate-900">About</a>
          <a href="/saved" className="transition hover:text-slate-900">Saved</a>
        </div>
      </div>
    </footer>
  );
}
