import React from "react";
import "./RecipeCard.css"; // Import external CSS
import { Recipe } from "../../mocks/mockTypes";

interface RecipeProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <p className="cuisine">{recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime} mins</p>
        <p><strong>Ratings:</strong> ⭐ {recipe.ratings.average} ({recipe.ratings.count} reviews)</p>
      </div>
    </div>
  );
};

export default RecipeCard;
