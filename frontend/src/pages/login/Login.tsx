import { useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";




const AuthFormContainer = ({ children }: { children: React.ReactNode }) => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '16px' }}>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );

const AuthHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: '2rem' }}>
    {children}
  </h2>
);

const AuthForm = ({ children, onSubmit }: { 
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}) => (
  <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={onSubmit}>
    {children}
  </form>
);

const AuthInput = ({
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '1rem' }}
    />
  </div>
);

const AuthButton = ({ children }: { children: string }) => (
  <button
    type="submit"
    style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: '500', fontSize: '1rem', cursor: 'pointer' }}
  >
    {children}
  </button>
);

const AuthLink = ({ text, linkText, onClick }: {
  text: string;
  linkText: string;
  onClick: () => void;
}) => (
  <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280', marginTop: '1.5rem' }}>
    {text} {" "}
    <button
      type="button"
      onClick={onClick}
      style={{ color: '#4f46e5', fontWeight: '500', cursor: 'pointer', border: 'none', background: 'none' }}
    >
      {linkText}
    </button>
  </p>
);

export const Signup = ({ onSwitchToLogin }: { onSwitchToLogin: () => void }) => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    setLoading(true);
    setError("");
  
    try {
      const res = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password,username })
      });
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(data.error || "Signup failed");
  
      const token = data.data.session.access_token;
      localStorage.setItem("access_token", token);
      setIsLoggedIn(true);
  
      navigate("/homepage");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  return (
    <AuthFormContainer>
      <AuthHeading>Create Account</AuthHeading>
      <AuthForm onSubmit={handleSignup}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <AuthInput type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <AuthInput type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <AuthInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <AuthInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        {loading && <p>Creating account...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <AuthButton>Sign Up</AuthButton>
        <AuthLink text="Already have an account?" linkText="Login" onClick={onSwitchToLogin} />
      </AuthForm>
    </AuthFormContainer>
  );
};

export const Login = ({ onSwitchToSignup }: { onSwitchToSignup: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(data.error || "Login failed");
  
      const token = data.data.session.access_token;
      localStorage.setItem("access_token", token);
      setIsLoggedIn(true);
      
      alert("Login successful!");
      navigate("/homepage");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <AuthFormContainer>
      <AuthHeading>Welcome Back</AuthHeading>
      <AuthForm onSubmit={handleLogin}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <AuthInput type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <AuthInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {loading && <p>Logging in...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <AuthButton>Login</AuthButton>
        <AuthLink text="Don't have an account?" linkText="Sign Up" onClick={onSwitchToSignup} />
      </AuthForm>
    </AuthFormContainer>
  );
};
