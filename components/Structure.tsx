export default function Structure() {
    return (
      <div className="flex flex-col items-center justify-between gap-16 mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-white text-center py-6 px-3">The Community Structure</h1>
        <div className="flex justify-center">
        <div className="flex flex-col gap-20 rounded-t-3xl lg:px-40 pt-10 text-center text-black text-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
          <h1 className="p-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">“with great power, comes great <br /> responsibilities”</h1>
          <div className="px-4 py-4 flex justify-center items-end gap-4 mb-0 pb-0 sm:gap-6 md:gap-10 lg:gap-20">
            <div className="flex justify-center items-center px-2 h-20 sm:h-32 md:h-36 lg:h-40 bg-custom-yellow w-20 sm:w-24 md:w-28 lg:w-32">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">Learner</span>
            </div>
            <div className="flex justify-center items-center px-2 h-40 sm:h-64 md:h-72 lg:h-80 bg-custom-yellow w-20 sm:w-24 md:w-28 lg:w-32">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">Maintainer</span>
            </div>
            <div className="flex justify-center items-center px-2 h-32 sm:h-48 md:h-56 lg:h-60 bg-custom-yellow w-20 sm:w-24 md:w-28 lg:w-32">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">Contributor</span>
            </div>
          </div>
        </div>
        </div>
        <a href="/docs" className="text-center text-white text-lg">Read our docs for a much detailed information.</a>
        <div className="flex flex-col gap-10 text-center md:flex-row lg:flex-row p-4 justify-center items-center">
  <div>
    <h1 className="lg:text-3xl md:text-xl sm:text-lg text-white">Want Latest News of OSS World 🌍 ?</h1>
    <h2 className="lg:text-3xl md:text-xl sm:text-lg text-white">Sign up for our newsletter to stay up to date.</h2>
  </div>
  <div className="flex flex-col gap-2 text-center">
    <input type="text" placeholder="Enter Email" className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)'}} />
    <button className="bg-custom-green font-bold p-3 rounded-xl hover:opacity-50">Notify me</button>
    <p className="text-white">We care about the protection of your data. Read our <br />
      <a href="/privacy" className="underline">Privacy Policy.</a></p>
  </div>
</div>
      </div>
    );
  }
  