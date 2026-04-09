"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring" as const, damping: 20, stiffness: 250, mass: 0.5 }
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(34, 211, 238, 0.1)",
      border: "1px solid rgba(34, 211, 238, 0.5)",
      transition: { type: "spring" as const, damping: 20, stiffness: 250, mass: 0.5 }
    }
  };

  useEffect(() => {
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/50 pointer-events-none z-[9999] hidden md:block"
        animate={isHovering ? "hover" : "default"}
        variants={variants}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-cyan-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;
