import { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up with:", { email, password, username });
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
        <AuthButton>Sign Up</AuthButton>
        <AuthLink text="Already have an account?" linkText="Login" onClick={onSwitchToLogin} />
      </AuthForm>
    </AuthFormContainer>
  );
};

export const Login = ({ onSwitchToSignup }: { onSwitchToSignup: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <AuthFormContainer>
      <AuthHeading>Welcome Back</AuthHeading>
      <AuthForm onSubmit={handleLogin}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <AuthInput type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <AuthInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <AuthButton>Login</AuthButton>
        <AuthLink text="Don't have an account?" linkText="Sign Up" onClick={onSwitchToSignup} />
      </AuthForm>
    </AuthFormContainer>
  );
};

export default Login;
