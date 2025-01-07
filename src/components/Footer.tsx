"use client";
import Link from 'next/link';

export const Footer = () => {
  const footerLinks = {
    community: [
      { name: "Join Us", href: "https://dub.sh/fosscu", isExternal: true },
      { name: "Contribute", href: "https://github.com/FOSS-Community", isExternal: true },
      { name: "Core Values", href: "https://docs.fosscu.org/docs/values", isExternal: true },
      { name: "Code of Conduct", href: "https://docs.fosscu.org/docs/code-of-conduct", isExternal: true },
    ],
    resources: [
      { name: "Docs", href: "https://docs.fosscu.org", isExternal: true },
      { name: "Guides", href: "https://github.com/FOSS-Community", isExternal: true },
      { name: "Blog", href: "https://github.com/FOSS-Community/blog-archive", isExternal: true },
      { name: "FAQ", href: "/faq", isExternal: false },
    ],
    about: [
      { name: "About Us", href: "/about", isExternal: false },
      { name: "What is FOSS", href: "https://docs.fosscu.org/docs/getting-started", isExternal: true },
      { name: "API Status", href: "https://www.kuma.fosscu.org/status/fosscu", isExternal: true },
      { name: "Terms", href: "/terms", isExternal: false },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/FOSS-Community", isExternal: true },
      { name: "Twitter", href: "https://x.com/fosscuk", isExternal: true },
      { name: "Discord", href: "https://dub.sh/fosscu", isExternal: true },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/fosscu/", isExternal: true },
    ],
  };

  const renderLink = (link: { name: string; href: string; isExternal: boolean }) => {
    if (link.isExternal) {
      return (
        <a 
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          {link.name}
        </a>
      );
    }
    return (
      <Link href={link.href} className="hover:text-white">
        {link.name}
      </Link>
    );
  };

  return (
    <footer className="relative z-[10] py-12 bg-black/[0.96] dark:bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About FOSSCU</h3>
            <p className="text-gray-400">
              Free and Open Source Software Community United.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-2 text-gray-400">
                {links.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FOSSCU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};