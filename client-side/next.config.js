/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: "build",
    images: {
        domains: ["i.ibb.co", "lh3.googleusercontent.com"]
    }
}

module.exports = nextConfig