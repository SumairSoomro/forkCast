import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Contact from './pages/Contact';
import { Signup, Login } from "./pages/Login";

function Home() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/contact')}>Go to Contact</button>
      <div>
        {isLogin ? (
          <Login onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
