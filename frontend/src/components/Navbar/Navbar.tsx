import React from 'react';
//import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
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
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
    const token = localStorage.getItem("access_token");
    await fetch("http://localhost:4000/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    navigate("/");
  };

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


          {isLoggedIn ? (
            <button onClick={handleLogout} className="navbar-link logout-button">
              Log Out
            </button>
          ) : (
            <button onClick={() => navigate('/login')} className="navbar-link">
              Log In
            </button>
          )}
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
