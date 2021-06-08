const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 9000;

let app = express();

app.use(express.static(path.join(__dirname, "dist")));

app
  .get("*", cors(), (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
