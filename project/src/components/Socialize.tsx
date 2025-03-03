import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

const Socialize = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'João Silva',
      content: 'Ótimo trabalho! Continue assim!',
      date: '2024-02-20'
    },
    {
      id: 2,
      author: 'Maria Santos',
      content: 'Seus projetos são muito interessantes.',
      date: '2024-02-19'
    }
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Minha Jornada na Programação',
      content: 'Compartilhando um pouco sobre minha experiência aprendendo desenvolvimento web...',
      date: '2024-02-18'
    },
    {
      id: 2,
      title: 'Novo Projeto em Desenvolvimento',
      content: 'Estou trabalhando em um projeto empolgante usando React e Node.js...',
      date: '2024-02-15'
    }
  ]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        {
          id: comments.length + 1,
          author: 'Visitante',
          content: comment,
          date: new Date().toISOString().split('T')[0]
        },
        ...comments
      ]);
      setComment('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8">Últimas Atualizações</h2>
          <div className="space-y-6">
            {posts.map(post => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.content}</p>
                <time className="text-sm text-gray-400">{post.date}</time>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8">Comentários</h2>
          
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Deixe seu comentário..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <Send size={20} />
                Enviar
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map(comment => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={16} className="text-blue-400" />
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-sm text-gray-400">• {comment.date}</span>
                </div>
                <p className="text-gray-300">{comment.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Socialize;