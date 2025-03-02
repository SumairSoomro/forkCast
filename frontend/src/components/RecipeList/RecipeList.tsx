import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard"; // Import RecipeCard
import "./RecipeList.css"; // Import styles
import { Recipe } from "../../data/recipes";

interface RecipeListProps {
  recipes: Recipe[];
  title: string;
  onRecipeClick: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, title, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} onClick={() => onRecipeClick(recipe)}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
