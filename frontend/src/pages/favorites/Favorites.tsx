import React from 'react';
import './Favorites.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Favorites: React.FC = () => {

  const navItems = [
    { label: 'Homepage', path: '/homepage' },
    { label: "Profile", path: "/profile" },
    { label: "Calendar", path: "/calendar" },
    { label: "Favorites", path: "/favorites" },
    { label: 'Contact Us', path: '/contact' }
  ];
  return (
    <div className="calendar-page">
      <Navbar brand="Forkcast" items={navItems} />
   
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <p className="text-gray-700">Welcome to your profile page! Here you can view and edit your profile information.</p>
      </div>

      <Footer/>
    </div>
  );
};

export default Favorites;
