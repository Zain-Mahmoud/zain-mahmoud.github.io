# Zain Mahmoud — Personal Site

Welcome — this repository is a personal website for Zain Mahmoud. It hosts a short resume, projects, CTF writeups, and occasional blog posts.

- Resume: [Zainelden_Resume.pdf](./Zainelden_Resume.pdf)
- Projects: /projects
- CTF writeups and notes: /ctf

## About this site

This site is built with Astro and a theme originally based on a community template. The template has been cleaned and customised to focus on personal content: projects, security writeups, and notes from coursework and competitions.

## Local development

To run the site locally (pnpm recommended):

```bash
pnpm install
pnpm dev
```

The dev server runs on http://localhost:4321 by default.

## Content

- Pages are stored under `src/content/pages/` (About, Projects, CTF).
- Posts (longer writeups, blog posts) are in `src/content/posts/`.

## How to add a project or writeup

- Projects: add an entry to `src/content/pages/projects.md` or add a dedicated post in `src/content/posts/` and link it from the Projects page.
- CTF/writeups: create a post in `src/content/posts/` and tag it with `ctf` or `writeup`.

## License

Content in this repository is licensed under MIT.

---

If you'd like any additional sections (a CV page, publications, or a tailored projects grid), say which format you'd prefer and it will be added.