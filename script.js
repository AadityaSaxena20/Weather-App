async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "2cf0b7ccb1688a62473fd0c2362faf03"; // Replace this
    const weatherDiv = document.getElementById('weatherResult');
  
    if (!city) {
      weatherDiv.innerHTML = `<p>Please enter a city name.</p>`;
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        weatherDiv.innerHTML = `<p>City not found. Try again.</p>`;
      } else {
        weatherDiv.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>${data.weather[0].description}</p>
          <p>🌡️ Temp: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>💨 Wind: ${data.wind.speed} m/s</p>
        `;
      }
    } catch (error) {
      weatherDiv.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
      console.error(error);
    }
  }
  