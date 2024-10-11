import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  // console.log(res.user.userId);
  res.render("home");
});

router.get("/authorized", (req, res) => {
  res.send(req.user);
});

export default router;
