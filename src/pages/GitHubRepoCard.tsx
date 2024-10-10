import React, { useState, useEffect } from 'react';

interface RepoData {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface GitHubRepoCardProps {
  repoUrl: string;
}

const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({ repoUrl }) => {
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    fetch(repoUrl)
      .then(response => response.json())
      .then(data => setRepoData(data))
      .catch(error => console.error('Error fetching repository data:', error));
  }, [repoUrl]);

  return (
    <div className="w-72 h-54 rounded-lg overflow-hidden shadow-lg bg-transparent border border-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out">
      {repoData && (
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col justify-between h-full">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">{repoData.name}</div>
              <p className="text-sm text-gray-300 mb-4">{repoData.description}</p>
            </div>
          </div>
          <div className="px-6 py-4 flex-col justify-between items-center">
            <div className="flex items-center">
              <img src={repoData.owner.avatar_url} alt="Owner Avatar" className="w-6 h-6 rounded-full mr-2" />
              <p className="text-sm text-gray-300">{repoData.owner.login}</p>
            </div>
            <div className='flex justify-between my-2'>
              <p className="text-sm text-gray-300">Language: {repoData.language}</p>
              <p className="text-sm text-gray-300">Stars: {repoData.stargazers_count}</p>
            </div>
          </div>
          <div className="px-6 pb-4">
            <a href={repoData.html_url} className="text-sm text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default GitHubRepoCard;
