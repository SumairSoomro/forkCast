import express from "express";
import {authenticate} from "../middleware/authenticate";
import {addTag, getAllTags} from "../controllers/tags.controller";

const router = express.Router();

router.post("/add", addTag);
router.get("/getall", authenticate, getAllTags);

export default router;