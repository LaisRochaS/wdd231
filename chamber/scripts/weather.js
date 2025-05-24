const apiKey = 'YOUR_API_KEY';
const city = 'Winter Garden, FL';
const units = 'imperial'; 

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
  
  const [weatherResponse, forecastResponse] = await Promise.all([
    fetch(url),
    fetch(forecastUrl)
  ]);

  const weatherData = await weatherResponse.json();
  const forecastData = await forecastResponse.json();

  document.getElementById('current-temp').textContent = `Temperature: ${weatherData.main.temp}°F`;
  document.getElementById('weather-desc').textContent = `Conditions: ${weatherData.weather[0].description}`;

  const forecastContainer = document.getElementById('forecast');
  forecastContainer.innerHTML = '';

  const dailyForecasts = forecastData.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 3);
  dailyForecasts.forEach(day => {
    const div = document.createElement('div');
    div.textContent = `${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°F`;
    forecastContainer.appendChild(div);
  });
}

fetchWeather();
