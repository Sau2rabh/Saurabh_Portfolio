'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 w-full z-100 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'top-6 px-4 md:px-16' : 'top-0 px-6 md:px-16'}`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-full
          ${
            isScrolled
              ? 'max-w-[900px] bg-white/5 backdrop-blur-lg rounded-[100px] py-4 px-8 md:px-12 border border-white/5 shadow-xl'
              : 'max-w-[1400px] bg-transparent backdrop-blur-none rounded-none py-8 px-0 border-b border-white/5 shadow-none'
          }`}
        >
          <div className='flex items-center whitespace-nowrap shrink-0'>
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

          {/* Desktop Nav Links */}
          <div
            className={`hidden md:flex items-center whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'gap-6 lg:gap-10' : 'gap-10 lg:gap-14'}`}
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

          {/* Mobile Menu Toggle */}
          <button
            className='md:hidden p-2 text-white/80 hover:text-cyan-400 transition-colors relative z-110'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className='fixed inset-0 bg-black/60 backdrop-blur-md z-998 md:hidden'
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 h-full w-[300px] bg-[#030014]/95 border-l border-white/10 z-999 md:hidden flex flex-col overflow-y-auto glass'
            >
              {/* Sidebar Header */}
              <div className='flex items-center justify-between p-8 border-b border-white/5'>
                <a href='#' className='text-lg font-bold tracking-wider' onClick={closeMobileMenu}>
                  <span className='text-white'>Saurabh</span>
                  <span className='text-cyan-400'>_Portfolio</span>
                </a>
                <button 
                  onClick={closeMobileMenu}
                  className='p-2 text-white/70 hover:text-cyan-400 transition-colors'
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className='flex flex-col space-y-4 p-8 mt-4'>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    onClick={closeMobileMenu}
                    className='group flex items-baseline py-2'
                  >
                    <span className='text-[10px] font-mono text-cyan-500/60 mr-4 tracking-tighter'>0{idx + 1}</span>
                    <span className='text-2xl font-semibold tracking-tight text-white/90 group-hover:text-cyan-400 transition-colors'>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className='mt-auto p-8 border-t border-white/5 space-y-6 bg-slate-900/20'>
                <div className='space-y-2'>
                  <p className='text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]'>Get In Touch</p>
                  <a href='mailto:royalking6993@gmail.com' className='text-sm text-cyan-400/80 hover:text-cyan-500 transition-colors inline-block'>
                    royalking6993@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
