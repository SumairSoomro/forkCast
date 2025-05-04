import fs from "fs/promises";
import path from "path";

// File paths
const ingredientsJsonPath = path.join(__dirname, "../ingredients.json");
const mockDataPath = path.join(__dirname, "mockData.ts");

// Function to update ingredient IDs
const updateIngredientIds = async () => {
  try {
    // Load ingredients.json
    const ingredientsJson = JSON.parse(await fs.readFile(ingredientsJsonPath, "utf-8"));

    // Create a map of ingredient name to id
    const ingredientIdMap: Record<string, string> = {};
    for (const ingredient of ingredientsJson) {
      ingredientIdMap[ingredient.name] = ingredient.id;
    }

    // Load mockData.ts as text
    let mockData = await fs.readFile(mockDataPath, "utf-8");

    // Replace each ingredient object with an updated one
    mockData = mockData.replace(
      /{ id: null, name: "(.*?)", quantity: (.*?), unit: "(.*?)" }/g,
      (_, name, quantity, unit) => {
        const id = ingredientIdMap[name] ? `"${ingredientIdMap[name]}"` : "null";
        return `{ id: ${id}, name: "${name}", quantity: ${quantity}, unit: "${unit}" }`;
      }
    );

    // Write the result back
    await fs.writeFile(mockDataPath, mockData, "utf-8");
    console.log("✅ Ingredient IDs updated successfully in mockData.ts");
  } catch (err) {
    console.error("❌ Failed to update ingredients:", err);
  }
};

updateIngredientIds();
