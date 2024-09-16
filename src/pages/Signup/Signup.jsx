import { useState } from 'react';
import { useCustomNavigate } from '../../utils/navigate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import './Signup.css';

const Signup = () => {
  const navigateTo = useCustomNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful signup
        console.log(userCredential);
        navigateTo('login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="wrapper">
      <div className="account">
        <form onSubmit={handleSignup}>
          <h2>Sign up account</h2>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
          {error && <p className="error">{error}</p>}
          <div className="link" onClick={() => navigateTo('login')}>
            Sign in
          </div>
        </form>
        <img src="/images/avt2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Signup;
