import { Router } from "express";
import volService from "../services/volService.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/search",async (req, res) => {
  const filter = req.query;
  const allVolcanoes = await volService.getAll().lean()

  res.render("home", { isSearch: true, allVolcanoes, filter });
});

export default router;
