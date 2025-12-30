import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./CreateRecipe.css";

const API_URL = "https://recipebook-nlcw.onrender.com";

export const CreateRecipe = () => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    imageUrl: "",
    ingredients: [],
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cookies.token) {
      alert("Please login to create a recipe");
      navigate("/auth");
      return;
    }

    try {
      await axios.post(
        `${API_URL}/recipes`,
        recipe,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      alert("Recipe created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create recipe");
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          required
        />

        <label>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />

        <label>Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) =>
              handleIngredientChange(index, e.target.value)
            }
          />
        ))}

        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>

        <label>Instructions</label>
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
