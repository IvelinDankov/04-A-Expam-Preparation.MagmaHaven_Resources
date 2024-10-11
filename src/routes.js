import { Router } from "express";
import homeController from "./controllers/homeController.js";

const router = Router();

router.use(homeController);

// TODO: Add controllers

homeController.all("*", (req, res) => {
  res.render("home/404", { title: "404 Page" });
});

export default router;
