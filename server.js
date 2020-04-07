// Run dev server: npm run test

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const API_KEY = process.env.API_KEY;
const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {

});

app.listen(3000, () => {
  console.log("Server Started");
});
