import React from 'react';

import { useNavigate } from 'react-router-dom';
import githubIcon from '../../assets/github-mark.png';

// Tailwind CSS is used instead of a separate CSS file

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  brand: string;
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ brand, items }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-green-600 text-white px-6 py-4 w-full shadow-md sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">{brand}</div>
        <div className="hidden md:flex gap-6 items-center">
          {items.map((item) => (
            <button 
              key={item.path}
              onClick={() => navigate(item.path)}
              className="bg-transparent border-none text-white cursor-pointer text-base px-4 py-2 hover:text-green-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a 
            href="https://github.com/SumairSoomro/forkCast" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center ml-2"
          >
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;