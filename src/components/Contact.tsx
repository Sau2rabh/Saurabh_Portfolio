'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace these with your actual EmailJS credentials
    // Secrets are securely loaded from .env.local
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSubmitStatus('success');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };
  return (
    <section id='contact' className='py-20 px-6 container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='lg:w-1/3 space-y-8'
        >
          <div>
            <h2 className='text-4xl font-bold neon-text mb-2'>Get in Touch</h2>
            <p className='text-gray-400'>
              Let's collaborate on something amazing.
            </p>
          </div>

          <div className='space-y-6'>
            <a
              href='mailto:royalking6993@gmail.com'
              className='flex items-center space-x-4 group cursor-pointer'
            >
              <div className='w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all'>
                <Mail className='text-cyan-400' size={20} />
              </div>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-widest'>
                  EMAIL ID
                </p>
                <p className='text-white group-hover:text-cyan-400 transition-colors'>
                  royalking6993@gmail.com
                </p>
              </div>
            </a>

            <div className='flex items-center space-x-4 group'>
              <div className='w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-all'>
                <Phone className='text-purple-400' size={20} />
              </div>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-widest'>
                  PHONE NUMBER
                </p>
                <p className='text-white group-hover:text-purple-400 transition-colors'>
                  +91-7322987155
                </p>
              </div>
            </div>

            <a
              href='https://www.linkedin.com/in/saurabh-anand-113271249/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-4 group cursor-pointer'
            >
              <div className='w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-500/10 transition-all'>
                <Linkedin className='text-blue-400' size={20} />
              </div>
              <div>
                <p className='text-xs text-gray-500 uppercase tracking-widest'>
                  LinkedIn
                </p>
                <p className='text-white group-hover:text-blue-400 transition-colors'>
                  Saurabh Anand
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='lg:w-2/3'
        >
          <div className='glass p-8 rounded-4xl border-white/10 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px]' />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              <div className='space-y-2'>
                <label className='text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1'>
                  Name
                </label>
                <input
                  type='text'
                  name='user_name'
                  required
                  placeholder='Saurabh Anand'
                  className='w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-gray-700'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1'>
                  Email
                </label>
                <input
                  type='email'
                  name='user_email'
                  required
                  placeholder='[EMAIL_ADDRESS]'
                  className='w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-gray-700'
                />
              </div>
              <div className='md:col-span-2 space-y-2'>
                <label className='text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1'>
                  Message
                </label>
                <textarea
                  rows={5}
                  name='message'
                  required
                  placeholder='How can I help you?'
                  className='w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-gray-700 resize-none'
                />
              </div>
              <div className='md:col-span-2'>
                <button
                  disabled={isSubmitting}
                  className='w-full py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] disabled:opacity-75 disabled:hover:scale-100 flex justify-center items-center gap-2'
                >
                  {isSubmitting && (
                    <Loader2 className='animate-spin' size={20} />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className='md:col-span-2 flex items-center gap-2 text-green-400 bg-green-500/10 p-3 rounded-xl border border-green-500/20'>
                  <CheckCircle2 size={18} />
                  <p className='text-sm'>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='md:col-span-2 flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-xl border border-red-500/20'>
                  <AlertCircle size={18} />
                  <p className='text-sm'>
                    Oops! Something went wrong. Please try again or email me
                    directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
