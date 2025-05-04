import fs from "fs/promises";

import { shelfLife } from "./mocks/mockData";


const ingredients = Object.entries(shelfLife).map(([name, shelf_life]) => ({
    name,
    shelf_life,
  }));

const addIngredients = async () => {
  for (const ingredient of ingredients) {
    // console.log(JSON.stringify(ingredient));
    const response = await fetch("http://localhost:4000/ingredients/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredient),
    });

    const data = await response.json();
    console.log(data);
  }
};


const getAllIngredients = async () => {
  try {
    const response = await fetch("http://localhost:4000/ingredients/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // Write the data to a file
    await fs.writeFile("ingredients.json", JSON.stringify(data, null, 2), "utf-8");
    console.log("Ingredients data has been written to ingredients.json");
  } catch (error) {
    console.error("Error fetching or writing ingredients:", error);
  }
};

getAllIngredients();