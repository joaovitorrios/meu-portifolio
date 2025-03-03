import React from 'react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  mobile?: boolean;
  closeMobileMenu?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentSection, 
  setCurrentSection, 
  mobile,
  closeMobileMenu 
}) => {
  const handleClick = (section: string) => {
    setCurrentSection(section);
    if (mobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'languages', label: 'Linguagens' },
    { id: 'projects', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'contact', label: 'Contato' }
  ];

  const baseClasses = "transition-colors duration-300";
  const mobileClasses = mobile ? "block w-full text-left px-4 py-2 hover:bg-blue-800/50 rounded" : "";
  const activeClasses = "text-blue-400 font-medium";
  const inactiveClasses = "text-gray-300 hover:text-white";

  return (
    <div className={mobile ? "space-y-2" : "flex space-x-8"}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`
            ${baseClasses}
            ${mobileClasses}
            ${currentSection === item.id ? activeClasses : inactiveClasses}
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;