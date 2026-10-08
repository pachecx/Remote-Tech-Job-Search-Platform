import type { Job } from "../types/job";

const API_URL = "https://remotive.com/api/remote-jobs";

function normalizeJob(job: Partial<Job> & { [key: string]: unknown }): Job {
  return {
    id: String(
      job.id ?? `${job.title ?? "job"}-${job.company_name ?? "company"}`,
    ),
    title: String(job.title ?? "Untitled role"),
    company_name: String(job.company_name ?? "Remote company"),
    company_logo:
      typeof job.company_logo === "string" ? job.company_logo : null,
    location: String(job.location ?? "Remote"),
    tags: Array.isArray(job.tags) ? job.tags.map((tag) => String(tag)) : [],
    job_type: String(job.job_type ?? "full-time"),
    publication_date: String(job.publication_date ?? new Date().toISOString()),
    candidate_required_location:
      typeof job.candidate_required_location === "string"
        ? job.candidate_required_location
        : undefined,
    salary: typeof job.salary === "string" ? job.salary : undefined,
    description: typeof job.description === "string" ? job.description : "",
    url: typeof job.url === "string" ? job.url : "#",
    category: typeof job.category === "string" ? job.category : "software-dev",
  };
}

export async function fetchJobs({
  search = "",
  category = "all",
}: {
  search?: string;
  category?: string;
} = {}): Promise<Job[]> {
  const params = new URLSearchParams({ limit: "100" });

  if (search.trim()) {
    params.set("search", search.trim());
  }

  if (category !== "all") {
    params.set("category", category);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(
      "Unable to fetch remote jobs right now. Please try again later.",
    );
  }

  const data = (await response.json()) as { jobs?: Array<Partial<Job>> };

  return (data.jobs ?? []).map((job) => normalizeJob(job));
}
