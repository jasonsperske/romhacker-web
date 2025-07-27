import express from "express";
import expressStatic from "express-static";
import expressLayouts from "express-ejs-layouts";

import game from "./routes/game.js";
import hack from "./routes/hack.js";
import search from "./routes/search.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "_layout");
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to RomHacker Web",
    message:
      "This is a site like RomHacking.net but with online IPS Patching and search by ROM support.",
  });
});

app.use("/game", game);
app.use("/hack", hack);
app.use("/search", search);

app.use(expressStatic("static"));

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
