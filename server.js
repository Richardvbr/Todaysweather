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
  const urlDarkSky = `https://api.darksky.net/forecast/${API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`;
  axios({
    url: urlDarkSky,
    responseType: 'json'
  }).then(weatherData => res.json(weatherData.data))
});

app.listen(3000, () => {
  console.log("Server Started");
});
