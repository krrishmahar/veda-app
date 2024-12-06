import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Use `false` for temporary redirects
      },
    ];
  },
};


export default nextConfig;
