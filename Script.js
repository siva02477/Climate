async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found!');
            return;
        }

        const weatherHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <p><strong>${data.weather[0].description.toUpperCase()}</strong></p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weatherInfo').innerHTML = weatherHTML;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Could not fetch weather data.');
    }
}
