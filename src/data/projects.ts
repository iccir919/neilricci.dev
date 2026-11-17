export interface Project {
  name: string;
  description: string;
  completion_date: string;
  skills: string[];
  link?: string;
  github_repo: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    name: "Personal Dashboard",
    description: "A Chrome extension that replaces the new tab page, and my everyday new tab. Shows a live clock, hourly and 7 day forecasts for multiple saved locations, the moon phase with upcoming phases, sunrise and sunset, and my most visited sites, all from free public APIs with no API keys.",
    completion_date: "2026-11-16",
    skills: ["JavaScript", "Chrome Extensions", "REST APIs", "localStorage"],
    link: "https://iccir919.github.io/personal-dashboard/index.html",
    github_repo: "https://github.com/iccir919/personal-dashboard",
    imageUrl: "/assets/projects/personal-dashboard.png"
  },
  {
    name: "Tiny Library",
    description: "A book catalog built with Next.js and TypeScript from a Figma design, with category pages, book detail pages with a custom 404, and live search suggestions.",
    completion_date: "2026-11-10",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://tiny-library-orcin.vercel.app/",
    github_repo: "https://github.com/iccir919/tiny-library",
    imageUrl: "/assets/projects/tiny-library.png"
  },
  {
    name: "Screen Time Tracker",
    description: "Apple deletes Screen Time history after four weeks. This keeps it. Reads Apple's undocumented on-device data into a local SQLite archive and serves a dashboard for exploring long-term trends by app and category.",
    completion_date: "2026-10-28",
    skills: ["Node.js", "SQLite", "Reverse Engineering", "Chart.js"],
    github_repo: "https://github.com/iccir919/screen-time-tracker",
    imageUrl: "/assets/projects/screen-time-tracker.png"
  },
  {
    name: "Streak Seeker",
    description: "Privacy-first Chrome extension for habit tracking with visual streak indicators, drag-and-drop reordering, and GitHub-style heatmaps. Built with React, Vite, and localStorage.",
    completion_date: "2026-02-19",
    skills: ["React", "Vite", "Chrome Extensions", "localStorage"],
    link: "https://chromewebstore.google.com/detail/streak-seeker/jbldckdbhaibiejndigjmgdaacainphh?authuser=0&hl=en",
    github_repo: "https://github.com/iccir919/streak-seeker",
    imageUrl: "/assets/projects/streak-seeker.png"
  },
  {
    name: "Bay Wheels Unlocked 2025",
    description: "Bike-share analytics platform built with a Node.js + PGlite ETL pipeline and a React dashboard, transforming millions of trips into geospatial insights.",
    completion_date: "2026-01-03",
    skills: ["JavaScript", "Node.js", "SQL & Data Modeling", "React"],
    link: "https://bay-wheels-unlocked-2025.vercel.app/",
    github_repo: "https://github.com/iccir919/bay-wheels-unlocked-2025",
    imageUrl: "/assets/projects/bay-wheels-unlocked-2025.png"
  },
  {
    name: "Neatly Cleaning Services",
    description: "A live business website built from designer mockups in collaboration with the client. Ongoing optimization includes SEO and traffic growth through Google Analytics.",
    completion_date: "2025-09-15",
    skills: ["HTML", "CSS", "JavaScript", "Google Analytics"],
    link: "https://www.neatlycleaningservices.com/",
    github_repo: "https://github.com/iccir919/neatly",
    imageUrl: "/assets/projects/neatly.png"
  },
  {
    name: "Oldagram",
    description: "A playful Instagram-style feed clone featuring profiles of historical and modern figures, showcasing UI replication skills.",
    completion_date: "2025-05-03",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://neil-scrimba-frontend-career-path.netlify.app/oldagram/index.html",
    github_repo: "https://github.com/iccir919/scrimba-frontend-developer-career-path/tree/main/oldagram",
    imageUrl: "/assets/projects/oldagram.png"
  },
  {
    name: "Pulse Watch",
    description: "My first real project: a Fitbit-powered app for viewing and exporting your heart rate data, used by over 100 monthly active users. Retired after the Fitbit Web API shut down in October 2026.",
    completion_date: "2018-10-06",
    skills: ["JavaScript", "Fitbit API", "Implicit Grant Authentication"],
    github_repo: "https://github.com/iccir919/pulseWatch",
    imageUrl: "/assets/projects/pulse-watch.png"
  },
];