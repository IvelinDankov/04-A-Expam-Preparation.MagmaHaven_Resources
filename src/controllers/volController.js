import { Router } from "express";
import volService from "../services/volService.js";

const router = Router();



router.get("/create", (req, res) => {
  res.render("volcanoes/create");
});

router.post("/create", async (req, res) => {
  const volData = req.body;
  const ownerId = req.user._id;

  await volService.create(volData, ownerId);

  res.redirect("/volcanoes/catalog");
});

router.get("/catalog", async (req, res) => {
  const volcanoes = await volService.getAll().lean();
  res.render("volcanoes/catalog", { volcanoes });
});

router.get("/:volcanoId/details", async (req, res) => {
  const volcanoId = req.params.volcanoId;

  const volcano = await volService.getOne(volcanoId).lean();

  const isOwner = req.user?._id && req.user._id == volcano.owner;

  res.render(`volcanoes/details`, { volcano, isOwner });
});

router.get("/:volcanoId/edit", async (req, res) => {
  const volcanoId = req.params.volcanoId;

  const volcano = await volService.getOne(volcanoId).lean();
  res.render(`volcanoes/edit`, { volcano });
});

router.post("/:volcanoId/edit", async (req, res) => {
  const volData = req.body;
  const volId = req.params.volcanoId;

  await volService.edit(volId, volData);

  res.redirect(`/volcanoes/${volId}/details`);
});

router.get("/:volcanoId/delete", async (req, res) => {
  const volId = req.params.volcanoId;

  await volService.remove(volId);

  res.redirect("/volcanoes/catalog");
});

export default router;
