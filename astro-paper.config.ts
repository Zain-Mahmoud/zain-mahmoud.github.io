import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://zain-mahmoud.github.io/",
    title: "Zain Mahmoud",
    description: "A minimal, responsive and SEO-friendly Astro blog theme.",
    author: "Zain Mahmoud",
    profile: "https://satna.ing",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://www.linkedin.com/in/zainelden-mahmoud/" },
    { name: "linkedin", url: "https://www.linkedin.com/in/username/" },
    { name: "mail",     url: "mailto:zain.mahmoud@mail.utoronto.ca" },
  ],
  shareLinks: [
  ],
});