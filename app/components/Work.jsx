import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg ovo-font"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl ovo-font"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo-font"
      >
        Welcome to my Development portfolio! I specialize in programming, cloud computing, AI, and web development, with expertise in Python, C++, Java, JavaScript, and Dart. With certifications from IIT Madras (MLDL), Infosys, Oracle, and Udemy, I also have a strong foundation in AI, data science, and responsive web design. Explore my work and journey through technology and innovation!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            // initial={{ y: -20, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{ backgroundImage: `url('${project.imageUrl}')` }}
            className="relative border rounded-lg overflow-hidden shadow-lg aspect-square bg-no-repeat bg-cover bg-center cursor-pointer group"
          >
            {/* // ...existing code... */}
            <div className="bg-white w-10/12 rounded-mg absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="group/icon">
                <Image
                  src={assets.right_arrow_bold}
                  alt="View Project"
                  width={24}
                  height={24}
                  className="rounded-full p-2.5 
        flex items-center justify-center
        border border-gray-300
        hover:border-transparent
        transition-all duration-300 ease-in-out
        group-hover/icon:bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4]
        group-hover/icon:shadow-md
        group-hover/icon:text-white"
                  style={{
                    minWidth: "40px",
                    minHeight: "40px",
                  }}
                  title="Click to view project"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="https://www.github.com/sanjaysam410/"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-purple-100 duration-500"
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="right-arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
