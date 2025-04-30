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

addIngredients();