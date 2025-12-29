import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { CreateRecipe } from "./pages/CreateRecipe";
import Contact from "./pages/Contact";
import Food from "./pages/Food";
import Food2 from "./pages/Food2";
import Food3 from "./pages/Food3";
import Food4 from "./pages/Food4";
import { Auth } from "./pages/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("username");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route */}
        <Route
          path="/create-recipe"
          element={
            isLoggedIn ? <CreateRecipe /> : <Navigate to="/auth" />
          }
        />

        <Route path="/food" element={<Food />} />
        <Route path="/food2" element={<Food2 />} />
        <Route path="/food3" element={<Food3 />} />
        <Route path="/food4" element={<Food4 />} />

        {/* Auth Route */}
        <Route
          path="/auth"
          element={<Auth setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
