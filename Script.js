const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById("location").innerText = data.name;
        document.getElementById("condition").innerText = data.weather[0].description;

        // Change icon based on weather condition
        const weatherIcon = document.querySelector(".weather-icon");
        const weatherMain = data.weather[0].main.toLowerCase();

        if (weatherMain.includes("clear")) {
            weatherIcon.innerText = "☀️";
        } else if (weatherMain.includes("cloud")) {
            weatherIcon.innerText = "☁️";
        } else if (weatherMain.includes("rain")) {
            weatherIcon.innerText = "🌧️";
        } else if (weatherMain.includes("snow")) {
            weatherIcon.innerText = "❄️";
        } else {
            weatherIcon.innerText = "⛅";
        }

    } catch (error) {
        alert("Error fetching weather data!");
        console.error(error);
    }
        }
