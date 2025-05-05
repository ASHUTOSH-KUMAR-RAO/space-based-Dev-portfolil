"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  // State variables
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle component mount and window size
  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Mouse movement tracking
    interface MouseEventWithClient extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (e: MouseEventWithClient): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  interface MousePosition {
    x: number;
    y: number;
  }

  interface WindowSize {
    width: number;
    height: number;
  }

  const calculateMovement = (axis: 'x' | 'y', strength: number = 10): number => {
    if (!isMounted) return 0;
    
    const center = axis === 'x' ? windowSize.width / 2 : windowSize.height / 2;
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    const movement = (position - center) / strength;
    return movement;
  };

  // Generate random position within window bounds
  interface GetRandomPosition {
    (dimension: 'width' | 'height'): number;
  }

  const getRandomPosition: GetRandomPosition = (dimension) => {
    if (!isMounted) return 0;
    return Math.random() * (dimension === 'width' ? windowSize.width : windowSize.height);
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1d] to-[#16061c] opacity-90"></div>
      
      {/* Animated particles - Only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500 opacity-20"
              initial={{ 
                x: getRandomPosition('width'),
                y: getRandomPosition('height'),
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [
                  getRandomPosition('height'),
                  getRandomPosition('height'),
                ],
                x: [
                  getRandomPosition('width'),
                  getRandomPosition('width'),
                ],
                scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 md:pt-40 pb-20 w-full z-20 relative"
      >
        <div className="w-full md:w-1/2 h-full flex flex-col gap-5 justify-center text-start">
          <motion.div
            variants={slideInFromTop}
            className="flex items-center bg-[rgba(112,66,248,0.1)] backdrop-blur-sm border border-[#7042f88b] rounded-full py-2 px-4 w-fit"
          >
            <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
            <h1 className="text-[#f5f5f5] text-sm font-medium">
              Elite Digital Solutions Architect
            </h1>
          </motion.div>
          
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-2 mt-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Crafting
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ml-2 inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                exceptional
              </motion.span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
              digital experiences
            </h2>
          </motion.div>
          
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg my-5 text-gray-300 max-w-[500px] leading-relaxed"
          >
            Specialized in architecting sophisticated web applications and enterprise solutions that combine cutting-edge technology with intuitive user experiences. Discover how my expertise can transform your vision into reality.
          </motion.p>
          
          <motion.div
              variants={slideInFromLeft(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <a
                className="relative flex items-center justify-center gap-2 py-3 px-6 bg-[#0E1016] text-white font-medium rounded-lg cursor-pointer"
              >
                <span>View Portfolio</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
              </a>
            </motion.div>
        </div>
        
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full md:w-1/2 h-full flex justify-center items-center mt-12 md:mt-0"
          style={{
            transform: `translate(${calculateMovement('x')}px, ${calculateMovement('y')}px)`,
          }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
              className="relative z-10 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;