'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

const projects = [
  {
    title: 'Smart AI Health Predictor',
    description:
      'An AI-powered health platform with automated medical report analysis and symptom tracking. Integrated Gemini API for real-time insights.',
    tags: ['Next.js', 'Gemini API', 'Node.js', 'AI'],
    type: 'AI',
    image: '/projects/health-ai.png',
    demo: 'https://smart-ai-health-predictor.vercel.app/',
    github: 'https://github.com/Sau2rabh/SmartAIHealthPredictor',
    glowColor: 'cyan' as const,
  },
  {
    title: 'Smart Career Roadmap Generator',
    description:
      'Full-stack AI platform offering personalized learning roadmaps, resume optimization, and mock interviews.',
    tags: ['Next.js', 'MongoDB', 'Tailwind', 'Fullstack'],
    type: 'Web',
    image: '/projects/career-roadmap.png',
    demo: 'https://smart-career-roadmap-generator.vercel.app/',
    github: 'https://github.com/Sau2rabh/Smart-career-roadmap-generator',
    glowColor: 'purple' as const,
  },
  {
    title: 'Velora — E-Commerce + Admin Panel',
    description:
      'A full-featured e-commerce platform with product catalog across Electronics, Fashion, Kids & Beauty categories, plus a dedicated Admin Panel for inventory and order management.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Admin Panel'],
    type: 'Web',
    image: '/projects/velora.png',
    demo: 'https://velora-ecommerce-website-with-admin.vercel.app/',
    github: 'https://github.com/Sau2rabh/Velora-Ecommerce-Website-with-Admin-Panel',
    glowColor: 'blue' as const,
  },
  {
    title: 'GuptMilan — Anonymous Chat App',
    description:
      '100% anonymous instant video and text chat platform. Meet strangers with no signup, no tracking — AI moderated with low latency WebRTC connections.',
    tags: ['React.js', 'WebRTC', 'Node.js', 'Socket.io', 'AI Moderation'],
    type: 'Web',
    image: '/projects/gupt-milan.png',
    demo: 'https://gupt-milan.vercel.app/',
    github: 'https://github.com/Sau2rabh/GuptMilan',
    glowColor: 'green' as const,
  },
  {
    title: 'FinPulse — Finance Dashboard UI',
    description:
      'A real-time personal finance dashboard with monthly budget tracking, transaction history, income vs expense insights, and role-based Admin/Viewer modes.',
    tags: ['React.js', 'Tailwind', 'Recharts', 'Dashboard', 'UI/UX'],
    type: 'Web',
    image: '/projects/finance-dashboard.png',
    demo: 'https://finance-dashboard-ui-two-xi.vercel.app/',
    github: 'https://github.com/Sau2rabh/Finance-Dashboard-UI',
    glowColor: 'orange' as const,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'AI'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.type === filter || p.tags.some((t) => t === filter));

  return (
    <section id="projects" className="py-20 px-6 container mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold neon-text mb-2">Featured Projects</h2>
          <p className="text-gray-400">Transforming ideas into digital reality</p>
        </div>

        <div className="flex space-x-2 bg-slate-900/50 p-1 rounded-full glass border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-black font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="flex h-full"
            >
              {/* ── GlowCard wraps each project card ── */}
              <GlowCard
                customSize
                glowColor={project.glowColor}
                className="w-full h-full flex flex-col group"
              >
                {/* Screenshot */}
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={13} className="mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      <Github size={13} className="mr-1" /> GitHub
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
