import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    alert(
      `Username: ${username}, Password: ${password}, Remember Me: ${rememberMe}`
    );
  };

  return (
    <div className="app">
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
      <button onClick={handleLogin} disabled={!username || !password}>
        Sign in
      </button>
    </div>
  );
}

export default App;
