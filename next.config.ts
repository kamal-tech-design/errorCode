import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Public Runtime Configuration
  publicRuntimeConfig: {
    api: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // Use environment variable if available
    debug: process.env.NEXT_PUBLIC_DEBUG === 'true', // Allow toggling via env
  },

  // Server Runtime Configuration
  serverRuntimeConfig: {
    api: process.env.SERVER_API_URL || 'http://localhost:3000/api', // Use environment variable if available
    debug: process.env.SERVER_DEBUG === 'true', // Allow toggling via env
  },

  // Allowed Development Origins (for CORS or local dev setup)
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.29.149:3000"
  ],

  // Enable Experimental features (if using Next.js 13 with App Directory)
  experimental: {
    // appDir: true, // For Next.js 13 App Directory features
  }
}

export default nextConfig
