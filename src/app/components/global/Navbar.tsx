'use client'

import { useState, useEffect } from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const location:string = usePathname(); // Get the current path
  const [active, setActive] = useState('home'); // Track which page is active

  useEffect(() => {
    // Automatically set the active state based on the current path
    if (location === '/') {
      setActive('home');
    } else if (location === '/roompage') {
      setActive('rooms');
    } else if (location === '/contact') {
      setActive('contact');
    }
  }, [location]); // Dependency on location changes

  if (location === '/admin') 
    return;
  return (
    <nav className="absolute w-full bg-transparent z-30 mt-[3.5rem] px-16 ">
      <div className="container mx-auhref flex justify-end items-center px-6">
        <ul className={`flex space-x-6  text-white  items-center`}>
          <li>
            <Link
              href="/"
              className={`hover:text-gray-300 ${location === '/' ?  'text-white' : 'text-black'} ${active === 'home' && 'active' }`}
              onClick={() => setActive('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/roompage"
              className={`hover:text-gray-300 ${location === '/' ? 'text-white' : 'text-black'} ${active === 'rooms' && 'active' }`}
              onClick={() => setActive('rooms')}
            >
              Rooms & Halls
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-gray-300 ${location === '/' ? 'text-white' : 'text-black'} ${active === 'contact' && 'active' }`}
              onClick={() => setActive('contact')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <div className='flex bg-black border-white px-3 py-[6px] font-bold rounded'>
              <Link className="flex  justify-center items-center" href="/signin"><samp> Sign In&nbsp;</samp><IoPersonCircle size={24} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {/* Using Styled jsx library  */}
      {/* it doesn't work, maybe use slider? */}
      <style jsx>{`
        .active {
          position: relative;
        }
        .active::after {
          content: '';
          position: absolute;
          left: -3px;
          bottom: -2px;
          width: 115%;
          height: 2px;
          background-color: ${location === '/' ? 'white' : 'black'}; /* Change color based on path */
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
