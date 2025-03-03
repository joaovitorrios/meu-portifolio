import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400"
          >
            João Vitor Rios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-400 mb-4"
          >
            Full Stack Developer
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-light text-gray-100 mb-6 italic"
          >
            
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300"
          >
            Bem-vindo ao meu portfólio! Explore meus projetos e conheça mais sobre mim.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="md:w-1/2 flex justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-20 blur-2xl"></div>
            <img
              src="https://i.ibb.co/4PDM3hw/IMG-4055.jpg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover relative z-10 border-4 border-blue-400 shadow-lg shadow-blue-500/20"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;