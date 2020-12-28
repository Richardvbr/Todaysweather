require("dotenv").config();
const API_KEY = process.env.API_KEY;
const axios = require("axios");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

// Ping server between 0700-2300
let pingServer = () => {
  let time = new Date().getHours();
  if (time >= 7 && time <= 23) {
    const url = 'https://todays-weather-rvbr.herokuapp.com/';
    http.get(url);
  }
}

// Call ping function every 29 minutes 
setInterval(pingServer, 29 * 60 * 1000)

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const urlDarkSky = `https://api.darksky.net/forecast/${API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`;
  axios({
    url: urlDarkSky,
    responseType: 'json'
  }).then(weatherData => res.json(weatherData.data))
});