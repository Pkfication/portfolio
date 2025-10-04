import Link from "next/link";
import type { GitHubRepo } from "@/lib/github";

export default function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="group rounded-lg border border-black/10 dark:border-white/10 p-4 hover:border-black/20 dark:hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold tracking-tight">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              {repo.name}
            </Link>
          </h3>
          {repo.description ? (
            <p className="mt-1 text-sm text-foreground/80">
              {repo.description}
            </p>
          ) : null}
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-foreground/70">
            {repo.language ? (
              <span className="rounded border border-black/10 dark:border-white/10 px-2 py-1">
                {repo.language}
              </span>
            ) : null}
            <span>★ {repo.stargazers_count}</span>
            <span>⑂ {repo.forks_count}</span>
            <span>
              Updated {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
