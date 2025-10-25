import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  generateArticle,
  generateBlogTitle,
  generateImage,
  removeImageBackground,
} from "../controllers/ai.controller.js";
import { upload } from "../configs/multer.js";

const Router = express.Router();

Router.post("/generate-article", auth, generateArticle);
Router.post("/generate-blog-title", auth, generateBlogTitle);
Router.post("/generate-image", auth, generateImage);
Router.post(
  "/remove-image-background",
  upload.single("image"),
  auth,
  removeImageBackground
);

export default Router;
