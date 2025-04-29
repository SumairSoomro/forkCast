export interface Recipe {
    id: string;
    title: string;
    description: string;
    cuisine: string;
    prepTime: number;
    cookTime: number;
    servings: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    ingredients: object[];
    instructions: string[];
    imageUrl: string;
    tags: string[];
    nutritionalInfo: {
      calories: number;
      protein: number;
      carbs: number;
      fats: number;
    };
    ratings: {
      average: number;
      count: number;
    };
    views: number;
  }

export interface MealTask {
    time: string;
    recipe: string;
  }
  
export interface DaySchedule {
    day: number;
    schedule: MealTask[];
  }

export interface CalendarProps {
    month: string;
    days: DaySchedule[];
}