/**
 * Prefix a path in /public with the deployment's base path.
 *
 * next/link and next/image handle basePath automatically; raw asset URLs
 * (video sources, downloads, meta tags) do not — use this for those.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}
