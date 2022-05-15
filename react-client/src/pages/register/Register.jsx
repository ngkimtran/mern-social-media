import './register.css';

const Register = () => {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">Reactsocial</h3>
          <span className="register-desc">
            Connect with friends and the world around you on Reactsocial.
          </span>
        </div>

        <div className="register-right">
          <div className="register-box">
            <input
              type="text"
              placeHolder="Username"
              className="register-input"
            />
            <input
              type="email"
              placeHolder="Email"
              className="register-input"
            />
            <input
              type="password"
              placeHolder="Password"
              className="register-input"
            />
            <input
              type="password"
              placeHolder="Password Again"
              className="register-input"
            />
            <button className="reg-register-button">Sign up</button>
            <button className="reg-login-button">Log In To Your Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
