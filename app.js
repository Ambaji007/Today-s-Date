const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let add = new Date();
  response.send(`${Date.getDate()} - ${Date.getMonth()} - ${Date.getYear}`);
  console.log(add);
});

module.exports = app;
