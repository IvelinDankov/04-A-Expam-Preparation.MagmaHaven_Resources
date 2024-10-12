import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import volController from "./controllers/volController.js"

const router = Router();

// TODO: Add controllers
router.use(homeController);
router.use("/auth", authController);
router.use('/volcanoes', volController);

router.all("*", (req, res) => {
  res.render("home/404");
});

export default router;
