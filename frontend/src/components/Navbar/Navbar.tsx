import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

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

        {/* Desktop Navigation */}
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
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile">
          <button className="navbar-mobile-button">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 