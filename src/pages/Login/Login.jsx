import { useCustomNavigate } from '../../utils/navigate';
import './Login.css';

const Login = () => {
  const navigateTo = useCustomNavigate();

  return (
    <div className="wrapper">
      <div className="account">
        <form action="">
          <h2>Sign in</h2>
          <input type="email" id="email" placeholder="Enter your email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Confirm</button>
          <div
            className="link"
            onClick={() => {
              navigateTo('signup');
            }}
          >
            Sign up
          </div>
        </form>
        <img src="/images/avt3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Login;
