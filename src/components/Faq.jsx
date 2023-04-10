import React from "react";


import {
  FaQuestionCircle,
} from 'react-icons/fa';

const Faq = () => {
  return (
    <section className="">
      <div className="text-center mb-8 text-4xl  tracking-tight font-extrabold text-white ">
        <h1 className="pt-20 pb-9 ">Welcome to <span className=" animate-pulse duration-300 text-[#0dff1c]">FOSSCU!</span></h1>
        <div>
          <h2 className="pb-2">How can we help you?</h2>
        </div>
        <div className="flex justify-center ">

        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl ">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white">Frequently asked questions</h2>
        <div className="grid md:grid-cols-2  pt-8 text-left border-t  gap-14 border-gray-700 ">
          <div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className=" items-center mb-4 text-lg font-medium  text-white">
                  What do you mean by "Open Source"?
                </h3>
                <p className="text-gray-400">Open source refers to a software development model in which the source code of a
                  program is made freely available to the public, allowing anyone to view, modify, and distribute the code
                  as they see fit.</p>
              </div>
            </div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="items-center mb-4 text-lg font-medium text-white">
                  How do I make my first contribution to an open source project?
                </h3>
                <p className="text-gray-400"> One common approach is to look for "good first issue" or "beginner-friendly"
                  labels on open issues, which can provide a good entry point for new contributors. <br />Feel free to <a
                    href="/contact"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">contact us</a>
                  and we'll help you out as soon as we can.</p>
              </div>
            </div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="tracking-tight items-center mb-4 text-lg font-medium text-white">
                  Can I contribute to an open source project even if I am not a developer?
                </h3>
                <p className="text-gray-400"> Yes, open source projects often need help with documentation, testing, design,
                  and other non-coding tasks. Check the project's documentation or contact the maintainers to see how you
                  can contribute.</p>
              </div>
            </div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="items-center cursor-  mb-4 text-lg font-medium text-white">
                  What is the open source community?
                </h3>
                <p className="text-gray-400">The open source community is a group of individuals and organizations that
                  collaborate on the development and maintenance of open source software. <br />The community is typically
                  characterized by a spirit of collaboration, transparency, and openness.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="items-center mb-4 tracking-tight text-lg font-medium text-white">
                  What are some benefits of being part of the open source community?
                </h3>
                <p className="text-gray-400">The opportunity to collaborate with like-minded individuals, build your skills
                  and
                  experience in software development, and make meaningful contributions to important software projects. <a
                    href="https://fosscu.org/" className="font-medium underline  hover:no-underline">Join us </a> now. </p>
              </div>
            </div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="items-center mb-4 text-lg font-medium text-white">
                  How can I get involved in the open source community?
                </h3>
                <p className="text-gray-400"> There are many ways to get involved in the open source community, including
                  contributing to open source projects, attending events and conferences, participating in online forums
                  and
                  discussion groups, and joining open source communities on social media platforms.</p>
              </div>
            </div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="items-center mb-4 text-lg font-medium text-white">
                  What are some ways to contribute to open source projects?
                </h3>
                <p className="text-gray-400"> Some ways to contribute to open source projects include submitting bug reports,
                  suggesting new features, creating documentation, writing code, improving existing code, providing
                  feedback
                  on issues, or helping with community management.</p>
              </div>
            </div>
            <div className="flex">
              <span className="mr-1 mt-1">
                <FaQuestionCircle size={18} color="#0dff1c" />
              </span>
              <div className="mb-10">
                <h3 className="items-center mb-4 text-lg font-medium text-white">
                  What is a pull request in open source contribution?
                </h3>
                <p className="text-gray-400"> A pull request is a proposed change to the codebase of an open source project
                  that
                  is submitted by a contributor for review and potential inclusion in the project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Faq;