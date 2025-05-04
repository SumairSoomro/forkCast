export interface Ingredient {
    id: string | null; 
    name: string;
    quantity: number;
    unit: string;
  }
  
  export interface RecipeIngredient {
    recipe_id: string;
    ingredient_id: number;
    quantity: number;
    unit: string;
  }
  