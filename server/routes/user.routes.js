import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { getUserCreations, getPublishedCreations, toggleLikeCreation } from "../controllers/user.controller.js";

const Router = express.Router();

Router.get("/get-user-creations", auth, getUserCreations);
Router.get("/get-published-creations", auth, getPublishedCreations);
Router.post("/toggle-like-creation", auth, toggleLikeCreation);

export default Router;
