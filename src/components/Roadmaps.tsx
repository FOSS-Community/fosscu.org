import React from "react";

interface RoadmapsProps {
  head: string;
  para1: string;
  para2: string;
  para3: string;
  link?: string;
  videoLink?: string;
}

const Roadmaps: React.FC<RoadmapsProps> = (props) => {
  return (
    <div>
      <div className="details-section z-10 lg:ml-80 ">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg sm:text-lg text-gray-100">
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
                className="inline-flex items-center font-medium hover:underline hover:text-primary-800 text-primary-700"
              >
                Learn more
                <svg
                  className="ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            {props.videoLink ? (
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
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Roadmaps;
