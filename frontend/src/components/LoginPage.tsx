import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← add this
import '../css/LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ← add this

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: You can add real validation/auth here later
    navigate('/profile'); // ← navigate to profile on submit
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="logo">BYU</h1>
        <h2 className="subtitle">Speeches</h2>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <div className="links">
            <a href="#">Create Account</a>
            <a href="#">Forgot Password</a>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
