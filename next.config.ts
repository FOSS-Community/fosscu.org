import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'i.ibb.co',
      'res.cloudinary.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/hJ2utJX2j5',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/fosscuk',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://twitter.com/fosscuk',
        permanent: true,
      },
      {
        source: '/insta',
        destination: 'https://instagram.com/fosscu',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/fosscu',
        permanent: true,
      },
      {
        source: '/pastebin',
        destination: 'https://paste.fosscu.org/',
        permanent: true,
      },
      {
        source: '/fosscu-chapters',
        destination: 'https://airtable.com/appFI181bKZEl3uMz/pagsGmcR2dGne7qlJ/form',
        permanent: true,
      },
      {
        source: '/non-tech-fosscu',
        destination: 'https://airtable.com/appIZUCp0jbQIfGjy/pag283Ew6mnfIvLr7/form',
        permanent: true,
      },
      {
        source: '/wand/install.sh',
        destination: 'https://raw.githubusercontent.com/FOSS-Community/wand/refs/heads/main/install.sh',
        permanent: true,
      },
      {
        source: '/ginister/install.sh',
        destination: 'https://raw.githubusercontent.com/FOSS-Community/ginister/refs/heads/main/install.sh',
        permanent: true,
      },
      {
        source: '/tps',
        destination: 'https://github.com/Mr-Sunglasses/the-python-show',
        permanent: true,
      },
      {
        source: '/tps/feedback',
        destination: 'https://forms.gle/ZUEqDfacL6GAwubw9',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
