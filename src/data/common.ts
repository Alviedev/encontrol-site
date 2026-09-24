import type { TeamLinks } from "../components/SocialIcons";
import type { StoreLinks } from "../components/StoreIcons";

export type ReleaseDate =
  | { type: "date"; value: string }
  | { type: "year"; value: number }
  | { type: "quarter"; value: string }
  | { type: "tbd" };

// Link types are derived from the icon lists,
export type { TeamLinks } from "../components/SocialIcons";
export type { StoreLinks } from "../components/StoreIcons";

export type Developer = {
  slug: string;
  name: string;
  logoUrl?: string;
  bio?: string;
  links: TeamLinks;
  circle?: boolean;
};

export type GameClip = {
  type: "youtube";
  url: string;
  duration?: number;
};

export type Game = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string; // tall
  capsuleUrl?: string; // wide
  iconUrl?: string; // small square, from Steam
  clip?: GameClip;
  developers: Developer[];
  store: StoreLinks;
  release: ReleaseDate;
};

// "YYYY-MM-DD" parsed as mexican date
export function parseDate(value: string): Date {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

// "YYYY-MM-DD" -> "21 de septiembre de 2026"
export function formatDate(value: string): string {
  return parseDate(value).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatRelease(release: ReleaseDate): string {
  switch (release.type) {
    case "date":
      return formatDate(release.value);
    case "year":
      return `${release.value}`;
    case "quarter":
      return release.value;
    case "tbd":
      return "Próximamente";
  }
}

// Only exact dates count as released, once that day arrives
export function isReleased(release: ReleaseDate): boolean {
  return release.type === "date" && parseDate(release.value) <= new Date();
}
