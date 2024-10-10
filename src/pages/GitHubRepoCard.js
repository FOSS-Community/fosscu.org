import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const GitHubRepoCard = ({ repoUrl }) => {
    const [repoData, setRepoData] = useState(null);
    useEffect(() => {
        fetch(repoUrl)
            .then(response => response.json())
            .then(data => setRepoData(data))
            .catch(error => console.error('Error fetching repository data:', error));
    }, [repoUrl]);
    return (_jsx("div", { className: "w-72 h-54 rounded-lg overflow-hidden shadow-lg bg-transparent border border-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out", children: repoData && (_jsxs("div", { className: "h-full flex flex-col justify-between", children: [_jsx("div", { className: "flex flex-col justify-between h-full", children: _jsxs("div", { className: "px-6 py-4", children: [_jsx("div", { className: "font-bold text-xl mb-2 text-white", children: repoData.name }), _jsx("p", { className: "text-sm text-gray-300 mb-4", children: repoData.description })] }) }), _jsxs("div", { className: "px-6 py-4 flex-col justify-between items-center", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: repoData.owner.avatar_url, alt: "Owner Avatar", className: "w-6 h-6 rounded-full mr-2" }), _jsx("p", { className: "text-sm text-gray-300", children: repoData.owner.login })] }), _jsxs("div", { className: 'flex justify-between my-2', children: [_jsxs("p", { className: "text-sm text-gray-300", children: ["Language: ", repoData.language] }), _jsxs("p", { className: "text-sm text-gray-300", children: ["Stars: ", repoData.stargazers_count] })] })] }), _jsx("div", { className: "px-6 pb-4", children: _jsx("a", { href: repoData.html_url, className: "text-sm text-blue-400 hover:underline", target: "_blank", rel: "noopener noreferrer", children: "View on GitHub" }) })] })) }));
};
export default GitHubRepoCard;
