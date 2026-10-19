import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

const siteUrl = "https://nicoschonfeld.com";
const appDir = path.join(process.cwd(), "src/app");
const excludedRoutes = new Set(["/mantenance"]);

type AppRoute = {
  pathname: string;
  lastModified: Date;
};

function collectRoutes(directory: string, pathname: string): AppRoute[] {
  const routes: AppRoute[] = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("@") || entry.name.includes("[")) {
        continue;
      }

      const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
      routes.push(...collectRoutes(entryPath, `${pathname}${segment}`));
      continue;
    }

    if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      continue;
    }

    const route = pathname || "/";

    if (excludedRoutes.has(route)) {
      continue;
    }

    routes.push({
      pathname: route,
      lastModified: statSync(entryPath).mtime,
    });
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return collectRoutes(appDir, "")
    .sort((left, right) => left.pathname.localeCompare(right.pathname))
    .map((route) => ({
      url: new URL(route.pathname, siteUrl).href,
      lastModified: route.lastModified,
      changeFrequency: route.pathname === "/" ? "monthly" : "yearly",
      priority: route.pathname === "/" ? 1 : 0.7,
    }));
}
