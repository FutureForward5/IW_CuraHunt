/** @type {import('next').nextconfig} */
const nextconfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["content.jdmagicbox.com", "drive.google.com"],
  },
};

module.exports = nextconfig;
