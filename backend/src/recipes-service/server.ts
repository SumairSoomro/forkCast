import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipes.routes";

dotenv.config();

const app = express();
const PORT =  4002;

app.use(cors());
app.use(express.json());

app.use("/recipes", recipeRoutes);

app.get("/", (_req, res) => {
  res.send("Recipe Service is running!");
});

app.listen(PORT, () => {
  console.log(`Recipe Service running on http://localhost:${PORT}`);
});