import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://zain-mahmoud.github.io/",
    title: "Zain Mahmoud",
    description: "Zain Mahmoud — cybersecurity, ML, and systems software.",
    author: "Zain Mahmoud",
    profile: "https://github.com/Zain-Mahmoud",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
    prompt: ">",
    resumeUrl: "/Zainelden_Resume.pdf",
  },
  home: {
    eyebrow: "~/whoami",
    heading: "Hi, I'm Zain Mahmoud",
    statusLine: "CS student at U of T — open to security & systems internships",
    intro: `I work at the intersection of cybersecurity, machine learning, and
systems software. I enjoy breaking things apart, solving hard problems,
playing CTFs, and shipping open-source tooling.`,
    buttons: [
      { label: "Resume", href: "/Zainelden_Resume.pdf", target: "_blank" },
      { label: "Projects", href: "projects" },
      { label: "CTF & Writeups", href: "ctf" },
    ],
  },
  nav: {
    items: [
      { label: "Posts", href: "posts" },
      { label: "Tags", href: "tags" },
      { label: "Projects", href: "projects" },
      { label: "CTF", href: "ctf" },
      { label: "About", href: "about" },
    ],
  },
  footer: {
    note: "Built with Astro",
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
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Zain-Mahmoud" },
    { name: "linkedin", url: "https://www.linkedin.com/in/zainelden-mahmoud/" },
    { name: "mail",     url: "mailto:zain.mahmoud@mail.utoronto.ca" },
  ],
  shareLinks: [
  ],
});