import React, { useState } from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState('');  // Track the selected city
    const [weather, setWeather] = useState(null); // Store weather data
    const [error, setError] = useState('');  // Store error messages

    // Your OpenWeather API key
    const apiKey = '40dc3f29c1dc42482d5d22631077eed2';

    // List of cities to choose from
    const cities = [
        'Phnom Penh', 'Denizli', 'Sydney', 'Istanbul'
    ];

    // Function to fetch weather from OpenWeather API
    const getWeather = async () => {
        if (!city) {
            setError('Please select a city');  // If no city is selected, show error
            return;
        }

        setError('');  // Clear any previous error
        setWeather(null);  // Clear previous weather data

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );

            if (!response.ok) {
                throw new Error('City not found');  // Handle API failure
            }

            const data = await response.json();

            // Convert temperature from Kelvin to Celsius
            const tempInCelsius = (data.main.temp - 273.15).toFixed(1);

            // Set the weather data
            setWeather({
                name: data.name,
                temp: tempInCelsius,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            });
        } catch (err) {
            setError(err.message);  // Show error if something goes wrong
        }
    };

    return (
        <div className="WeatherContainer" style={{ textAlign: 'center', padding: '2em' }}>
            <h2>Weather App</h2>

            {/* Dropdown for selecting a city */}
            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}  // Update city on change
            >
                <option value="">Select a city</option>
                {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            {/* Search button */}
            <button onClick={getWeather} style={{ marginLeft: '1em' }}>Search</button>

            {/* Display error if any */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display weather info */}
            {weather && (
                <div style={{ marginTop: '1em' }}>
                    <h3>{weather.name}</h3>
                    <p>{weather.temp}°C - {weather.description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt="Weather icon"
                    />
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
