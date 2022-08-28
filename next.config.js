const { withSentryConfig } = require('@sentry/nextjs')

const HOST_MAPPINGS = [
  {
    name: 'rogue-sharks',
    hostname: 'stake.roguesharks.org',
  },
  {
    name: 'Orbit',
    hostname: 'stake.unfrgtn.space',
  },
  {
    name: 'degengod',
    hostname: 'stake.degengod.xyz',
  },
  {
    name: 'plane-x',
    hostname: 'staking.plane-x.io',
  },
  {
    name: 'lil-weenees',
    hostname: 'stake.weenee.me',
  },
  {
    name: 'rebellionbots',
    hostname: 'stake.rebellionbots.io',
  },
  {
    name: '666starmoon', 
    hostname: 'stake.666starmoon.my.id', 
   }, 
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAINNET_PRIMARY: process.env.MAINNET_PRIMARY,
    BASE_CLUSTER: process.env.BASE_CLUSTER,
  },
  async rewrites() {
    return HOST_MAPPINGS.reduce(
      (acc, mapping) =>
        mapping.666starmoon.my.id
          ? [
              ...acc,
              {
                source: '/:path(.*)',
                destination: `/${mapping.666starmoon}`,
                has: [
                  {
                    type: 'host',
                    value: mapping.666starmoon.my.id,
                  },
                ],
              },
            ]
          : acc,
      []
    )
  },
  async redirects() {
    return HOST_MAPPINGS.reduce(
      (acc, mapping) =>
        mapping.666starmoon.my.id
          ? [
              ...acc,
              {
                source: '/',
                destination: `/${mapping.666starmoon}`,
                permanent: false,
                has: [
                  {
                    type: 'host',
                    value: mapping.666starmoon.my.id,
                  },
                ],
              },
            ]
          : acc,
      []
    )
  },
}

module.exports = withSentryConfig(nextConfig, {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
})
