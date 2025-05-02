export interface Recipe {
    id: string;
    title: string;
    description: string;
    cuisine: string;
    prepTime: number;
    cookTime: number;
    servings: number;
    difficulty: string;
    imageUrl: string | null; 
    views: number;
  }
  