require("dotenv").config();
const API_KEY = process.env.API_KEY;
const axios = require("axios");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});


app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const urlDarkSky = `https://api.darksky.net/forecast/${API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`;
  axios({
    url: urlDarkSky,
    responseType: 'json'
  }).then(weatherData => res.json(weatherData.data))
});