/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'fastly.picsum.photos',
      'imagegenerations.s3.amazonaws.com'
    ]
  }
}

module.exports = nextConfig
