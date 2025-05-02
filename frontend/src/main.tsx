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
import CreateRecipe from './pages/create-recipe/CreateRecipe.tsx';
import { Signup, Login } from "./pages/login/Login.tsx";
import './index.css';
import PrivateRoute from './components/PrivateRoute.tsx';

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
          <Route path="/homepage" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path="/calendar" element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          } />
          <Route path="/favorites" element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/contact" element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          } />
          <Route path="/create-recipe" element={
            <PrivateRoute>
              <CreateRecipe />
            </PrivateRoute>
          } />
          <Route path="/signup" element={<AuthWrapper Component={Signup} />} />
          <Route path="/login" element={<AuthWrapper Component={Login} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
