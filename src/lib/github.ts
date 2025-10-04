export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
};

const GITHUB_API = "https://api.github.com";

export async function fetchPublicRepos(
  username: string,
  perPage = 12
): Promise<GitHubRepo[]> {
  const url = `${GITHUB_API}/users/${encodeURIComponent(
    username
  )}/repos?sort=updated&per_page=${perPage}`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    // Cache server-side for 1 hour
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // Gracefully handle rate limits or errors by returning an empty list
    return [];
  }

  const data = (await res.json()) as GitHubRepo[];
  return data;
}
