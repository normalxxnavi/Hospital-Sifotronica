/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '.scdn.co',
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
            },
        ],
    }
};

export default nextConfig;