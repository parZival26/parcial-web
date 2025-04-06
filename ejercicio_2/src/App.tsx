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
      <FaUser />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="checkbox"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />
      <label>Remember me</label>
      <button onClick={handleSignIn} disabled={!username || !password}>
        Sign in
      </button>
      <a href="#">Forgot password?</a>
    </div>
  );
}

export default App;
