import React, { useState } from "react";

// Define the type for the props
interface HTML_CSSProps {
  head: string;
  para1: string;
  para2: string;
  para3: string;
  link?: string;
  videoLink?: string;
}

const HTML_CSS: React.FC<HTML_CSSProps> = (props) => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
          <div className="max-w-screen-xl sm:text-lg text-gray-100">
            <h2 className="text-4xl mb-12 tracking-tight font-bold text-white">
              {props.head}
            </h2>
            <p className="mb-4">{props.para1}</p>
            <p className="mb-4">{props.para2}</p>
            <p className="mb-4 font-medium">{props.para3}</p>
            <a
              href={props.link ? props.link : props.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium hover:underline text-sky-400"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
            <br />
            <br />
            {props.videoLink && (
              <button
                onClick={() => setCheck((prev) => !prev)}
                className="bg-[green] hover:bg-[#00df9a] duration-[200ms] text-white font-bold py-2 px-4 rounded"
              >
                {check ? "Hide video" : "Load video"}
              </button>
            )}
          </div>
          {check && props.videoLink && (
            <div className="aspect-video flex flex-col items-start mt-6">
              <iframe
                className="rounded-lg w-full h-full"
                src={props.videoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HTML_CSS;
