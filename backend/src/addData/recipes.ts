import { recipes } from "./mocks/mockData";
import { Recipe } from "./mocks/mockTypes";



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

addRecipes();
