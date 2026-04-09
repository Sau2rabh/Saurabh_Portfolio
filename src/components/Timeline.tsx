"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer & QA Associate",
    company: "Suh Tech Pvt. Limited",
    date: "Nov 2025 - Apr 2026",
    description: "Developed responsive web interfaces using HTML, CSS, JS, and React.js. Integrated REST APIs and performed manual testing.",
    type: "Work",
    link: "https://www.suhtech.top/"
  },
  {
    title: "B.E in Computer Science Engineering",
    company: "Chandigarh University",
    date: "2022 - Present",
    description: "Focusing on core CS fundamentals and advanced web technologies.",
    type: "Education",
    link: "https://www.cuchd.in/"
  },
  {
    title: "Research Publication",
    company: "IEEE Conference",
    date: "2025",
    description: "Multi-Modal Hybrid System for Lung Cancer Prediction Published in IEEE Conference Proceedings.",
    type: "Achievement",
    link: "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=multimodal%20hybrid%20system%20for%20lung%20cancer%20prediction"
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-20 px-6 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold neon-text mb-2">My Journey</h2>
        <p className="text-gray-400">Experience and academic background</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Glowing Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2" />
        
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-linear-to-b from-cyan-500 via-purple-500 to-transparent transform md:-translate-x-1/2 z-10 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 transform -translate-x-1/2 md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <div className="w-full md:w-[45%] ml-8 md:ml-0">
                <div className="glass p-6 rounded-2xl hover:border-cyan-400/30 transition-all group">
                  <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1 block">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-block text-purple-300 text-sm mb-3 font-medium hover:text-purple-200 hover:underline transition-all">
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-purple-300 text-sm mb-3 font-medium">{exp.company}</p>
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer for MD screens */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
