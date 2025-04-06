import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

const nextConfig = {
    output: isProd ? 'export' : undefined,
    rewrites: isProd ? undefined : async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:42110/api/:path*',
            },
            {
                source: '/auth/:path*',
                destination: 'http://localhost:42110/auth/:path*',
            },
            {
                source: '/static/:path*',
                destination: 'http://localhost:42110/static/:path*',
            },
        ];
    },
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
        loader: isProd ? 'custom' : 'default',
        loaderFile: isProd ? './image-loader.ts' : undefined,
        remotePatterns: isProd ? [
            {
                protocol: "https",
                hostname: "**.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "generated.khoj.dev",
            },
            {
                protocol: "https",
                hostname: "assets.khoj.dev",
            },
        ] : [
            {
                protocol: "https",
                hostname: "*"
            },
            {
                protocol: "http",
                hostname: "*"
            }
        ]
    }
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://www.npmjs.com/package/@sentry/webpack-plugin#options

org: "igme-ah",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
tunnelRoute: "/monitoring",

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});