import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/homepage/Homepage.tsx'; 
import Calendar from './pages/calendar/Calendar.tsx';
import Favorites from './pages/favorites/Favorites.tsx';
import Profile from './pages/profile/Profile.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} /> 
    </Routes>
  </Router>
</StrictMode>,
);
