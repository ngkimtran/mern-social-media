import './login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Reactsocial</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Reactsocial.
          </span>
        </div>

        <div className="login-right">
          <div className="login-box">
            <input type="email" placeHolder="Email" className="login-input" />
            <input
              type="password"
              placeHolder="Password"
              className="login-input"
            />
            <button className="login-button">Log In</button>
            <button className="register-button">Create A New Account</button>
            <span className="login-forgot">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
