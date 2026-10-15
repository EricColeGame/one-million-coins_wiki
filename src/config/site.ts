export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://one-million-coins.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5258340/One_Million_Coins/",
  heroVideoId: "2K9RPc5SlVU", // One Million Coins gameplay walkthrough (showcase)
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
