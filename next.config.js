module.exports = {
  future: {
    strictPostcssConfiguration: true
  },
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'avt.mkklcdnv6temp.com' // manganato manga covers
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)'
      }
    ];
  },
  webpack5: false,
  webpack: (config, { dev, isServer }) => {

    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};