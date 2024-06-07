import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={`flex grow-0 flex-col gap-4 max-w-xs h-96 text-white rounded-3xl overflow-hidden shadow-lg p-4 ${title === 'Shipyard' ? 'lg:mt-24' : ''}`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
     <img className="w-full" src={imageUrl} alt={title} />
      <div className="flex flex-col gap-2">
        <div className="font-bold text-3xl">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div>
        <button className='bg-black text-white rounded-3xl p-6 py-4 hover:opacity-50'>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
