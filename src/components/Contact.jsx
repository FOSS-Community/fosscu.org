import React, { useState } from "react";
import axios from "axios";
import {
  FaDiscord,
  FaReddit,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaNetworkWired
} from 'react-icons/fa';

const Contact = () => {
  const url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    console.log("Submitting to:", url);
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
        alert("Thanks for inquiring, we will contact you shortly :)");
        setData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      });
  }

  return (
    <div>
      <section className="text-gray-400 bg-gray-1000 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto mb-8">
            <div className="flex justify-center md:space-x-12 lg:space-x-14 xl:space-x-20 space-x-6">
              <SocialIcon href="https://discord.com/invite/4xruwjjU9B" Icon={FaDiscord} />
              <SocialIcon href="https://www.reddit.com/r/fosscu/" Icon={FaReddit} />
              <SocialIcon href="Mailto:fosscu@gmail.com" Icon={FaEnvelope} />
              <SocialIcon href="https://www.linkedin.com/company/fosscu/" Icon={FaLinkedin} />
              <SocialIcon href="https://twitter.com/fosscuk" Icon={FaTwitter} />
              <SocialIcon href="https://matrix.to/#/#fosscu:matrix.org" Icon={FaNetworkWired} />
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={submit}>
              <InputField
                id="name"
                label="Name"
                value={data.name}
                onChange={handle}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                value={data.email}
                onChange={handle}
              />
              <TextArea
                id="message"
                label="Message"
                value={data.message}
                onChange={handle}
              />
              <div className="p-2 w-full">
                <button className="flex mx-auto tracking-tight font-semibold text-black bg-[#00ff11c4] border-0 py-2 px-8 focus:outline-none hover:bg-[#0dff1c] rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// ... (SocialIcon, InputField, and TextArea components remain the same)

export default Contact;