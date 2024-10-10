import React from 'react';
import Navbar from '../components/Navbar';
import GitHubRepoCard from './GitHubRepoCard';
import Footer from '../components/Footer';

const Shipyard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto justify-center py-14">
        <h1 className="text-6xl mb-6 font-bold text-center text-opensource-green">
          ⚓ Shipyard
        </h1>
        <p className='text-2xl mb-6 font-bold text-center text-white py-4'>
          Check out some of the cool projects built by our community members 💚.
        </p>
        <div className="flex flex-wrap justify-center gap-12 py-4">
          <GitHubRepoCard repoUrl="https://api.github.com/repos/fOSS-Community/quickfire" />
          <GitHubRepoCard repoUrl="https://api.github.com/repos/SAMAD101/Chino" />
          <GitHubRepoCard repoUrl="https://api.github.com/repos/YashRaj1506/djangocraft_cli" />
          <GitHubRepoCard repoUrl="https://api.github.com/repos/codecShivam/TSDiffTool" />
          <GitHubRepoCard repoUrl="https://api.github.com/repos/FOSS-Community/LinkLiberate" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipyard;
