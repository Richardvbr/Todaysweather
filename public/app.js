// Get user location
window.addEventListener('load', () => {
  let latitude;
  let longitude;
  let location;
  const errorMsg = document.getElementById('error-text');
  const errorFix = document.getElementById('error-fix')
  // Run when given access
  let success = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    location = `${latitude}, ${longitude}`;
    console.log(location);
  }
  // Run when access is denied
  let error = () => {
    let a = document.createTextNode('Sorry, this website requires access to your location to function properly');
    let b = document.createTextNode('Please click the "i" symbol to the left of the URL to change settings')
    errorMsg.appendChild(a);
    errorFix.appendChild(b);
  }
  navigator.geolocation.getCurrentPosition(success, error)
})

// Get weather data
async function fetchData() {
  let response = fetch()
}



// Variables: weather data
// Summary
const summaryType = document.getElementById('summary-type-content')
const summaryIcon = document.getElementById('summary-type-icon')
const summaryTemp = document.getElementById('summary-temp-content')
const summaryLocation = document.getElementById('summary-location-content')
const summaryDate = document.getElementById('summary-date-content')

// Temperature
const dataTemp = document.getElementById('card-temp-temp')
const dataFeelsLike = document.getElementById('card-temp-feelslike')
const dataMinTemp = document.getElementById('card-temp-min-temp')
const dataMinTime = document.getElementById('card-temp-min-time')
const dataMaxTemp = document.getElementById('card-temp-max-temp')
const dataMaxTime = document.getElementById('card-temp-max-time')

// Precipitation
const dataPrecip = document.getElementById('card-precip-perc')
const dataPrecipMax = document.getElementById('card-precip-max')

// Wind
const dataWindSpeed = document.getElementById('card-wind-speed')
const dataWindDir = document.getElementById('card-wind-direction')
const dataGustSpeed = document.getElementById('card-wind-gust-speed')
const dataGustTime = document.getElementById('card-wind-gust-time')

// Sunrise Sunset
const dataSunrise = document.getElementById('card-sunrise-time')
const dataSunset = document.getElementById('card-sunset-time')

// Humidity
const dataHumidity = document.getElementById('card-humidity-perc')

// Closest storm
const dataStormDeg = document.getElementById('card-storm-deg')
const dataStormDist = document.getElementById('card-storm-dist')
// end of weather data variables