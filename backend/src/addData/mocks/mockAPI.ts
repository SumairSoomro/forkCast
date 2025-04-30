import { recipes, mealPlan } from './mockData';


export const fetchRecipes = (): Promise<typeof recipes> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(recipes);
        }, 1000);
    })
}

export const fetchMealPlan = (): Promise<typeof mealPlan> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mealPlan);
        }, 1000);
    })
}