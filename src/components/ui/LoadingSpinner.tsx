export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-violet-600" />
    </div>
  );
}
