import React from "react";
import { Recipe } from "../../data/recipes";

interface RecipeProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="w-[300px] border border-gray-300 rounded-lg overflow-hidden shadow transition-transform duration-200 hover:scale-105">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="mb-2.5 text-lg">{recipe.title}</h3>
        <p className="italic text-gray-500">{recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime} mins</p>
        <p><strong>Ratings:</strong> ⭐ {recipe.ratings.average} ({recipe.ratings.count} reviews)</p>
      </div>
    </div>
  );
};

export default RecipeCard;