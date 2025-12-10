import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Force webpack instead of turbopack due to libsql native bindings */
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Don't externalize @libsql/client, but allow better-sqlite3 to be external if it's used
      config.externals.push('better-sqlite3');
    }
    return config;
  },
};

export default nextConfig;
