'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        top: isScrolled ? 24 : 0,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className='fixed left-0 w-full z-50 flex justify-center px-6 md:px-16'
    >
      <motion.div
        animate={{
          width: isScrolled ? 'auto' : '100%',
          maxWidth: isScrolled ? '1000px' : '100%',
          borderRadius: isScrolled ? '100px' : '0px',
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: isScrolled
            ? 'none'
            : '1px solid rgba(255, 255, 255, 0.05)',
          paddingLeft: isScrolled ? '40px' : '0px',
          paddingRight: isScrolled ? '40px' : '0px',
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center ${isScrolled ? 'justify-center py-3 min-h-[64px] gap-12 md:gap-20' : 'justify-between py-8 min-h-[90px]'} transition-all`}
      >
        <div className='flex items-center whitespace-nowrap'>
          <a
            href='#'
            className='text-xl font-bold tracking-wider flex items-center group'
          >
            <span className='text-white'>Saurabh</span>
            <span className='text-white/80 transition-colors group-hover:text-cyan-400'>
              _Portfolio
            </span>
          </a>
        </div>

        <div
          className={`hidden md:flex items-center whitespace-nowrap ${isScrolled ? 'gap-8 lg:gap-12' : 'gap-12 ml-auto'}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='relative text-[10px] md:text-xs font-bold text-white/70 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] group'
            >
              {link.name}
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
