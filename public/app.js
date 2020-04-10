// Get user location
window.addEventListener('load', () => {
  // Run when given access
  let success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // Get weather data
    fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude
      })
    }).then(res => res.json()).then(weatherData => {
      // Set weather data
      function setWeatherData() {
        summaryType.textContent = weatherData.currently.summary;
        summaryTemp.textContent = `${Math.round(weatherData.currently.temperature)} °C`;
        dataTemp.textContent = `${Math.round(weatherData.currently.temperature)} °C`;
        dataFeelsLike.textContent = `Feels like ${Math.round(weatherData.currently.apparentTemperature)} °C`;
        dataPrecip.textContent = `${Math.round(weatherData.currently.precipProbability * 100)}%`;
        dataWindSpeed.textContent = `${Math.ceil(weatherData.currently.windSpeed)} km/h`;
        dataUVIndex.textContent = weatherData.currently.uvIndex;
        dataVisDist.textContent = `${Math.round(weatherData.currently.visibility)} km`;
        dataHumidity.textContent = `${Math.round(weatherData.currently.humidity * 100)}%`;
        dataCloudiness.textContent = `${Math.round(weatherData.currently.cloudCover * 100)}%`;

        // Show position and provide google search for position 
        summaryLocation.textContent = `Your location is ${weatherData.latitude.toFixed(4)}, ${weatherData.longitude.toFixed(4)}`;
        const showLocationLink = document.createElement('a');
        showLocationLink.setAttribute('href', `https://google.com/search?q=${weatherData.latitude},${weatherData.longitude}`);
        showLocationLink.target = '_blank'
        showLocationLink.innerHTML = `Open location`;
        showLocationLink.style.cssText = 'font-size: 0.8rem;rem;color:#fff;padding:0.5rem'
        summaryLocation.appendChild(showLocationLink);

        // Weather Icons
        const icon = new Skycons({ color: 'white' });
        icon.set('icon', weatherData.currently.icon)
        icon.play();

        // Set weather background image
        const imageBG = document.querySelector('.summary-left')
        switch (weatherData.currently.icon) {
          case "partly-cloudy-day":
            imageBG.style.background = 'url(/img/overcast.jpg)'
            break
          case "partly-cloudy-night":
            imageBG.style.background = 'url(/img/overcast.jpg)'
            break
          case "cloudy":
            imageBG.style.background = 'url(/img/cloudy.jpg)'
            break
          case "clear-day":
            imageBG.style.background = 'url(/img/sunny.jpg)'
            break
          case "clear-night":
            imageBG.style.background = 'url(/img/sunny.jpg)'
            break
          case "rain":
            imageBG.style.background = 'url(/img/raining.jpg)'
            break
        }

        // Show local time
        function appendZeroInTime(n) {
          if (n <= 9) {
            return "0" + n;
          }
          return n
        }
        const unixTimeStamp = weatherData.currently.time;
        const currentDate = new Date(unixTimeStamp * 1000);
        const time = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear() + " " + appendZeroInTime((currentDate.getHours())) + ':' + appendZeroInTime((currentDate.getMinutes()));
        summaryDate.textContent = time;
      }
      setWeatherData();
    })
  }
  // Run when access is denied
  let error = () => {
    let a = document.createTextNode('This website requires access to your location to function properly');
    let b = document.createTextNode('Please click the lock icon to the left of the URL to change settings')
    let c = document.createTextNode("Or if you're on mobile, please enable location services")
    errorMsg.appendChild(a);
    errorFix.appendChild(b);
    errorFixMobile.appendChild(c);
  }
  // REQUEST LOCATION: Permission --> run success function | Denied --> run error function
  navigator.geolocation.getCurrentPosition(success, error)
})

// Error
const errorMsg = document.getElementById('error-text');
const errorFix = document.getElementById('error-fix')
const errorFixMobile = document.getElementById('error-fix-mobile')

// Summary
const summaryType = document.getElementById('summary-type-content')
const summaryIcon = document.getElementById('summary-type-icon')
const summaryTemp = document.getElementById('summary-temp-content')
const summaryOpenLocation = document.getElementById('summary-open-location')
const summaryLocation = document.getElementById('summary-location-content')
const summaryDate = document.getElementById('summary-date-content')

// Temperature
const dataTemp = document.getElementById('card-temp-temp')
const dataFeelsLike = document.getElementById('card-temp-feelslike')

// Precipitation
const dataPrecip = document.getElementById('card-precip-perc')

// Wind
const dataWindSpeed = document.getElementById('card-wind-speed')
const dataWindDir = document.getElementById('card-wind-direction')
const dataGustSpeed = document.getElementById('card-wind-gust-speed')

// UV - Visibility
const dataUVIndex = document.getElementById('card-uv-index')
const dataVisDist = document.getElementById('card-vis-dist')

// Humidity
const dataHumidity = document.getElementById('card-humidity-perc')

// Cloud coverage
const dataCloudiness = document.getElementById('card-cloud-perc')