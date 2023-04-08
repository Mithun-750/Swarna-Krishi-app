import React, { useEffect, useState } from 'react';
import './weather.css';
// import '../../weather'

const API_KEY = "bb0b606c149a4f65ab2154447230404";

const Weather = ({ location }) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
                const data = await response.json();
                setCurrentWeather(data);
                console.log(`../../weather${(currentWeather.current.condition.icon).slice(20)}`)
                setIsError(false);
            } catch (error) {
                setIsError(true);
                console.error("Error fetching current weather:", error);
            }
        };

        const fetchForecastWeather = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`);
                const data = await response.json();
                setForecastWeather(data);
                setIsError(false);
            } catch (error) {
                console.error("Error fetching forecast:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCurrentWeather();
        fetchForecastWeather();
    }, []);

    if (isLoading) {
        return <div className='loader' ></div>;
    }
    if (isError) {
        return <div > Error getting data </div>;
    }

    return (
        <div className="weather-container">
            {currentWeather && (
                <div className="current-weather">
                    <h2>Current weather in {currentWeather.location.name}</h2>
                    <div className="temperature">{currentWeather.current.temp_c}°C</div>
                    <div className="condition">{currentWeather.current.condition.text}</div>
                    <img className='conditionIcon' src={`./src/assets${(currentWeather.current.condition.icon).slice(20)}`} alt={currentWeather.current.condition.text} />
                </div>
            )}


            {forecastWeather && (
                <div className="forecast-weather">
                    <h2>7-day forecast for {forecastWeather.location.name}</h2>
                    <div className="forecast-days">
                        {forecastWeather.forecast.forecastday.map((day) => (
                            <div key={day.date} className="forecast-day">
                                <div className="date">{day.date}</div>
                                <div className="temperature">{day.day.avgtemp_c}°C</div>
                                <div className="condition">{day.day.condition.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
