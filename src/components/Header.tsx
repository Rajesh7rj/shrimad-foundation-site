'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const navLinks = ['Register', 'Schedule', 'Gaam Celebrations', 'Laabhs', 'Reserve Your Stay'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <header  className="p-4 fixed w-full bg-[#631019] text-[#fff8e6] z-10">
      <div className="container mx-auto flex justify-between items-center">
      <a href="#">
        <img src="/icons/logo-light.png" alt="logo" className="w-[300px] h-[50px] c" />
      </a>

        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="block text-white hover:text-gray-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button className="lg:hidden block text-[#fff8e6]" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />}

      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-auto bg-[#8e2e37] shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <a href="#" onClick={() => setIsOpen(false)}>
            <img src="/icons/logo-light.png" alt="logo" className="w-[250px] h-[50px] mr-5 cursor-pointer" />
          </a>
          <button className="text-[#fff8e6]" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="mt-4">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className="block py-2 text-white hover:text-gray-300 border-b border-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
