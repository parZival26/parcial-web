import { useState } from "react";
import "./App.css";
import { FaUser } from "react-icons/fa";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log(
      `Username: ${username}, Password: ${password}, Remember Me: ${rememberMe}`
    );
  };

  return (
    <div className="app">
      <div className="circles_container">
        <div className="circle_1"></div>
        <div className="circle_2"></div>
      </div>
      <div className="icon">
        <FaUser />
      </div>
      <div className="container_text_input">
        <input
          className="text_input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="text_input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="container_remember_me">
        <input
          className="checkbox"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label className="label_remember_me">Remember me</label>
      </div>
      <button
        className="sign_in_button"
        onClick={handleSignIn}
        disabled={!username || !password}
      >
        Sign in
      </button>
      <a className="forgot_password" href="#">
        Forgot password?
      </a>
    </div>
  );
}

export default App;
