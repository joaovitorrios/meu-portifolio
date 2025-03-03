import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <img
              src="https://i.ibb.co/4PDM3hw/IMG-4055.jpg"
              alt="Profile"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-xl font-semibold text-white">João Vitor Sales Nunes Rios</p>
              <p>
                Cursando Análise e Desenvolvimento de Sistemas na Faculdade Capim Grosso (FCG).
              </p>
              <p>
                Sou um desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios
                e oportunidades de aprendizado. Minha jornada na programação começou com curiosidade
                e se transformou em uma busca constante por excelência.
              </p>
              <p>
                Atualmente, foco meus estudos em desenvolvimento web full-stack, com especial
                interesse em tecnologias modernas como React, Node.js e Python. Busco oportunidades
                para aplicar meus conhecimentos em projetos desafiadores e inovadores.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;