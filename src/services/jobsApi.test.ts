import { afterEach, describe, expect, it, vi } from 'vitest';

import { dataSource, resolveDataSource } from '../config/dataSource';
import { mockJobs } from '../mocks/jobs.mock';
import { filterJobs } from '../utils/filterJobs';
import { getJobs } from './jobsApi';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('data source selection', () => {
  it('defaults missing and unsupported values to API mode', () => {
    expect(resolveDataSource(undefined)).toBe('api');
    expect(resolveDataSource('invalid')).toBe('api');
    expect(resolveDataSource('mock')).toBe('mock');
  });

  it('provides 20–30 fully identified fictional listings', () => {
    expect(mockJobs.length).toBeGreaterThanOrEqual(20);
    expect(mockJobs.length).toBeLessThanOrEqual(30);
    expect(mockJobs.every((job) => job.source === 'mock')).toBe(true);
    expect(mockJobs.every((job) => job.url === '' && !job.company_logo)).toBe(true);
    expect(new Set(mockJobs.map((job) => job.id)).size).toBe(mockJobs.length);
  });

  it('searches mock jobs by keyword and category without network calls', async () => {
    if (dataSource !== 'mock') {
      return;
    }

    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const jobs = await getJobs({ search: 'junior react', category: 'software-dev' });

    expect(jobs.map((job) => job.id)).toContain('demo-1002');
    expect(jobs.every((job) => job.category === 'software-dev')).toBe(true);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('loads API jobs through a simulated Remotive response', async () => {
    if (dataSource !== 'api') {
      return;
    }

    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(
        JSON.stringify({
          jobs: [
            {
              id: 412,
              title: 'API Frontend Engineer',
              company_name: 'Example API Company',
              location: 'Remote',
              job_type: 'full-time',
              publication_date: '2026-10-01T00:00:00Z',
              description: '<p>Build web products.</p>',
              url: 'https://jobs.example.test/412',
              category: 'software-dev',
            },
          ],
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      ),
    );

    const jobs = await getJobs({ search: 'Frontend', category: 'software-dev' });

    expect(fetchSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://remotive.com/api/remote-jobs?'),
    );
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.stringContaining('search=Frontend'),
    );
    expect(jobs).toMatchObject([
      { id: '412', source: 'api', url: 'https://jobs.example.test/412' },
    ]);
  });

  it('combines keyword, contract, and location filters', () => {
    const matchingJobs = filterJobs(
      mockJobs,
      {
        selectedType: 'full-time',
        selectedLocation: 'canada',
        remoteOnly: true,
      },
      'developer',
    );

    expect(matchingJobs.length).toBeGreaterThan(0);
    expect(
      matchingJobs.every(
        (job) =>
          job.job_type === 'full-time' &&
          job.location.toLowerCase().includes('canada') &&
          job.location.toLowerCase().includes('remote') &&
          job.title.toLowerCase().includes('developer'),
      ),
    ).toBe(true);
  });
});
