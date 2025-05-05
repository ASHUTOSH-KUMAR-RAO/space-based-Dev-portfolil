"use client";

import React, { useState, useEffect } from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Socials } from "@/constants";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Track mouse position for custom cursor
  useEffect(() => {
    interface MousePosition {
      x: number;
      y: number;
    }

    interface MouseMoveEvent extends MouseEvent {}

    const mouseMove = (e: MouseMoveEvent) => {
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

  // Custom cursor variants
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(123, 31, 162, 0.1)",
      border: "1px solid rgba(123, 31, 162, 0.3)",
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(123, 31, 162, 0.2)",
      border: "2px solid rgba(123, 31, 162, 0.5)",
      mixBlendMode: "difference" as const,
    },
    social: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(123, 31, 162, 0.05)",
      border: "2px solid rgba(123, 31, 162, 0.2)",
      mixBlendMode: "difference" as const,
      borderRadius: "50%",
    },
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("icoashutosh@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Background particles animation
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="w-full bg-gradient-to-b from-transparent to-[#0300145e] text-gray-200 shadow-lg p-6 relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Background Animated Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            initial={{
              width: Math.random() * 60 + 10,
              height: Math.random() * 60 + 10,
              x: Math.random() * window.innerWidth,
              y: Math.random() * 500,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <div className="absolute w-60 h-60 bg-purple-500/10 rounded-full -top-10 -right-10 blur-2xl"></div>
        <div className="absolute w-60 h-60 bg-blue-500/10 rounded-full -bottom-10 -left-10 blur-2xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Top Wave SVG with animation */}
        <motion.div 
          className="w-full h-16 mb-8 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <motion.path 
              fill="#8B5CF6" 
              fillOpacity="1" 
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Community Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.h3 
                className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                Community
              </motion.h3>
              
              <motion.a 
                href="https://youtube.com/your-channel" 
                target="_blank"
                whileHover={{ x: 10, color: "#FF0000", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => {
                  setCursorVariant("link");
                  setHoveredItem("youtube");
                }}
                onHoverEnd={() => {
                  setCursorVariant("default");
                  setHoveredItem(null);
                }}
              >
                <motion.div
                  animate={hoveredItem === "youtube" ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <FaYoutube className="text-xl" />
                </motion.div>
                <span className="ml-3 relative overflow-hidden group-hover:text-white">
                  Youtube
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
              
              <motion.a 
                href="https://github.com/your-username" 
                target="_blank"
                whileHover={{ x: 10, color: "#f5f5f5", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => {
                  setCursorVariant("link");
                  setHoveredItem("github");
                }}
                onHoverEnd={() => {
                  setCursorVariant("default");
                  setHoveredItem(null);
                }}
              >
                <motion.div
                  animate={hoveredItem === "github" ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <RxGithubLogo className="text-xl" />
                </motion.div>
                <span className="ml-3 relative">
                  Github
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
              
              <motion.a 
                href="https://discord.gg/your-server" 
                target="_blank"
                whileHover={{ x: 10, color: "#7289DA", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => {
                  setCursorVariant("link");
                  setHoveredItem("discord");
                }}
                onHoverEnd={() => {
                  setCursorVariant("default");
                  setHoveredItem(null);
                }}
              >
                <motion.div
                  animate={hoveredItem === "discord" ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <RxDiscordLogo className="text-xl" />
                </motion.div>
                <span className="ml-3 relative">
                  Discord
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
            </motion.div>

            {/* Social Media Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.h3 
                className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                Social Media
              </motion.h3>
              
              <motion.a 
                href="https://instagram.com/your-handle" 
                target="_blank"
                whileHover={{ x: 10, color: "#E1306C", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => {
                  setCursorVariant("link");
                  setHoveredItem("instagram");
                }}
                onHoverEnd={() => {
                  setCursorVariant("default");
                  setHoveredItem(null);
                }}
              >
                <motion.div
                  animate={hoveredItem === "instagram" ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <RxInstagramLogo className="text-xl" />
                </motion.div>
                <span className="ml-3 relative">
                  Instagram
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
              
              <motion.a 
                href="https://twitter.com/your-handle" 
                target="_blank"
                whileHover={{ x: 10, color: "#1DA1F2", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => {
                  setCursorVariant("link");
                  setHoveredItem("twitter");
                }}
                onHoverEnd={() => {
                  setCursorVariant("default");
                  setHoveredItem(null);
                }}
              >
                <motion.div
                  animate={hoveredItem === "twitter" ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <RxTwitterLogo className="text-xl" />
                </motion.div>
                <span className="ml-3 relative">
                  Twitter
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank"
                whileHover={{ x: 10, color: "#0077B5", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => {
                  setCursorVariant("link");
                  setHoveredItem("linkedin");
                }}
                onHoverEnd={() => {
                  setCursorVariant("default");
                  setHoveredItem(null);
                }}
              >
                <motion.div
                  animate={hoveredItem === "linkedin" ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <RxLinkedinLogo className="text-xl" />
                </motion.div>
                <span className="ml-3 relative">
                  LinkedIn
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
            </motion.div>

            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.h3 
                className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                About
              </motion.h3>
              
              <motion.a 
                href="#sponsor"
                whileHover={{ x: 10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => setCursorVariant("link")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <span className="ml-3 relative">
                  Become Sponsor
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
              
              <motion.a 
                href="#about-me"
                whileHover={{ x: 10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 transition-all duration-300 cursor-pointer"
                onHoverStart={() => setCursorVariant("link")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <span className="ml-3 relative">
                  Learning about me
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
              
              <motion.div 
                onClick={copyEmail}
                whileHover={{ x: 10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center my-3 cursor-pointer relative"
                onHoverStart={() => setCursorVariant("link")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <span className="ml-3 relative">
                  icoashutosh@gmail.com
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <AnimatePresence>
                    {emailCopied && (
                      <motion.span 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="absolute -top-8 left-0 text-xs bg-green-400/20 px-2 py-1 rounded text-green-400"
                      >
                        Copied to clipboard!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mt-12 mb-8"
          >
            {Socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -5, 
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(123, 31, 162, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + index * 0.1 
                }}
                onHoverStart={() => setCursorVariant("social")}
                onHoverEnd={() => setCursorVariant("default")}
                className="w-10 h-10 rounded-full bg-[#0300145e] border border-[#7042f861] flex items-center justify-center cursor-pointer hover:bg-[#7042f830] transition-all duration-300"
              >
                {social.name === "GitHub" && <RxGithubLogo className="text-xl" />}
                {social.name === "LinkedIn" && <RxLinkedinLogo className="text-xl" />}
                {social.name === "Twitter" && <RxTwitterLogo className="text-xl" />}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm text-center mt-8 relative"
          >
            <motion.div 
              className="py-4 border-t border-[#7042f830] w-full max-w-md mx-auto"
              whileHover={{ color: "#a855f7" }}
            >
              &copy; Ashutosh Kumar Rao {new Date().getFullYear()} • All rights reserved
            </motion.div>

            {/* Animated Glow Effect on Footer */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 blur-sm"
              animate={{ 
                x: [-100, 100],
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;