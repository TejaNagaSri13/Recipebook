import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const API_URL = "https://recipebook-nlcw.onrender.com";
// use http://localhost:3000 for local testing

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${API_URL}/recipes`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-container">

      {/* Header */}
      <div className="title-img">
        <img src="/image1.jpeg" className="img-fluid1" alt="Recipe Banner" />
      </div>

      <h1>Welcome to Recipe Book!</h1>
      <p>Discover delicious recipes and cooking ideas.</p>

      {/* Recipes Section */}
      <section className="recipes-section">
        <h2>Recipes</h2>

        <div className="recipes-container">
          {recipes.length === 0 ? (
            <p>No recipes available.</p>
          ) : (
            recipes.map((recipe) => (
              <div key={recipe._id} className="recipe-card">
                <h3>{recipe.name}</h3>

                {recipe.imageUrl && (
                  <img src={recipe.imageUrl} alt={recipe.name} />
                )}

                <p><strong>Description:</strong> {recipe.description}</p>

                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4>Instructions:</h4>
                <p>{recipe.instructions}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Categories */}
      <div className="home-nav-cat">
        <h2>Category</h2>
        <div className="flex-container">
          <div className="category-item" onClick={() => navigate("/food")}>Salads</div>
          <div className="category-item" onClick={() => navigate("/food2")}>Snacks</div>
          <div className="category-item" onClick={() => navigate("/food4")}>Breakfast</div>
          <div className="category-item" onClick={() => navigate("/food3")}>Desserts</div>
        </div>
      </div>

      {/* Contact */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>📞 Phone: +91 9390188535</p>
        <p>📍 Location: Tanuku, India</p>
        <p>📧 Email: tejanagasri3@gmail.com</p>
      </section>
    </div>
  );
};

export default Home;
