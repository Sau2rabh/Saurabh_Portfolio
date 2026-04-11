"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const progressValue = useMotionValue(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Smoothly animate progress from 0 to 100
    const controls = animate(progressValue, 100, {
      duration: 1.5,
      ease: [0.32, 0, 0.24, 1], // Custom smooth ease
      onUpdate: (latest) => {
        setDisplayProgress(Math.round(latest));
      },
      onComplete: () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        }, 200); // Tiny bounce delay for better feel
      }
    });

    return () => {
      controls.stop();
      document.body.style.overflow = "auto";
    };
  }, [progressValue]);

  // Transform dash offset based on motion value
  const dashOffset = useTransform(progressValue, [0, 100], [377, 0]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Sparkles Background */}
          <div className="absolute inset-0 w-full h-full opacity-60">
            <SparklesCore
              id="tsparticles-splash"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#06b6d4"
              speed={1}
            />
          </div>

          {/* Radial Gradient overlay to blend background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_80%)]" />

          {/* Loader UI */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer ring */}
              <svg className="w-full h-full absolute inset-0 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="4"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="#06b6d4"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="377"
                  style={{ strokeDashoffset: dashOffset }}
                  strokeLinecap="round"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="45"
                  stroke="rgba(168,85,247,0.2)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                  className="animate-[spin_10s_linear_infinite]"
                />
              </svg>

              {/* Progress Text */}
              <div className="text-white text-3xl font-mono font-bold tracking-tighter shadow-cyan-500/50 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                {displayProgress}
                <span className="text-cyan-400 text-xl opacity-80">%</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase animate-pulse">
                System Is Analyzing
              </h1>
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
