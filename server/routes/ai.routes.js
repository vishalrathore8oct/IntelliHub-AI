import express from "express"
import { auth } from "../middlewares/auth.middleware.js"
import { generateArticle } from "../controllers/ai.controller.js"

const Router = express.Router()

Router.post("/generate-article", auth, generateArticle)

export default Router;