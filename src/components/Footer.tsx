"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold neon-text mb-2">Saurabh Anand</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Building the future of web and AI, one pixel at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/Sau2rabh" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 group transition-all">
              <Github className="text-gray-400 group-hover:text-cyan-400" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/saurabh-anand-113271249/" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-blue-500/10 hover:border-blue-400 group transition-all">
              <Linkedin className="text-gray-400 group-hover:text-blue-400" size={20} />
            </a>
            <a href="mailto:royalking6993@gmail.com" className="p-2 glass rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 group transition-all">
              <Mail className="text-gray-400 group-hover:text-cyan-400" size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">© 2026 Saurabh Anand.</p>
            <p className="text-[10px] text-gray-700 uppercase tracking-widest mt-1">Design inspired by the future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
