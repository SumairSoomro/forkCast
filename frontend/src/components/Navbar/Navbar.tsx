import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import  githubIcon  from '../../assets/github-mark.png';

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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">{brand}</div>
        <div className="navbar-links">
          {items.map((item) => (
            <button 
              key={item.path}
              onClick={() => navigate(item.path)}
              className="navbar-link"
            >
              {item.label}
            </button>
          ))}

          <a 
            href="https://github.com/SumairSoomro/forkCast" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link"
          >
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar; 