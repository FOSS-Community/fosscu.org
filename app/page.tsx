export default function Home() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r cursor-grab from-[#2b422d] via-[#2d472f] to-gray-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Under Construction.
            <span className="sm:block"> FOSSCU-K</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-opacity-50 text-white">
            Free and Open Source Software Community University
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-full border border-[#2b422d] bg-[#2b422d] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://fosscu.org/"
              target="_blank"
            >
              Join Us
            </a>
            <a
              className="block w-full rounded-full border border-[#2b422d] px-12 py-3 text-sm font-medium text-white hover:bg-[#2b422d] focus:outline-none focus:ring active:bg-green-600 sm:w-auto"
              href="https://docs.fosscu.org/"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
