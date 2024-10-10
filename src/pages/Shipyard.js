import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import GitHubRepoCard from './GitHubRepoCard';
import Footer from '../components/Footer';
const Shipyard = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs("div", { className: "mx-auto justify-center py-14", children: [_jsx("h1", { className: "text-6xl mb-6 font-bold text-center text-opensource-green", children: "\u2693 Shipyard" }), _jsx("p", { className: 'text-2xl mb-6 font-bold text-center text-white py-4', children: "Check out some of the cool projects built by our community members \uD83D\uDC9A." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-12 py-4", children: [_jsx(GitHubRepoCard, { repoUrl: "https://api.github.com/repos/fOSS-Community/quickfire" }), _jsx(GitHubRepoCard, { repoUrl: "https://api.github.com/repos/SAMAD101/Chino" }), _jsx(GitHubRepoCard, { repoUrl: "https://api.github.com/repos/YashRaj1506/djangocraft_cli" }), _jsx(GitHubRepoCard, { repoUrl: "https://api.github.com/repos/codecShivam/TSDiffTool" }), _jsx(GitHubRepoCard, { repoUrl: "https://api.github.com/repos/FOSS-Community/LinkLiberate" })] })] }), _jsx(Footer, {})] }));
};
export default Shipyard;
