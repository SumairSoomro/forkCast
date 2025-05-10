import fs from "fs";
import path from "path";
import { recipes } from "./mocks/mockData";

// // File path for the output JSON
// const outputFilePath = path.join(__dirname, "tags.json");

// // Extract all unique tags
// const uniqueTags = Array.from(
//   new Set(recipes.flatMap((recipe) => recipe.tags))
// );

// // Write the unique tags to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(uniqueTags, null, 2), "utf-8");

// console.log("Unique tags have been written to tags.json!");

const addTags = async () => {
    try {
      // Load tags from tags.json
      const tagsFilePath = path.join(__dirname, "tags.json");
      const tags: string[] = JSON.parse(fs.readFileSync(tagsFilePath, "utf-8"));
  
      // Loop through each tag and send a POST request to the API
      for (const tag of tags) {
        const response = await fetch("http://localhost:4000/tags/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: tag }),
        });
  
        const data = await response.json();
        console.log(data);
      }
  
      console.log("All tags have been processed!");
    } catch (error) {
      console.error("Error adding tags to the database:", error);
    }
  };

  const getAllTags = async () => {
    try {
      const response = await fetch("http://localhost:4000/tags/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
  
      // Write the data to a file
      await fs.promises.writeFile("tags.json", JSON.stringify(data, null, 2), "utf-8");
      console.log("Tags data has been written to tags.json");
    } catch (error) {
      console.error("Error fetching or writing tags:", error);
    }
  }
  
  // Call the function
//   addTags();
getAllTags();
export{}