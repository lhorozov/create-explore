import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Force webpack instead of turbopack due to libsql native bindings */
  turbopack: {}, // Empty config to silence turbopack warning
  webpack: (config) => {
    // Required for libsql to work in serverless
    config.externals.push({
      'libsql': 'commonjs libsql',
      '@libsql/client': 'commonjs @libsql/client',
    });
    return config;
  },
};

export default nextConfig;
