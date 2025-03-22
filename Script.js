// Function to calculate weather conditions
function calculateWeather(temperature, humidity, windSpeed) {
    let weatherCondition = '';

    // Calculate weather condition based on temperature
    if (temperature < 0) {
        weatherCondition = 'Freezing';
    } else if (temperature < 15) {
        weatherCondition = 'Cold';
    } else if (temperature < 25) {
        weatherCondition = 'Mild';
    } else if (temperature < 35) {
        weatherCondition = 'Warm';
    } else {
        weatherCondition = 'Hot';
    }

    // Calculate weather condition based on humidity
    if (humidity > 80) {
        weatherCondition += ' and Humid';
    } else if (humidity < 40) {
        weatherCondition += ' and Dry';
    }

    // Calculate weather condition based on wind speed
    if (windSpeed > 15) {
        weatherCondition += ' with Strong Winds';
    } else if (windSpeed > 5) {
        weatherCondition += ' with Gentle Winds';
    }

    return weatherCondition;
}

// Example usage
const temperature = 22; // in Celsius
const humidity = 60; // in percentage
const windSpeed = 10; // in km/h

const weatherCondition = calculateWeather(temperature, humidity, windSpeed);
console.log(`The weather condition is: ${weatherCondition}`);
