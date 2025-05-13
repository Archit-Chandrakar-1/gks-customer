/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    // Enable source maps in development
    if (dev && !isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

export default nextConfig;
