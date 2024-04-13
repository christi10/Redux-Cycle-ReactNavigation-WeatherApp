import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ActionTypes} from '../../slices/weatherSlice';
import {getWeatherDetails} from '../../cycles/createCycle';

export const WeatherComponent = ({weatherData}) => {
  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  const {current, location} = weatherData;

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
        source={{uri: `http:${current.condition.icon}`}}
        style={{width: 64, height: 64}}
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

export function DetailsScreen() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather); // Select 'weather' slice from the state

  useEffect(() => {
    // Dispatch an action to fetch weather details
    dispatch({
      type: ActionTypes.FETCH_WEATHER_SUCCESS,
      payload: {city: 'New York'},
    });
  }, [dispatch]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/* Pass weatherData as prop to WeatherComponent */}
      <WeatherComponent weatherData={weatherData} />
    </View>
  );
}

const WeatherContainer = () => {
  const weatherData = useSelector(state => state.weather); // Select 'weather' slice from the state

  return <DetailsScreen weatherData={weatherData} />;
};

export default WeatherContainer;
