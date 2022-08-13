/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    ignoreDuringBuilds: true,
    images: {
        domains: ["i.ibb.co", "lh3.googleusercontent.com"]
    }
}

module.exports = {
    nextConfig,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    }
}