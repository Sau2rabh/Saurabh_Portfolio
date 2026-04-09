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
          className='flex-1'
        >
          <div className='relative group'>
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
                <div className='text-xs text-cyan-400 font-mono tracking-wider bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20'>
                  profile.tsx
                </div>
              </div>

              {/* Code Content */}
              <div className='p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed relative bg-slate-950/50 backdrop-blur-xl'>
                {/* Background Effects */}
                <div className='absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]'></div>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_70%)]'></div>

                <div className='relative z-10'>
                  <div className='flex gap-4'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      1
                    </span>
                    <p>
                      <span className='text-cyan-400'>const</span>{' '}
                      <span className='text-cyan-200'>Saurabh</span> = {'{'}
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      2
                    </span>
                    <p className='pl-4'>
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
                    <p className='pl-4'>
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
                    <p className='pl-4'>
                      <span className='text-purple-400'>skills</span>: [
                      <span className='text-emerald-400'>"React"</span>,{' '}
                      <span className='text-emerald-400'>"Next.js"</span>,{' '}
                      <span className='text-emerald-400'>"MongoDB"</span>,{' '}
                      <span className='text-emerald-400'>"Express.js"</span>,{' '}
                      <span className='text-emerald-400'>"Postman"</span>,{' '}
                      <span className='text-emerald-400'>"Excel"</span>,{' '}
                      <span className='text-emerald-400'>"Node"</span>
                      ],
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      5
                    </span>
                    <p className='pl-4'>
                      <span className='text-purple-400'>status</span>:{' '}
                      <span className='text-yellow-300'>"Open to Work"</span>,
                    </p>
                  </div>
                  <div className='flex gap-4 mt-1'>
                    <span className='text-slate-600 select-none w-4 text-right'>
                      6
                    </span>
                    <p className='pl-4'>
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
                  className='absolute bottom-10 right-10 w-2 h-5 bg-cyan-400 z-20'
                />

                {/* Subtle Watermark */}
                <div className='absolute bottom-4 right-4 opacity-[0.05] select-none pointer-events-none z-0'>
                  <svg width='80' height='80' viewBox='0 0 24 24' fill='white'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
                  </svg>
                </div>
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
          <h2 className='text-4xl font-bold neon-text'>About Me</h2>
          <p className='text-gray-300 text-lg leading-relaxed'>
            I am a passionate{' '}
            <span className='text-cyan-400'>
              Frontend Developer & QA Associate
            </span>{' '}
            with a strong background in building responsive, user-friendly
            interfaces. My journey in technology is driven by a curiosity for{' '}
            <span className='text-purple-400'>AI and Machine Learning</span>,
            integration of which allows me to create smarter web solutions.
          </p>
          <p className='text-gray-400'>
            Currently pursuing my B.E in Computer Science Engineering at
            Chandigarh University, I have worked on various projects ranging
            from AI-powered health risk predictors to automated career roadmap
            generators.
          </p>

          <div className='grid grid-cols-2 gap-4 pt-4'>
            <div className='glass p-4 rounded-xl border-white/10 hover:border-cyan-400/50 transition-colors'>
              <h3 className='text-cyan-400 font-semibold'>Education</h3>
              <p className='text-sm text-gray-400'>
                B.E in CSE, Chandigarh University
              </p>
            </div>
            <div className='glass p-4 rounded-xl border-white/10 hover:border-cyan-400/50 transition-colors'>
              <h3 className='text-cyan-400 font-semibold'>Experience</h3>
              <p className='text-sm text-gray-400'>Frontend & QA @ Suh Tech</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
