import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.render("search/index", {
    title: "Search",
    message: "Search for hacks that match your ROM.",
  });
});

export default router;
