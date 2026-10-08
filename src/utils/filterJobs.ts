import type { Job, JobFilters } from "../types/job";
import { normalizeText } from "./normalizeText";

export function filterJobs(
  jobs: Job[],
  filters: JobFilters,
  searchTerm: string,
): Job[] {
  const normalizedSearch = normalizeText(searchTerm);

  return jobs.filter((job) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      normalizeText(job.title).includes(normalizedSearch) ||
      normalizeText(job.company_name).includes(normalizedSearch) ||
      job.tags.some((tag) => normalizeText(tag).includes(normalizedSearch));

    const matchesType =
      filters.selectedType === "all" ||
      normalizeText(job.job_type).includes(normalizeText(filters.selectedType));

    const matchesLocation =
      filters.selectedLocation === "all" ||
      normalizeText(job.location).includes(
        normalizeText(filters.selectedLocation),
      ) ||
      normalizeText(job.candidate_required_location ?? "").includes(
        normalizeText(filters.selectedLocation),
      );

    const matchesRemoteOnly =
      !filters.remoteOnly || job.location.toLowerCase().includes("remote");

    return matchesSearch && matchesType && matchesLocation && matchesRemoteOnly;
  });
}
