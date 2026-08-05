import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Full-bleed hero and banner photography is served a notch above the
    // default 75; Next 16 requires every quality used to be allow-listed.
    qualities: [75, 85],
  },
};

export default nextConfig;
