import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  {
    name: 'JavaScript',
    icon: '⚡',
    description: 'Desenvolvimento frontend interativo e aplicações dinâmicas.',
    level: 85,
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Desenvolvimento seguro e tipado para aplicações escaláveis.',
    level: 80,
  },
  {
    name: 'React',
    icon: '⚛️',
    description: 'Desenvolvimento de interfaces modernas e interativas.',
    level: 85,
  },
  {
    name: 'Angular',
    icon: '🅰️',
    description: 'Framework robusto para aplicações empresariais.',
    level: 75,
  },
  {
    name: 'Node.js',
    icon: '🟢',
    description: 'Construção de APIs RESTful e aplicações backend escaláveis.',
    level: 80,
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Desenvolvimento backend e automação de processos.',
    level: 80,
  },
  {
    name: 'MySQL',
    icon: '🗄️',
    description: 'Gerenciamento de bancos de dados relacionais.',
    level: 75,
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    description: 'Banco de dados relacional avançado com recursos extensíveis.',
    level: 78,
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Containerização e orquestração de aplicações.',
    level: 70,
  },
  {
    name: 'HTML',
    icon: '🌐',
    description: 'Estruturação de páginas web com foco em semântica e acessibilidade.',
    level: 90,
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Estilização moderna com Flexbox, Grid e animações.',
    level: 85,
  },
];

const Languages = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Minhas Habilidades
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{lang.icon}</span>
              <h3 className="text-xl font-semibold">{lang.name}</h3>
            </div>
            <p className="text-gray-300 mb-4">{lang.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${lang.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="bg-blue-500 h-2.5 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Languages;