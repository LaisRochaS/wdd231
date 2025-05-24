async function fetchWeather() {
  const apiKey = 'f801ca2a97c4a75fa9a2088bfe604740';
  const city = 'Winter Garden, FL, US';
  const units = 'imperial';

  try {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
    
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(weatherURL),
      fetch(forecastURL)
    ]);
    
    if (!weatherResponse.ok || !forecastResponse.ok) throw new Error("Weather API error");

    const weather = await weatherResponse.json();
    const forecast = await forecastResponse.json();

    document.getElementById('current-temp').textContent = `Temperature: ${weather.main.temp}°F`;
    document.getElementById('weather-desc').textContent = `Conditions: ${weather.weather[0].description}`;

    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';
    const forecastItems = forecast.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 3);

    forecastItems.forEach(item => {
      const div = document.createElement('div');
      const date = new Date(item.dt_txt);
      div.textContent = `${date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}: ${item.main.temp}°F`;
      forecastContainer.appendChild(div);
    });

  } catch (error) {
    console.error('Weather fetch error:', error);
    document.getElementById('weather-desc').textContent = "Unable to load weather.";
  }
}

fetchWeather();

