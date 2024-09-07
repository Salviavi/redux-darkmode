import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const mode = useSelector((state) => state.theme.mode);

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: userName,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setSuccess("Login successful!");
        localStorage.setItem("access_token", res?.data?.token);
        setError("");
        setTimeout(() => {
          onLogin(); // Call onLogin to update isLoggedIn state in App
        }, 2000);
      })
      .catch((err) => {
        setError(err?.response?.data?.error);
        setSuccess("");
      });
  };

  return (
    <div className={`container ${mode}`}>
      <Navbar />
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
      <h1>Login</h1>
      <label>Username</label>
      <input onChange={handleChangeUsername} type="text" placeholder="Username" />
      <label>Password</label>
      <input onChange={handleChangePassword} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
