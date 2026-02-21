import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Smooth-scroll to a section by hash href (e.g. "/#courses"), accounting for fixed header. */
export function scrollToSection(href: string): boolean {
  const sectionId = href.replace("/#", "");
  const target = document.getElementById(sectionId);
  if (!target) return false;

  const headerEl = document.querySelector("header");
  const offset = headerEl?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", href);
  return true;
}
