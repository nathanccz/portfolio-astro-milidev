export type CollectionName = "blog" | "projects" | "clients";

export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "My Portfolio",
  description: "a minimalistic blog+portfolio Astro theme",
  author: "Nathan Casarez",
  authorPhotoSrc: "/avatar.jpg",
  // logo: {
  //   darkThemeSrc: "/logo/logo_dark.png",
  //   lightThemeSrc: "/logo/logo_light.png",
  // },
};

type CollectionSite = {
  pageSize: number;
};

type HomeSite = {
  blogEntries?: number;
  projectEntries?: number;
  clientEntries?: number;
};

export const HOME: HomeSite = {
  blogEntries: 5,
  projectEntries: 3,
  clientEntries: 3,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  };
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
};

type ContactSite = ContactInfo[];

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:nathanccz.dev@gmail.com",
    displayAs: "nathanccz.dev@gmail.com",
  },
  {
    type: "X",
    href: "https://x.com/nathanccz_dev",
    displayAs: "@nathanccz_dev on X",
  },
  {
    type: "GitHub",
    href: "https://github.com/nathanccz",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/nathanccz/",
  },
];
