"use client";
import React, { useState, useEffect, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/mail.json";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaDiscord, FaLinkedin, FaTwitter, FaNetworkWired } from "react-icons/fa";
import { BallTriangle } from "react-loading-icons";
import { handleInputChange, handleSubmit } from "./formUtils";

interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

const AirtableForm: React.FC = () => {
  const initialFormData: FormData = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isVisible, setVisible] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLottieLoaded, setLottieLoaded] = useState<boolean>(false);
  const apiKey = process.env.NEXT_PUBLIC_API_URL as string;

  const defaultOpt = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLottieLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(
        event as unknown as FormEvent<HTMLFormElement>,
        formData,
        setLoading,
        setVisible,
        setFormSubmitted,
        setFormData,
        initialFormData,
        apiKey
      );
    }
  };

  if (!isLottieLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-black">
        <BallTriangle className="text-white text-3xl" />
      </div>
    );
  }

  return (
    <div className="isolate flex flex-col px-6 py-18 sm:py-24 lg:px-8 sm:overflow-x-hidden">
      <div className="w-screen mx-44 text-center sm:mx-auto">
        <h1 className="my-20 text-4xl font-bold tracking-tight sm:text-5xl text-white text-center sm:text-center sm:my-0">
          Contact Us
        </h1>
      </div>
      <div className="flex my-36 absolute gap-24 flex-col p-12 justify-between items-center lg:flex-row sm:gap-6 lg:items-center sm:relative sm:my-0">
        <Lottie options={defaultOpt} height={380} width={500} />
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) =>
            handleSubmit(
              e,
              formData,
              setLoading,
              setVisible,
              setFormSubmitted,
              setFormData,
              initialFormData,
              apiKey
            )
          }
          className="mx-24 relative mt-2 max-w-2xl p-10 sm:mt-10 border-4 border-emerald-800 rounded-xl sm:mx-auto"
        >
          {isVisible && (
            <div className="inner-box">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      value={formData.Name}
                      autoComplete="Name"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, setFormData)}
                      onKeyDown={handleKeyDown}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-neutral-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-950 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      value={formData.Email}
                      autoComplete="email"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, setFormData)}
                      onKeyDown={handleKeyDown}
                      className="block w-full rounded-md border-0 px-3.5 py-2 bg-neutral-900 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-950 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="Message"
                      id="Message"
                      value={formData.Message}
                      rows={4}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e, setFormData)}
                      onKeyDown={handleKeyDown}
                      className="block w-full rounded-md border-0 px-3.5 py-2 bg-neutral-900 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-950 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 relative">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  {isLoading ? "Submitting" : "Let's talk"}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BallTriangle />
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
          {!isVisible && (
            <div className="success-box flex flex-col justify-center items-center">
              <div className="bg-white rounded-full w-5/12 object-cover mb-8 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#00bd1f"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </div>
              <p className="text-white text-2xl font-semibold mb-4">
                Form Submitted!
              </p>
            </div>
          )}
          <div className="mt-8 relative flex gap-12 justify-center">
            <Link
              href="https://discord.com/invite/4xruwjjU9B"
              className="hover:scale-125 transition ease-in-out"
              target="discord"
            >
              <FaDiscord className="size-14 hover:text-violet-500" />
            </Link>
            <Link
              href="Mailto:fosscu@gmail.com"
              className="hover:scale-125 transition ease-in-out"
              target="mail"
            >
              <IoMail className="size-14 hover:text-red-500" />
            </Link>
            <Link
              href="https://twitter.com/fosscuk"
              className="hover:scale-125 transition ease-in-out"
              target="twitter"
            >
              <FaTwitter className="size-12 hover:text-blue-400" />
            </Link>
            <Link
              href="https://matrix.to/#/#fosscu:matrix.org"
              className="hover:scale-125 transition ease-in-out"
              target="network"
            >
              <FaNetworkWired className="size-12 hover:text-pink-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fosscu/"
              className="hover:scale-125 transition ease-in-out"
              target="linkedin"
            >
              <FaLinkedin className="size-12 hover:text-blue-600" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AirtableForm;
