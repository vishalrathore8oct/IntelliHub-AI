import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  generateArticle,
  generateBlogTitle,
  generateImage,
  removeImageBackground,
  removeImageObject,
  resumeReview,
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
Router.post(
  "/remove-image-object",
  upload.single("image"),
  auth,
  removeImageObject
);
Router.post("/resume-review", upload.single("resume"), auth, resumeReview);

export default Router;
