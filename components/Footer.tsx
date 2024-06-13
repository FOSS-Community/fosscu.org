import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-custom-green">FOSSCU</h1>
        <p className="py-4">Made with 💚 and Open Source</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://www.instagram.com/fosscu/" className="transition duration-300 ease-in-out hover:scale-125" target="blank">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/fosscuk" className="transition duration-300 ease-in-out hover:scale-125" target="blank">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://github.com/FOSS-Community/" className="transition duration-300 ease-in-out hover:scale-125" target="blank">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://linkedin.com/company/fosscu/" className="transition duration-300 ease-in-out hover:scale-125" target="blank">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div className="px-2 text-sm md:text-base lg:text-lg">
          <h6 className="font-medium text-custom-green">Support</h6>
          <ul>
            <li className="pt-2 hover:border-b hover:border-green-400">
              <a href="/building" className="pb-2">Documentation</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-green-400">
              <a href="/guide" className="pb-2">Guides</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-green-400">
              <a href="https://www.kuma.fosscu.org/status/fosscu" className="pb-2">API Status</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-green-400">
              <a href="/faq" className="pb-2">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="px-2 text-sm md:text-base lg:text-lg">
          <h6 className="font-medium text-custom-green">Organization</h6>
          <ul>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="/about" className="pb-2">About</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="https://github.com/FOSS-Community/blog-archive" className="pb-2" target="blank">Blog</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="https://dub.sh/fosscu-discord" className="pb-2" target="blank">Join Us</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="https://github.com/FOSS-Community/" className="pb-2" target="blank">Contribute</a>
            </li>
          </ul>
        </div>
        <div className="px-2 text-sm md:text-base lg:text-lg">
          <h6 className="font-medium text-custom-green">Handbook</h6>
          <ul>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="https://docs.fosscu.org/Docs/values" className="pb-2" target="blank">Core Values</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="https://docs.fosscu.org/Docs/code-of-conduct" className="pb-2" target="blank">Code of Conduct</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="https://docs.fosscu.org/Docs/getting-started" className="pb-2" target="blank">What is FOSS</a>
            </li>
            <li className="pt-2 hover:border-b hover:border-custom-green">
              <a href="/building" className="pb-2">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
