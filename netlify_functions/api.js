"use strict";
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

module.exports.handler = serverless(app);
