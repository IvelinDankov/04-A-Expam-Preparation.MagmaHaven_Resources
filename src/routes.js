import { Router } from "express";
import  homeController   from "./controllers/homeController.js";

const router = Router();

// TODO: Add controllers

router.use(homeController)


export default router;