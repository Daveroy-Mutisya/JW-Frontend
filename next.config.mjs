import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'jawabu-interiors-backend.onrender.com',
          port: '',
          pathname: '/project_pics/**',
        },
      ],
    },
  };

export default withNextVideo(nextConfig);