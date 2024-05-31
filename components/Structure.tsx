export default function Structure() {
    return (
      <div className="flex flex-col gap-16 mb-10">
        <h1 className="text-5xl font-bold text-white text-center py-6">The Community Structure</h1>
        <div className="flex justify-center">
          <div className="flex flex-col gap-20 px-40 pt-10 text-center text-black text-sm rounded-3xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
            <h1 className="text-3xl font-bold text-white text-center">“with great power, comes great <br /> responsibilities”</h1>
            <div className="flex justify-center items-end gap-20">
                <div className="flex justify-center items-center w-20 h-40 bg-custom-yellow">Learner</div>
                <div className="flex justify-center items-center w-20 h-80 bg-custom-yellow">Maintainer</div>
                <div className="flex justify-center items-center w-20 h-60 bg-custom-yellow">Contributor</div>
            </div>
          </div>
        </div>
        <a href="/docs" className="text-center text-white text-lg">Read our docs for a much detailed information.</a>
        <div className="flex justify-evenly items-center">
            <div>
                <h1 className="text-3xl text-white">Want Latest News of OSS World 🌍 ?</h1>
                <h2 className="text-lg text-white">Sign up for our newsletter to stay up to date.</h2>
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
  