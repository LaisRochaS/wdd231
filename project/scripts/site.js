document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

  document.getElementById("getWeather").addEventListener("click", () => {
    const location = document.getElementById("locationInput").value;
    const apiKey = 'f801ca2a97c4a75fa9a2088bfe604740';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("weatherResult").innerHTML = `
          <h3>Weather in ${data.location.name}</h3>
          <p>${data.current.condition.text}, ${data.current.temp_c}°C</p>
          <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
        `;
      })
      .catch(err => {
        document.getElementById("weatherResult").textContent = "Could not fetch weather data.";
        console.error(err);
      });
  });
});
