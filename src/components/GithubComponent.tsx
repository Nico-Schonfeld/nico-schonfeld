"use client";

import { useEffect, useState } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import type { Activity } from "@/components/contribution-graph";

const GITHUB_USERNAME = "nico-schonfeld";
const GITHUB_PROFILE_URL = "https://github.com/nico-schonfeld";

const GITHUB_API_URL = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL;

export default function GitHubContributionsDemo() {
  const [contributions, setContributions] = useState<Activity[] | null>(
    GITHUB_API_URL ? null : [],
  );

  useEffect(() => {
    if (!GITHUB_API_URL) {
      return;
    }

    let cancelled = false;

    fetch(`${GITHUB_API_URL}/${GITHUB_USERNAME}?y=last`)
      .then((response) =>
        response.ok ? response.json() : { contributions: [] },
      )
      .then((data: { contributions?: Activity[] }) => {
        if (!cancelled) {
          setContributions(data.contributions ?? []);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContributions([]);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!contributions) {
    return <GitHubContributionsFallback />;
  }

  return (
    <GitHubContributions
      contributions={contributions}
      githubProfileUrl={GITHUB_PROFILE_URL}
    />
  );
}
