import Link from 'next/link';
import Image from 'next/image';

export default function Navbar () {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex flex-row gap-6 items-center'>
          <Image src="/favicon.ico" alt="logo" width={36} height={36} />
          <div className="text-white text-3xl">FOSSCU</div>
        </div>
        <div className='flex items-center gap-10'>
            <ul className="flex space-x-4 gap-10 items-center">
                <li>
                    <Link href="/" className="text-white text-lg hover:text-custom-green">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white text-lg hover:text-custom-green">About</Link>
                </li>
                <li>
                    <Link href="/team" className="text-white text-lg hover:text-custom-green">Team</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white text-lg hover:text-custom-green">Contact</Link>
                </li>
                <li>
                    <Link href="/shipyard" className="text-white text-lg hover:text-custom-green">Shipyard</Link>
                </li>
                <li>
                    <Link href="/" className="text-white text-lg hover:text-custom-green">More</Link>
                </li>
            </ul>
            <button className='px-7 py-3 bg-custom-green-gradient rounded-full text-white hover:opacity-50'>Join Us</button>
        </div>
      </div>
    </nav>
  );
};
