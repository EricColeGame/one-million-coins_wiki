export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  communityUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "One Million Coins Wiki",
  shortName: "One Million Coins",
  logoText: "O",
  tagline: "Skill Tree, Upgrades, Vault Progression & Tips",
  description: "Fan-made One Million Coins wiki covering the first-person coin mining loop, tool and pouch upgrades, the 250+ node skill tree, vault progression and achievements.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://one-million-coins.wiki",
  supportEmail: "support@one-million-coins.wiki",
  gameUrl: "https://store.steampowered.com/app/5258340/One_Million_Coins/",
  communityUrl: "https://steamcommunity.com/app/5258340",
  heroVideoId: "wY3xRVleik4", // One Million Coins - Official Trailer (Oyen & Umi Games)
  social: {
    youtube: "https://www.youtube.com/@OyenTheCapybara",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
