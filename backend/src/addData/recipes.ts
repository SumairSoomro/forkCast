import { recipes } from "./mocks/mockData";
import { Recipe } from "./mocks/mockTypes";
import fs from "fs/promises";



const toInsert: Recipe[] = recipes;
const addRecipes = async () => {
  for (const recipe of toInsert) {
    //console.log(JSON.stringify(recipe));
    const response = await fetch("http://localhost:4000/recipes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      
      const text = await response.text(); // Get raw response
      console.log("Response text:", text); // See if it's HTML or JSON
      
      if (response.headers.get("content-type")?.includes("application/json")) {
        const data = JSON.parse(text);
        console.log("Parsed JSON:", data);
      } else {
        console.error("Expected JSON but got:", text);
      };
  }
};

const getRecipesByIds = async () => {
    try {
        const response = await fetch("http://localhost:4000/recipes/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: ["03ade5f1-27c8-4e5f-889c-fe4617fa68be", "12853a8b-70b6-4853-932d-18753925e422"] }), // Example IDs
        });
    
        const data = await response.json();
        data.forEach((recipe: any) => {
            console.log(recipe);
            console.log(recipe.ingredients);
            console.log(recipe.instructions);
        });
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

const getAllRecipes = async () => {
  try {
    // Fetch all recipes from the backend
    const response = await fetch("http://localhost:4000/recipes/getAll", {
      method: "POST", // Matches the route in recipes.routes
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes: ${response.statusText}`);
    }

    const data = await response.json();

    // Save the data to a JSON file
    await fs.writeFile("recipes.json", JSON.stringify(data, null, 2), "utf-8");
    console.log("Recipes data has been saved to recipes.json");
  } catch (error) {
    console.error("Error fetching or saving recipes:", error);
  }
};

// Call the function

// addRecipes();
// getRecipesByIds();
getAllRecipes();
