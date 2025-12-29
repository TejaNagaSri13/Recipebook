import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [, , removeCookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookies("token", { path: "/" });
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          PakkaSwad
        </Link>
      </h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {isLoggedIn && (
          <li><Link to="/create-recipe">Create Recipe</Link></li>
        )}

        <li><Link to="/contact">Contact</Link></li>

        {!isLoggedIn ? (
          <li><Link to="/auth">Login / Register</Link></li>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
