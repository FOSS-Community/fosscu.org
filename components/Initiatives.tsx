import React from "react";
import Image from "next/image";
import { developer, designer, students, creativeIndividual, conf1, Shipyard, openMic } from "@/assets";
import Card from "../components/ui/Card";

export default function Initiatives () {
  return (
    <div className="flex flex-col items-center justify-between gap-16 mb-16">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-center lg:py-6">We Include</h1>
      <div className="flex flex-col gap-10 justify-evenly text-center md:flex-row lg:flex-row text-3xl text-custom-gray2 font-bold">
        <div className="flex items-center justify-center lg:justify-start gap-3 lg:mb-0">
          <Image src={developer} alt="developer" width={20} height={20} style={{ width: "auto", height: "auto" }} />
          <h2 className="text-sm lg:text-3xl">Developers</h2>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-3 lg:mb-0">
          <Image src={designer} alt="designer" width={20} height={20} style={{ width: "auto", height: "auto" }} />
          <h2 className="text-sm lg:text-3xl">Designers</h2>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-3 lg:mb-0">
          <Image src={students} alt="student" width={20} height={20} style={{ width: "auto", height: "auto" }} />
          <h2 className="text-sm lg:text-3xl">Students</h2>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-3 lg:mb-0">
          <Image src={creativeIndividual} alt="creativeIndividual" width={20} height={20} style={{ width: "auto", height: "auto" }} />
          <h2 className="text-sm lg:text-3xl">Creative Individuals</h2>
        </div>
      </div>
      <div className="flex justify-center p-4 lg:p-0" style={{ maxWidth: '600px' }}>
        <div className="text-center text-white font-bold rounded-3xl px-10 py-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
          <p className="lg:text-3xl md:text-2xl sm:text-lg">
            We aim to provide a space for students to develop their skills, collaborate with like-minded
            individuals, and contribute to FOSS projects. The community welcomes anyone who is
            interested in FOSS, regardless of their background or skill level.
          </p>
        </div>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-center py-6">What we do?</h1>
      <div className="flex flex-col items-center px-10 gap-10 lg:flex-row justify-evenly">
        <Card
          title="FOSSConf"
          description="Annual open source conference organized by FOSSCU."
          imageUrl={conf1.src}
        />
        <Card
          title="Shipyard"
          description="Build and ship every other weekend with us. Just Ship it 🚀🚀🚀"
          imageUrl={Shipyard.src}
        />
        <Card
          title="Open-mic"
          description="We host Open-mic sessions every other weekend at FOSSCU-K."
          imageUrl={openMic.src}
        />
      </div>
      <h1 className="text-2xl lg:text-3xl text-white text-center">and much more...</h1>
    </div>
  );
}
