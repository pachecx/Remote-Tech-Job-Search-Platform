import type { DataSource } from '../types/job';

export function resolveDataSource(value: unknown): DataSource {
  return value === 'mock' ? 'mock' : 'api';
}

export const dataSource: DataSource = resolveDataSource(
  import.meta.env.VITE_DATA_SOURCE,
);

export const isDemoMode = dataSource === 'mock';
