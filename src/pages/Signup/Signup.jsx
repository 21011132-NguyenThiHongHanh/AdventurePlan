import { useCustomNavigate } from '../../utils/navigate';
import './Signup.css';

const Signup = () => {
  const navigateTo = useCustomNavigate();

  return (
    <div className="wrapper">
      <div className="account">
        <form action="">
          <h2>Sign up account</h2>
          <input type="email" id="email" placeholder="Enter your email" required />
          <input type="password" id="password" placeholder="Password" required />
          <input type="password" id="confirm-password" placeholder="Confirm Password" required />
          <button type="submit">Confirm</button>
          <div
            className="link"
            onClick={() => {
              navigateTo('login');
            }}
          >
            Sign in
          </div>
        </form>
        <img src="/images/avt2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Signup;
