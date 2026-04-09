"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Frontend Developer", "QA Associate", "AI Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // Mouse tilt logic for content card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Visual background enhancements */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Faded Multi-color Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[45%] h-[60%] bg-emerald-900/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -left-[5%] w-[35%] h-[40%] bg-cyan-900/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-[10%] w-[45%] h-[60%] bg-purple-900/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[35%] h-[40%] bg-fuchsia-900/10 rounded-full blur-[140px]" />
      </div>

      {/* Robot background layer */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 overflow-visible pointer-events-auto flex items-center justify-center translate-y-10 lg:translate-x-20">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full scale-90"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[700px] items-center">

          {/* Left Content Column */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex-1 p-4 md:p-8 flex flex-col justify-center relative z-20 lg:max-w-[48%] pointer-events-auto lg:-translate-x-12"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="space-y-8 p-10 md:p-12 rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden group transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(255,255,255,0.15)]"
            >
              {/* Premium gradient border glow */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />

              {/* Subtle glass reflection effect (enhanced) */}
              <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" />

              <div className="relative z-10 space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-tight text-gray-400 uppercase">
                  HELLO, I'M
                </div>

                <div className="space-y-4">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                  >
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                      Saurabh Anand
                    </span>
                  </motion.h1>

                  {/* Typing Subtitle */}
                  <div className="text-lg md:text-xl font-mono flex items-center gap-2">
                    <span className="text-gray-500">I am a</span>
                    <span className="text-[#3ed5f3] font-medium">
                      {displayText}
                      <span className="ml-1 border-r-2 border-[#3ed5f3] h-5 inline-block align-middle" />
                    </span>
                  </div>
                </div>

                <p className="max-w-lg text-gray-400 text-base md:text-lg leading-relaxed">
                  I build <span className="text-white font-medium">scalable, high-performance</span> web applications and turn
                  complex problems into <span className="text-white font-medium">clean, user-focused solutions</span>.
                </p>

                {/* Primary Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#3e82f1] to-[#2b59f3] text-white font-semibold rounded-xl hover:opacity-90 transition-all group text-sm md:text-base cursor-pointer"
                  >
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="flex items-center gap-2 px-6 py-3 border border-white/10 bg-transparent text-white font-semibold rounded-xl hover:bg-white/5 transition-all text-sm md:text-base">
                    My Resume
                    <FileText className="w-5 h-5" />
                  </button>
                </div>

                {/* Social Icons Row */}
                <div className="flex gap-6 pt-6 text-gray-600">
                  <a href="https://github.com/Sau2rabh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="https://www.linkedin.com/in/saurabh-anand-113271249/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a
                    href="mailto:royalking6993@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center space-y-2 pointer-events-none"
      >
        <div className="w-px h-12 bg-linear-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
