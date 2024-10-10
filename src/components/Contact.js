import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaDiscord, FaReddit, FaLinkedin, FaEnvelope, FaTwitter, FaNetworkWired, } from "react-icons/fa";
import Airtable from "airtable";
// Ensure that your environment variables are correctly typed
const SECRET_API_TOKEN = process.env.REACT_APP_AIRTABLE_SECRET_API_TOKEN || '';
const BASE_ID = process.env.REACT_APP_BASE_ID || '';
const base = new Airtable({ apiKey: SECRET_API_TOKEN }).base(BASE_ID);
const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    // Type the event parameter
    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    };
    const submit = async (e) => {
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
        }
        catch (err) {
            console.error("Error:", err);
            setError("There was an error processing your request.");
            setTimeout(() => setError(""), 3000);
        }
        finally {
            setLoading(false);
            setData({
                name: "",
                email: "",
                message: "",
            });
        }
    };
    return (_jsx("div", { children: _jsx("section", { className: "text-gray-400 bg-gray-1000 body-font", children: _jsxs("div", { className: "container px-5 py-10 mx-auto", children: [_jsxs("div", { className: "flex flex-col text-center w-full mb-12", children: [_jsx("h1", { className: "sm:text-3xl text-2xl font-medium title-font mb-4 text-white", children: "Contact Us" }), _jsx("p", { className: "lg:w-2/3 mx-auto leading-relaxed text-base" })] }), _jsx("div", { className: "lg:w-1/2 md:w-2/3 mx-auto mb-8", children: _jsxs("div", { className: "flex justify-center md:space-x-12 lg:space-x-14 xl:space-x-20 space-x-6", children: [_jsx("div", { className: "w-12 h-10 flex flex-col items-center", children: _jsx("a", { href: "https://discord.com/invite/4xruwjjU9B", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaDiscord, { className: "hover:fill-current hover:text-[#0DFF1C] hover:w-12", size: 40 }) }) }), _jsx("div", { className: "w-12 h-10 flex flex-col items-center", children: _jsx("a", { href: "https://www.reddit.com/r/fosscu/", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaReddit, { className: "hover:fill-current hover:text-[#0DFF1C] hover:w-12", size: 40 }) }) }), _jsx("div", { className: "w-12 h-10 flex flex-col items-center", children: _jsx("a", { href: "mailto:fosscu@gmail.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaEnvelope, { className: "hover:fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10", size: 35 }) }) }), _jsx("div", { className: "w-12 h-10 flex flex-col items-center", children: _jsx("a", { href: "https://www.linkedin.com/company/fosscu/", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaLinkedin, { className: "fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10", size: 35 }) }) }), _jsx("div", { className: "w-12 h-10 flex flex-col items-center", children: _jsx("a", { href: "https://twitter.com/fosscuk", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaTwitter, { className: "fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10", size: 35 }) }) }), _jsx("div", { className: "w-12 h-10 flex flex-col items-center", children: _jsx("a", { href: "https://matrix.to/#/#fosscu:matrix.org", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaNetworkWired, { className: "fill-current hover:text-[#0DFF1C] hover:w-12 hover:h-10", size: 35 }) }) })] }) }), _jsxs("div", { className: "lg:w-1/2 md:w-2/3 mx-auto", children: [_jsxs("form", { className: "flex flex-wrap -m-2", onSubmit: submit, children: [_jsx("div", { className: "p-2 w-1/2", children: _jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "leading-7 text-sm text-gray-400", children: "Name" }), _jsx("input", { type: "text", id: "name", onChange: handle, value: data.name, className: "w-full bg-gray-800 hover:outline-2 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" })] }) }), _jsx("div", { className: "p-2 w-1/2", children: _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "leading-7 text-sm text-gray-400", children: "Email" }), _jsx("input", { type: "email", id: "email", onChange: handle, value: data.email, className: "w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" })] }) }), _jsx("div", { className: "p-2 w-full", children: _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "leading-7 text-sm text-gray-400", children: "Message" }), _jsx("textarea", { id: "message", onChange: handle, value: data.message, className: "w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-[#0dff1c] focus:bg-gray-900 focus:ring-2 focus:ring-[#0dff1c] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" })] }) }), _jsx("div", { className: "p-2 w-full", children: _jsx("button", { className: "flex mx-auto tracking-tight font-semibold text-black bg-[#00ff11c4] border-0 py-2 px-8 focus:outline-none hover:bg-[#0dff1c] rounded text-lg", children: "Submit" }) })] }), _jsxs("div", { className: "py-6 text-center font-semibold", children: [loading && _jsx("p", { className: "text-white", children: "Loading..." }), error && _jsx("p", { className: "text-red-500", children: error }), success && _jsx("p", { className: "text-green-500", children: success })] })] })] }) }) }));
};
export default Contact;
