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


const tagsJsonPath = path.join(__dirname, "../tags.json");

// Function to update tag IDs
const updateTagIdsInRecipes = async () => {
  try {
    // Load tags.json
    const tagsJson = JSON.parse(await fs.readFile(tagsJsonPath, "utf-8"));

    // Create a map of tag name to id
    const tagIdMap: Record<string, string> = {};
    for (const tag of tagsJson) {
      tagIdMap[tag.name] = tag.id;
    }

    // Load mockData.ts as text
    let mockData = await fs.readFile(mockDataPath, "utf-8");

    // Replace tags array with objects containing id and name
    mockData = mockData.replace(
      /tags: \[(.*?)\]/g,  // Match the tags array
      (_, tagsStr) => {
        // Convert the tags string into an array of tag names
        const tagNames = tagsStr.split(',').map((tag: string) => tag.trim().replace(/"/g, ''));
        
        // Map tag names to objects with id and name
        const updatedTags = tagNames.map((tagName: string) => {
          const id = tagIdMap[tagName] ? `"${tagIdMap[tagName]}"` : "null";  // Get ID from map
          return `{ id: ${id}, name: "${tagName}" }`;  // Return the new object format
        });

        return `"tags": [${updatedTags.join(', ')}]`;  // Return the updated tags array
      }
    );

    // Write the result back
    await fs.writeFile(mockDataPath, mockData, "utf-8");
    console.log("✅ Tag IDs updated successfully in mockData.ts");
  } catch (err) {
    console.error("❌ Failed to update tags:", err);
  }
};

// updateIngredientIds();
updateTagIdsInRecipes();

