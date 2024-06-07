"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <nav className="flex bg-bg-black p-4 items-center justify-between">
      <Link href='/' className="flex gap-2 items-center">
        <Image src="/favicon.ico" alt="logo" width={36} height={36} />
        <div className="text-white text-3xl">FOSSCU</div>
      </Link>
      <div className="hidden lg:flex gap-12">
        <Link href='/' className="text-white text-lg hover:text-custom-green">Home</Link>
        <Link href='/about' className="text-white text-lg hover:text-custom-green">About</Link>
        <Link href='/team' className="text-white text-lg hover:text-custom-green">Team</Link>
        <Link href='/contact' className="text-white text-lg hover:text-custom-green">Contact</Link>
        <Link href='/shipyard' className="text-white text-lg hover:text-custom-green">Shipyard</Link>
        <button className="hover:text-custom-green flex items-center  text-white ">
              <span className="mr-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
            </span>
            <span>More</span>
          </button>
            
      </div>
      
      <div className='hidden lg:flex'>
        <button className='px-7 py-3 bg-custom-green-gradient rounded-full text-white hover:opacity-50 lg:flex items-center'>Join Us</button>
      </div>
      
      <button className="p-2 lg:hidden" onClick={handleMenu}>
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </button>
        
      <div className={`fixed bg-bg-black text-white m-0 inset-0 h-fit pl-4 pr-4 pt-4 z-20 lg:hidden ${menu ? '' : 'hidden'}`}>
        <div className="flex justify-between">
          <Link href='/' className="flex gap-2 items-center">
            <Image src="/favicon.ico" alt="logo" width={48} height={48} className="object-cover max-w-12 max-h-12" />
            <span className="text-3xl">FOSSCU</span>
          </Link>
          <button className="p-2 lg:hidden" onClick={handleMenu}>
            <FontAwesomeIcon icon={faXmark} className="text-white" />
          </button>
        </div>
        <div className="mt-6">
          <Link href='/' className="font-medium hover:text-custom-green p-3 m-3 hover:bg-gray-800 block rounded-lg">Home</Link>
          <Link href='/about' className="font-medium hover:text-custom-green p-3 m-3 hover:bg-gray-800 block rounded-lg">About</Link>
          <Link href='/team' className="font-medium hover:text-custom-green p-3 m-3 hover:bg-gray-800 block rounded-lg">Team</Link>
          <Link href='/contact' className="font-medium hover:text-custom-green p-3 m-3 hover:bg-gray-800 block rounded-lg">Contact</Link>
          <Link href='/shipyard' className="font-medium hover:text-custom-green p-3 m-3 hover:bg-gray-800 block rounded-lg">Shipyard</Link>
          <Link href='/' className="font-medium hover:text-custom-green p-3 m-3 hover:bg-gray-800 block rounded-lg">More</Link>
        </div>
      </div>
    </nav>
  );
}
