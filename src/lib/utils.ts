import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes an image path with the base URL for GitHub Pages compatibility
 * @param path - Image path (e.g., "/use.jpg" or "/ec001.jpg")
 * @returns Path prefixed with base URL (e.g., "/portfolio/use.jpg" in production)
 */
export function getImagePath(path: string): string {
  // Get base URL from Vite (will be "/portfolio/" in production, "/" in dev)
  const baseUrl = import.meta.env.BASE_URL || "/";
  // Ensure base URL ends with /
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  // Remove leading slash from path if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Combine base URL and path
  return `${normalizedBase}${cleanPath}`;
}
