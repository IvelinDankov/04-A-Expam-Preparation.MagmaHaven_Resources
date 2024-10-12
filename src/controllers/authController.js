import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../util/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const router = Router();

// TODO: make here.

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, rePass } = req.body;

  if (password !== rePass) {
    throw new Error("Password must be the same!");
  }

  try {
    await authService.register(username, email, password, rePass);

    const token = await authService.login(email, password);

    res.cookie("auth", token, { httpOnly: true });

    res.redirect("/");
  } catch (err) {
    const error = getErrorMessage(err);
    res.render("auth/register", { username, email, error });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);

    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/");
  } catch (err) {
    const error = getErrorMessage(err);
    res.render("auth/login", { error });
  }
});

router.get("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");

  res.redirect("/");
});

export default router;
