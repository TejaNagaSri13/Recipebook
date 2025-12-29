import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const API_URL = "https://recipebook-nlcw.onrender.com"; 
// 👉 change to http://localhost:3000 for local testing

export const Auth = ({ setIsLoggedIn }) => {
  return (
    <div className="auth">
      <Login setIsLoggedIn={setIsLoggedIn} />
      <Register />
    </div>
  );
};

// ================= LOGIN =================
const Login = ({ setIsLoggedIn }) => {
  const [, setCookies] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      setCookies("token", response.data.token, {
        path: "/",
        sameSite: "strict",
        secure: true, // set false if testing on localhost
      });

      localStorage.setItem("userID", response.data.userID);
      localStorage.setItem("username", response.data.username);

      setIsLoggedIn(true);
      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Invalid credentials. Please try again."
      );
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// ================= REGISTER =================
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(`${API_URL}/register`, {
        email,
        username,
        password,
      });

      alert("Registration successful! Please login.");

      setEmail("");
      setUsername("");
      setPassword("");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Error registering user"
      );
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
