/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unplash.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
