import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'To-Do App',
    description: 'Aplicativo de gerenciamento de tarefas com autenticação, sincronização em tempo real e categorização de tarefas. Inclui lembretes e priorização.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    githubUrl: 'https://github.com/Joao895-pg',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Food Delivery Platform',
    description: 'Plataforma completa de delivery com rastreamento em tempo real, sistema de avaliações e integração com diversos restaurantes.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/Joao895-pg',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'E-commerce Dashboard',
    description: 'Dashboard administrativo com análise de vendas, gestão de produtos, relatórios personalizados e integração com sistemas de pagamento.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Node.js', 'MySQL', 'Chart.js'],
    githubUrl: 'https://github.com/Joao895-pg',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Streaming Service',
    description: 'Plataforma de streaming com categorização de conteúdo, sistema de recomendações e player personalizado.',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'FFmpeg'],
    githubUrl: 'https://github.com/Joao895-pg',
    liveUrl: '#'
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Meus Projetos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>Código</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;