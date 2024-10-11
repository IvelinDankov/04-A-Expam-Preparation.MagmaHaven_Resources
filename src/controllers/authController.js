import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authService;

// TODO: make here.

authController.get("/register", (req, res) => {
  res.render("auth/register", { title: "register" });
});

authController.post("/register", async (req, res) => {
  const { username, email, password, rePass } = req.body;

  if (password !== rePass) {
    throw new Error("Password must be the same!");
  }

  try {
    await authService.register(username, email, password);
    res.redirect("auth/login");
  } catch (error) {
    res.render("auth/register", { title: "Register Page", username, email });
  }
});

authController.get("/login", (req, res) => {
  res.render("auth/login", { title: "Login Page" });
});

authController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);

    res.cookie("auth", token);
    res.redirect("/");
  } catch (error) {
    console.error(error.message);
    
  }
});

authController.get('/logout', (req, res) => {
  res.clearCookie('auth');

  res.redirect('/');
});

export default authController;
