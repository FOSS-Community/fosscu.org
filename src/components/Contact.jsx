import React, { useState } from "react";
import {
  FaDiscord,
  FaReddit,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaNetworkWired,
} from "react-icons/fa";
import Airtable from "airtable";

const SECRET_API_TOKEN = process.env.REACT_APP_AIRTABLE_SECRET_API_TOKEN;
const BASE_ID = process.env.REACT_APP_BASE_ID;

// const base = new Airtable({ apiKey: SECRET_API_TOKEN }).base(BASE_ID);
let base;

try {
  if (!SECRET_API_TOKEN) {
    throw new Error("Airtable API token is not defined.");
  }
  if (!BASE_ID) {
    throw new Error("Airtable Base ID is not defined.");
  }

  base = new Airtable({ apiKey: SECRET_API_TOKEN }).base(BASE_ID);
} catch (error) {
  console.error("Error initializing Airtable:", error.message);
}

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await base("Table 1").create([
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Message: data.message,
          },
        },
      ]);
      setSuccess("Your message has been sent successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Error:", err);
      setError("There was an error processing your request.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
      setData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <div>
      <section className="text-gray-400 bg-gray-1000 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto mb-8">
            <div className="flex justify-center md:space-x-12 lg:space-x-14 xl:space-x-20 space-x-6">
              <div className="w-12 h-10 flex flex-col items-center">

                <a href="https://discord.com/invite/4xruwjjU9B" target="discord">
                  <FaDiscord className="hover:fill-current hover:text-[#0DFF1C] hover:w-12" size={40} />
                </a>
              </div>
              <div className="w-12 h-10 flex flex-col items-center">
                <a href="https://www.reddit.com/r/fosscu/" target="discord">
                  <FaReddit className="hover:fill-current hover:text-[#0DFF1C] hover:w-12" size={40} />
                </a>
              </div>
              <div className="w-12 h-10 flex flex-col items-center">
                <a href="Mailto:fosscu@gmail.com" target="mail">
                  <FaEnvelope className="hover:fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10" size={35} />
                </a>
              </div>
              <div className="w-12 h-10 flex flex-col items-center">
                <a href="https://www.linkedin.com/company/fosscu/" target="linkedin">
                  <FaLinkedin className="fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10" size={35} />
                </a>
              </div>
              <div className="w-12 h-10 flex flex-col items-center">
                <a href="https://twitter.com/fosscuk" target="twitter">
                  <FaTwitter className="fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10" size={35} />
                </a>
              </div>
              <div className="w-12 h-10 flex flex-col items-center">
                <a href="https://matrix.to/#/#fosscu:matrix.org" target="Matrix">
                  <FaNetworkWired className="fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10" size={35} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={(e) => submit(e)}>
              <div className="p-2 w-1/2">
                <div className="">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => handle(e)}
                    value={data.name}
                    className="w-full bg-gray-800 hover:outline-2 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => handle(e)}
                    value={data.email}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => handle(e)}
                    value={data.message}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto tracking-tight font-semibold text-black bg-[#00ff11c4] border-0 py-2 px-8 focus:outline-none hover:bg-[#0dff1c] rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
            <div className="py-6 text-center font-semibold">
              {loading && <p className="text-white">Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
