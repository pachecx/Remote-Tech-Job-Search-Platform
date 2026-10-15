import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { dataSource } from '../../config/dataSource';
import { JobDetailsPage } from './JobDetailsPage';

function renderJobDetails() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/job/mock/demo-1001']}>
        <Routes>
          <Route path="/job/:source/:id" element={<JobDetailsPage />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe('demo job details', () => {
  it('opens a mock listing, disables applications, and persists its favorite', async () => {
    if (dataSource !== 'mock') {
      return;
    }

    localStorage.clear();
    const view = renderJobDetails();

    expect(
      await screen.findByRole('heading', { name: 'Frontend Developer' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Northstar Labs')).toBeInTheDocument();
    expect(
      screen.getAllByText('Demo position — applications unavailable'),
    ).toHaveLength(2);
    expect(screen.queryByRole('link', { name: /apply/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Save role' }));
    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem('devjobs-saved-jobs') ?? '[]')).toMatchObject([
        { id: 'demo-1001', source: 'mock' },
      ]);
    });
    view.unmount();

    renderJobDetails();
    expect(await screen.findByRole('button', { name: 'Saved' })).toBeInTheDocument();
  });
});
