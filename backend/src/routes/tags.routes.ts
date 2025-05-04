import express from "express";
import {addTag, getAllTags} from "../controllers/tags.controller";

const router = express.Router();

router.post("/add", addTag);
router.get("/getall", getAllTags);

export default router;