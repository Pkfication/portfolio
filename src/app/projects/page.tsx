import type { Metadata } from "next";
import RepoCard from "@/components/RepoCard";
import { fetchPublicRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected GitHub repositories by Pankaj Gupta",
};

export default async function ProjectsPage() {
  const repos = await fetchPublicRepos("pkfication", 12);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-foreground/80">
          Recent open-source and public work. This list updates automatically
          from GitHub.
        </p>
      </header>

      {repos.length === 0 ? (
        <p className="text-foreground/70">
          No repositories found or GitHub rate limit exceeded. Please try again
          later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
