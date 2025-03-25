import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard"; // Import RecipeCard
import { Recipe } from "../../data/recipes";

interface RecipeListProps {
  recipes: Recipe[];
  title: string;
  onRecipeClick: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, title, onRecipeClick }) => {
  return (
    <div className="text-center m-5 w-full overflow-hidden">
      <h2 className="text-2xl mb-5">{title}</h2>
      <div className="flex gap-5 overflow-x-auto py-5 scrollbar-hide">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="last:pr-5" onClick={() => onRecipeClick(recipe)}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
