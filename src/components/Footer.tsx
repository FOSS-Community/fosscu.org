import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">FOSSCU</h1>
        <p className="py-4">Made with 💚 and Open Source</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.instagram.com/fosscu/"
            className="transition duration-300 ease-in-out hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com/fosscuk"
            className="transition duration-300 ease-in-out hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterFill size={30} />
          </a>
          <a
            href="https://github.com/FOSS-Community/"
            className="transition duration-300 ease-in-out hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://linkedin.com/company/fosscu/"
            className="transition duration-300 ease-in-out hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#00df9a]">Support</h6>
          <ul>
            <a href="/building" className="pb-2">
              <li className="pt-2 text-sum hover:border-b hover:border-green-400">
                Documentation
              </li>
            </a>
            <a href="/guide" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Guides
              </li>
            </a>
            <a
              href="https://www.kuma.fosscu.org/status/fosscu"
              className="pb-2"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                API Status
              </li>
            </a>
            <a href="/faq" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                FAQ
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Organization</h6>
          <ul>
            <a href="/about" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                About
              </li>
            </a>
            <a
              href="https://github.com/FOSS-Community/blog-archive"
              className="pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Blog
              </li>
            </a>
            <a
              href="https://dub.sh/fosscu-discord"
              className="pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Join Us
              </li>
            </a>
            <a
              href="https://github.com/FOSS-Community/"
              className="pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Contribute
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Handbook</h6>
          <ul>
            <a
              href="https://docs.fosscu.org/Docs/values"
              className="pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Core Values
              </li>
            </a>
            <a
              href="https://docs.fosscu.org/Docs/code-of-conduct"
              className="pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Code of Conduct
              </li>
            </a>
            <a
              href="https://docs.fosscu.org/Docs/getting-started"
              className="pb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                What is FOSS
              </li>
            </a>
            <a href="/building" className="pb-2">
              <li className="pt-2 w-max text-sum hover:border-b hover:border-green-400">
                Terms
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
