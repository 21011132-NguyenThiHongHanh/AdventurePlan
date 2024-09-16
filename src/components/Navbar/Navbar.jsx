import './Navbar.css';
import Button from '../Button/Button';
import { useCustomNavigate } from '../../utils/navigate';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const navigateTo = useCustomNavigate();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLogged(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLogged(false);
        navigateTo('');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  const renderAuthLinks = () => {
    return logged ? (
      <li onClick={handleSignOut}>Sign out</li>
    ) : (
      <>
        <li onClick={() => navigateTo('login')}>Sign in</li>
        <li onClick={() => navigateTo('signup')}>Sign up</li>
      </>
    );
  };

  return (
    <div className="navbar">
      <div className="logo-group">
        <div className="logo" onClick={() => navigateTo('')}>
          LOGO
        </div>
        <span onClick={() => navigateTo('')}>AdventurePlan!</span>
      </div>
      <ul className="navigate">
        <li>About</li>
        {renderAuthLinks()}
        <li>
          <Button>Get App</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
