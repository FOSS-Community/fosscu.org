import React from 'react'

const Contact = () => {
  return (
    <section class="text-gray-400 bg-gray-1000 body-font relative">
      <div className='absolute z-[0] w-[60%] h-[75%] top-40 pink__gradient' />
      {/* <div className='absolute z-[1] w-[80%] h-[10%] rounded-full bottom-40 white__gradient' /> */}
      <div className='absolute z-[0] w-[50%] h-[90%] right-20 bottom-20 top-20 blue__gradient' />
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#00FF00]">Contact Us</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Leave us a message. We will get back to you as soon as possible.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-lime-500 focus:bg-gray-900 focus:ring-2 focus:ring-lime-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-lime-500 focus:bg-gray-900 focus:ring-2 focus:ring-lime-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                <textarea id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-lime-500 focus:bg-gray-900 focus:ring-2 focus:ring-lime-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-black bg-[#CCFFCC] border-0 py-2 px-8 focus:outline-none rounded text-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
