import bgImg from "@/assets/Frame 1000005985.png";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bgImg.src}
          alt="bg img"
          className="hidden object-cover scale-125 sm:scale-150 md:block lg:block"
        />
      </div>
      <div className="flex-col text-center text-white z-10 mb-20 px-10">
        <div className="flex justify-end">
        <div className="hidden lg:flex bg-custom-green text-black p-1 px-4 text-sm rounded-tl-full rounded-tr-full rounded-br-full hover:opacity-50">Wanna open a local chapter at your uni?</div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Welcome to FOSSCU</h1>
        <p className="text-xl mb-8 text-custom-gray">We are a community of students, developers, designers, and other creative individuals who are passionate about promoting the <br />use and development of Free and Open Source Software.</p>
        <div className="flex gap-4">
          <div className="flex items-center justify-center flex-grow">
            <div className="flex gap-4 items-center justify-center">
            <button className="px-7 py-3 bg-custom-green-gradient rounded-full text-white transition-opacity hover:opacity-50">Join Us</button>
            <button className='border-white border-2 px-7 py-3 rounded-full text-white transition-opacity hover:opacity-50'>Learn More</button>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="hidden lg:flex bg-custom-green text-black p-1 px-4 text-sm rounded-tl-full rounded-bl-full rounded-br-full hover:opacity-50">Are you here from FOSSConf?</div>
        </div>
      </div>
    </div>
  );
}
