import './Navbar.css';
import Button from '../Button/Button';
import { useCustomNavigate } from '../../utils/navigate';

const Navbar = () => {
  const navigateTo = useCustomNavigate();

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
        <li
          onClick={() => {
            navigateTo('login');
          }}
        >
          Sign in
        </li>
        <li
          onClick={() => {
            navigateTo('signup');
          }}
        >
          Sign up
        </li>
        <li>
          <Button>Get App</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
