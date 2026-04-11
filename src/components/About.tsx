'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='py-20 px-6 container mx-auto'>
      <div className='flex flex-col md:flex-row items-center gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex-1 w-full'
        >
          <div className='relative group w-full'>
            <div className='absolute -inset-10 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000'></div>
            <div className='absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
            <div className='relative glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-cyan-500/30 transition-colors duration-500'>
              {/* Terminal Header */}
              <div className='bg-slate-900/80 px-4 py-3 border-b border-white/5 flex items-center justify-between'>
                <div className='flex gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]'></div>
                </div>
                <div className='text-[10px] sm:text-xs text-cyan-400 font-mono tracking-wider bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20'>
                  profile.tsx
                </div>
              </div>

              {/* Code Content */}
              <div className='p-4 sm:p-6 md:p-8 font-mono text-[13px] sm:text-sm md:text-base leading-relaxed relative bg-slate-950/50 backdrop-blur-xl overflow-x-auto scrollbar-hide'>
                {/* Background Effects */}
                <div className='absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]'></div>

                <div className='relative z-10 min-w-[320px]'>
                  <div className='flex gap-4'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      1
                    </span>
                    <p className='whitespace-nowrap sm:whitespace-normal'>
                      <span className='text-cyan-400'>const</span>{' '}
                      <span className='text-cyan-200'>Saurabh</span> = {'{'}
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      2
                    </span>
                    <p className='pl-4 whitespace-nowrap sm:whitespace-normal'>
                      <span className='text-purple-400'>education</span>:{' '}
                      <span className='text-yellow-300'>
                        "Chandigarh University"
                      </span>
                      ,
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      3
                    </span>
                    <p className='pl-4 whitespace-nowrap sm:whitespace-normal'>
                      <span className='text-purple-400'>experience</span>:{' '}
                      <span className='text-yellow-300'>
                        "Frontend Developer @ Suh Tech Pvt Limited"
                      </span>
                      ,
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      4
                    </span>
                    <p className='pl-4 whitespace-nowrap sm:whitespace-normal'>
                      <span className='text-purple-400'>skills</span>: [
                      <span className='text-emerald-400'>"React"</span>,{' '}
                      <span className='text-emerald-400'>"Next.js"</span>,{' '}
                      <span className='text-emerald-400'>"Node.js"</span>,{' '}
                      <span className='text-emerald-400'>"Express.js"</span>,{' '}
                      <span className='text-emerald-400'>"MongoDB"</span>,{' '}
                      <span className='text-emerald-400'>"Excel"</span>,{' '}
                      <span className='text-emerald-400'>"AI"</span>
                      ],
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      5
                    </span>
                    <p className='pl-4 whitespace-nowrap sm:whitespace-normal'>
                      <span className='text-purple-400'>status</span>:{' '}
                      <span className='text-yellow-300'>"Open to Work"</span>,
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      6
                    </span>
                    <p className='pl-4 whitespace-nowrap sm:whitespace-normal'>
                      <span className='text-purple-400'>loves</span>: () =&gt;{' '}
                      <span className='text-yellow-300'>"Innovation"</span>
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      7
                    </span>
                    <p>{'}'}</p>
                  </div>
                </div>

                {/* Decorative Cursor/Highlight */}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className='absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-2 h-4 sm:h-5 bg-cyan-400 z-20'
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex-1 space-y-6'
        >
          <h2 className='text-3xl md:text-4xl font-bold neon-text'>About Me</h2>
          <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
            I am a passionate{' '}
            <span className='text-cyan-400'>
              Frontend Developer & QA Associate
            </span>{' '}
            with a strong background in building responsive, user-friendly
            interfaces. My journey in technology is driven by a curiosity for{' '}
            <span className='text-purple-400'>AI and Machine Learning</span>,
            integration of which allows me to create smarter web solutions.
          </p>
          <p className='text-gray-400 text-sm md:text-base'>
            Currently pursuing my B.E in Computer Science Engineering at
            Chandigarh University, I have worked on various projects ranging
            from AI-powered health risk predictors to automated career roadmap
            generators.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
            <div className='glass p-4 rounded-xl border-white/10 hover:border-cyan-400/50 transition-colors'>
              <h3 className='text-cyan-400 font-semibold text-sm sm:text-base'>
                Education
              </h3>
              <p className='text-xs sm:text-sm text-gray-400'>
                B.E in CSE, Chandigarh University
              </p>
            </div>
            <div className='glass p-4 rounded-xl border-white/10 hover:border-cyan-400/50 transition-colors'>
              <h3 className='text-cyan-400 font-semibold text-sm sm:text-base'>
                Experience
              </h3>
              <p className='text-xs sm:text-sm text-gray-400'>
                Frontend & QA @ Suh Tech
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
