import express from "express";
import { addPost } from "../controller/postController.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json("This is post");
// });

router.get("/test", addPost);

export default router;
