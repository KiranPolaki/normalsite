/**
 * The portfolio is served in two places:
 *   1. standalone at the root of its own domain  (no base path)
 *   2. mounted under udyogam.dev/founder         (NEXT_PUBLIC_BASE_PATH=/founder)
 *
 * Setting NEXT_PUBLIC_BASE_PATH on a deployment moves every route and asset
 * under that prefix, which is what makes the /founder rewrite from the Udyogam
 * app work without breaking `/_next` asset URLs.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // served through the host app's optimizer when mounted under a base path
    path: `${basePath}/_next/image`,
  },
};

export default nextConfig;
