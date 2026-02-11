import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
      {/* Changed h-screen to min-h-screen and added pt-20 for navbar spacing */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="rounded-full w-32 mt-16" // Added mt-16 for extra top margin
          priority // Added priority for faster loading
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="ovo-font flex items-end gap-2 text-xl md:text-2xl mb-3"
      >
        Hi! I'm Sanjay Samala
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] ovo-font"
      >
        Full Stack Developer specializing in AI & Cloud Computing
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-1xl mx-auto ovo-font"
      >
        Full Stack Developer with specialized expertise in Deep Learning and Cloud Computing, building scalable web applications. Proficient in React, Next.js, Node.js, and Python, with a strong focus on integrating advanced AI and machine learning solutions. Dedicated to creating efficient, innovative software and currently seeking opportunities in Full Stack and AI Engineering.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full max-w-md mx-auto">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-6 py-2.5 border rounded-full text-white bg-black border-gray-500 flex items-center gap-2 text-sm md:text-base hover:bg-gray-800 transition-colors"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Resume.pdf"
          download="Sanjay_Samala_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 border rounded-full border-gray-500 flex items-center gap-2 text-sm md:text-base hover:bg-gray-100 transition-colors"
        >
          Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}
// assets\public\Resume.pdf

export default Header;
