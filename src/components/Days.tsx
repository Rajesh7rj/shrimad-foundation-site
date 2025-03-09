'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  { id: 'section1', label: 'Section 1', bg: 'bg-blue-500' },
  { id: 'section2', label: 'Section 2', bg: 'bg-purple-500' },
  { id: 'section3', label: 'Section 3', bg: 'bg-orange-500' },
  { id: 'section41', label: 'Section 4-1', bg: 'bg-cyan-500' },
  { id: 'section42', label: 'Section 4-2', bg: 'bg-teal-500' }
];

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="sticky top-5 h-[calc(100vh-40px)] w-60 bg-gray-200 p-4 rounded-lg">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`block px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-300'
                }`}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="flex-1 overflow-y-auto px-6">
        {sections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            className={`min-h-screen ${section.bg} text-white p-10 rounded-lg mb-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold">{section.label}</h1>
            <p className="mt-4">This is the content for {section.label}. Scroll to see the sidebar effect.</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
}