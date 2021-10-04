const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['finishlines.se', '2.gravatar.com', 'headless-wordpress-silk.vercel.app']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)