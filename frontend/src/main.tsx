import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Add Router, Route, Routes
import './index.css';
import App from './App.tsx';
import HomePage from './pages/homepage/Homepage.tsx'; // You may need to create this as a separate component


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  </Router>
</StrictMode>,
);
