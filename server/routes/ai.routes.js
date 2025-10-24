import express from "express"
import { auth } from "../middlewares/auth.middleware.js"
import { generateArticle, generateBlogTitle } from "../controllers/ai.controller.js"

const Router = express.Router()

Router.post("/generate-article", auth, generateArticle)
Router.post("/generate-blog-title", auth, generateBlogTitle)


export default Router;