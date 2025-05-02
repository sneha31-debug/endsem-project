import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Simple regex to check email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate login success
    setIsLoggedIn(true);
    setError('');
    alert('Login Successful!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {!isLoggedIn ? (
          <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button type="submit" className="login-button">Login</button>
            </form>
          </>
        ) : (
          <>
            <h2>Welcome back!</h2>
            <p>You have successfully logged in.</p>
            <a href="/" className="login-button">Go to Home Page</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
