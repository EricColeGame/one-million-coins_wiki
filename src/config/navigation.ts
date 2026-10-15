export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "reviews", path: "/reviews", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
