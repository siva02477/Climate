// Get API key from OpenWeatherMap const apikey = 'YOUR_OPENWEATHERMAP_API_KEY';

// Get HTML elements

const searchBtn = document.getElementById('search-btn'); 
const cityInput = document.getElementById('city'); 
const weatherDataDiv = ocument.getElementById('weather-data');

// Add event listener to search button 
searchBtn.addEventListener('click', () => {

// Get city name from input field 
const city = cityInput.value.trim();

// Check if city name is not empty

if (city) {

// Fetch weather data from OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5 /weather?q=${city}&appid=${apiKey}&units=metric^)

.then(response => response.json())

.then(data => {

// Display weather data displayWeatherData(data);

}) .catch(error => console.error(error));

}

});

// Function to display weather data function displayWeatherData(data) {

// Get weather data elements

const weatherData =

<h2>${data.name}</h2>

<p>Temperature: ${data.main.temp}°C</p>

<p>Humidity: ${data.main.humidity}%</p>

<p>Weather: ${data.weather[0].description}</p>

// Display weather data

weather DataDiv.innerHTML = weather Data;

    }
