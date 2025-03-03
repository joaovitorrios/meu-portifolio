import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: 'Exploring the flask framework',
    issuer: 'Rocketset',
    date: '2024',
    image: 'https://i.ibb.co/jgwdrs1/certificate-3.jpg'
  },
  {
    id: 2,
    title: 'Python fundamentals',
    issuer: 'Rocketset',
    date: '2024',
    image: 'https://i.ibb.co/KNn1cWL/certificate-2.jpg'
  },
  {
    id: 3,
    title: 'NLW Pocket Mobile-Kotlin',
    issuer: 'Rocketset',
    date: '2024',
    image: 'https://i.ibb.co/YyrF9XX/certificate-1.jpg'
  },
  {
    id: 4,
    title: 'introduction to Python',
    issuer: 'Rocketset',
    date: '2024',
    image: 'https://i.ibb.co/xKvWc82/certificate.jpg'
  },
  {
    id: 5,
    title: 'IT technician',
    issuer: 'online courses',
    date: '2024',
    image: 'https://i.ibb.co/Z6txbhw/AACA-3493-2f16eb14-853d-49c0-b3af-5f478a60cb2a.jpg'
  },
  {
    id: 6,
    title: 'IT systems design',
    issuer: 'Bradesco foundation',
    date: '2024',
    image: 'https://i.ibb.co/9Nzht5k/AACA-3541-ec58c43a-2b49-4825-9139-793632d58125.jpg'
  },
  {
    id: 7,
    title: 'create a simple website using html, css and javascript',
    issuer: 'Bradesco foundation',
    date: '2024',
    image: 'https://i.ibb.co/1TCfF07/AACA-3542-b1c0087d-fc6f-428a-8231-d390aa8d77d8.jpg'
  },
  {
    id: 8,
    title: 'Python programming language',
    issuer: 'Bradesco foundation',
    date: '2024',
    image: 'https://i.ibb.co/fnbHqwY/AACA-3543-a31a50b4-f79f-4766-a51f-b0bd4a8dd097.jpg'
  },
  {
    id: 9,
    title: 'programming logic',
    issuer: 'Danki Code',
    date: '2024',
    image: 'https://i.ibb.co/Vm2DLrb/Logica-de-Progrma-o-Dank-Code.jpg'
  },
    
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Certificados
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-48">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;