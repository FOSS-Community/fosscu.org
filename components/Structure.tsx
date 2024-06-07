export default function Structure() {
    return (
      <div className="flex flex-col items-center justify-between gap-16 mb-10">
        <h1 className="text-5xl font-bold text-white text-center py-6 px-3 sm:text-3xl">The Community Structure</h1>
        <div className="flex justify-center">
          <div className="flex flex-col gap-20 rounded-t-3xl lg:px-40 pt-10 text-center text-black text-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
            <h1 className="p-2 lg:text-3xl font-bold text-white text-center">“with great power, comes great <br /> responsibilities”</h1>
            <div className="px-4 py-4 flex justify-center items-end lg:gap-20 sm:gap-4 gap-4">
              <div className="flex justify-center items-center w-20 h-40 bg-custom-yellow lg:w-20 lg:h-40 sm:w-16 sm:h-32">Learner</div>
              <div className="flex justify-center items-center w-20 h-80 bg-custom-yellow lg:w-20 lg:h-80 sm:w-16 sm:h-64">Maintainer</div>
              <div className="flex justify-center items-center w-20 h-60 bg-custom-yellow lg:w-20 lg:h-60 sm:w-16 sm:h-48">Contributor</div>
          </div>
          </div>
        </div>
        <a href="/docs" className="text-center text-white text-lg">Read our docs for a much detailed information.</a>
        <div className="flex flex-col gap-10 text-center lg:flex-row p-4 justify-evenly items-center">
            <div>
                <h1 className="text:xl lg:text-3xl text-white">Want Latest News of OSS World 🌍 ?</h1>
                <h2 className="text-xl lg:text-3xl text-white">Sign up for our newsletter to stay up to date.</h2>
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
  