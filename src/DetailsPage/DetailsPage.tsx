import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { APIKEY, BASEURL } from '@env';

const WeatherComponent = ({ weatherData }) => {
    if (!weatherData) {
        return <Text>Loading...</Text>;
    }

    const { current, location } = weatherData;

    return (
        <View>
            <Text>
                Location: {location.name}, {location.region}, {location.country}
            </Text>
            <Text>
                Temperature: {current.temp_c}°C ({current.temp_f}°F)
            </Text>
            <Text>Condition: {current.condition.text}</Text>
            <Image
                source={{ uri: `http:${current.condition.icon}` }}
                style={{ width: 64, height: 64 }}
            />
            <Text>Humidity: {current.humidity}%</Text>
            <Text>
                Wind: {current.wind_kph} km/h, {current.wind_dir}
            </Text>
            <Text>
                Visibility: {current.vis_km} km ({current.vis_miles} miles)
            </Text>
            <Text>
                Pressure: {current.pressure_mb} mb ({current.pressure_in} in)
            </Text>
        </View>
    );
};

export default WeatherComponent;

export function DetailsScreen() {
    const [weatherData, setWeatherData] = useState(null);
    const location = 'athens';

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(
                `${BASEURL}/current.json?key=${APIKEY}&q=${location}`,
            );
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const json = await response.json();
            setWeatherData(json);
            console.log(json);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            // Handle the error gracefully, maybe display a message to the user
            setWeatherData(null); // Clear previous weather data in case of error
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <WeatherComponent weatherData={weatherData} />
        </View>
    );
}
