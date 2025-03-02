import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App.tsx';
import HomePage from './pages/homepage/Homepage.tsx'; 
import Calendar from './pages/calendar/Calendar.tsx';
import Favorites from './pages/favorites/Favorites.tsx';
import Profile from './pages/profile/Profile.tsx';
import Contact from './pages/contact/Contact.tsx';
import { Signup, Login } from "./pages/login/Login.tsx";
import './index.css';

const AuthWrapper = ({ Component }: { Component: typeof Login | typeof Signup }) => {
  const navigate = useNavigate();
  return <Component onSwitchToLogin={() => navigate('/login')} onSwitchToSignup={() => navigate('/signup')} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<AuthWrapper Component={Signup} />} />
          <Route path="/login" element={<AuthWrapper Component={Login} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
