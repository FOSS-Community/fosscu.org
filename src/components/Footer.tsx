export const Footer = () => {
  const footerLinks = {
    community: [
      { name: "Join Us", href: "https://dub.sh/fosscu" },
      { name: "Contribute", href: "https://github.com/FOSS-Community" },
      { name: "Core Values", href: "https://docs.fosscu.org/docs/values" },
      { name: "Code of Conduct", href: "https://docs.fosscu.org/docs/code-of-conduct" },
    ],
    resources: [
      { name: "Docs", href: "https://docs.fosscu.org" },
      { name: "Guides", href: "https://github.com/FOSS-Community" },
      { name: "Blog", href: "https://github.com/FOSS-Community/blog-archive" },
      { name: "FAQ", href: "/faq" },
    ],
    about: [
      { name: "About Us", href: "/about" },
      { name: "What is FOSS", href: "https://docs.fosscu.org/docs/getting-started" },
      { name: "API Status", href: "https://www.kuma.fosscu.org/status/fosscu" },
      { name: "Terms", href: "/terms" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/FOSS-Community" },
      { name: "Twitter", href: "https://x.com/fosscuk" },
      { name: "Discord", href: "https://dub.sh/fosscu" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/fosscu/" },
    ],
  };

  return (
    <footer className="py-12 bg-black/[0.96] dark:bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About FOSSCU</h3>
            <p className="text-gray-400">
              Free and Open Source Software Community United.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FOSSCU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};