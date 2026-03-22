import "./database-login-style.css";

export default function Login() {
  return (
    <>
      <div className="wrapper">
        <span className="tagtitle">Login</span>
        <div className="inputs1">
          <img src="./OIP4.jpg" className="mailima" alt="email icon" />
          <input type="email" name="Email" id="Email" placeholder="Email" />
        </div>
        <div className="inputs2">
          <img src="./OIP4.jpg" className="pass" alt="password icon" />
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
          />
        </div>
        <button className="login">Submit</button>
        <div>
          <span className="forgotten">Forgot password?</span>
          <span className="unknown">Sign in</span>
        </div>
      </div>
    </>
  );
}
