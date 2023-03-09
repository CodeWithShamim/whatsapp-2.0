/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost', "i.ibb.co", "lh3.googleusercontent.com", "graph.facebook.com"]
    }
}

module.exports = nextConfig;