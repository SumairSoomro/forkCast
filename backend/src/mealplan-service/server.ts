import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import topRecRoutes from "./routes/mealplan.routes";

dotenv.config();

const app = express();
const PORT =  4006;

app.use(cors());
app.use(express.json());

app.use("/mealplan", topRecRoutes);

app.get("/", (_req, res) => {
  res.send("Mealplan service is Running!");
});

app.listen(PORT, () => {
  console.log(`Meal Plan Service running on http://localhost:${PORT}`);
});