document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    getWeather(location);
});

function getWeather(location) {
    const apiKey = 'ebbf123412ce9b43ba516121859333c6'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    document.getElementById('city').textContent = data.name;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity} %`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.querySelector('.weather-info').style.display = 'block';
}
