/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
        MONGODB_URI:
      "mongodb+srv://admin:Adidas%3A%2F0631@main.1ks5l9r.mongodb.net/",
      
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
