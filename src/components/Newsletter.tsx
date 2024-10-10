import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want Latest News of OSS World 🌍 ?
          </h1>
          <p>Sign up for our newsletter to stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='hover:bg-green-800 bg-[#0dff1c] w-[190px] h-[50px] rounded-md font-medium my-6 ml-4 py-3 px-6 text-black'>
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <a href='/privacypolicy'>
              <span className='text-[#00df9a] hover:underline hover:underline-offset-4'>
                Privacy Policy
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
