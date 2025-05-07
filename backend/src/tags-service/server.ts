import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tagRoutes from "./routes/tags.routes";

dotenv.config();

const app = express();
const PORT =  4004;

app.use(cors());
app.use(express.json());

app.use("/tags", tagRoutes);

app.get("/", (_req, res) => {
  res.send("Tags Service is running!");
});

app.listen(PORT, () => {
  console.log(`Tags Service running on http://localhost:${PORT}`);
});