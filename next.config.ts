import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [75],
  },
  async redirects() {
    // Routes from the first prototype, kept alive for any shared links.
    return [
      { source: '/reality-check', destination: '/is-libya-safe', permanent: true },
      { source: '/travel-advisory-debunked', destination: '/is-libya-safe', permanent: true },
      { source: '/culinary', destination: '/taste-culture', permanent: true },
      { source: '/culture', destination: '/taste-culture', permanent: true },
      { source: '/history', destination: '/destinations?category=classical', permanent: true },
      { source: '/local-weekends', destination: '/local', permanent: true },
      { source: '/trade', destination: '/local#markets', permanent: true },
      { source: '/press-kit', destination: '/credits', permanent: true },
      { source: '/logistics/:path+', destination: '/logistics', permanent: true },
    ];
  },
};

export default nextConfig;
