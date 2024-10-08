import {ActionTypes} from '../../slices/weatherSlice';
import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const WeatherComponent = ({weatherData}) => {
  if (weatherData.loading === true) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  const {current, location} = weatherData;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>Location: {location.name}</Text>
        <View style={{paddingRight: 2}} />
      </View>
      <Text>Region: {location.region}</Text>
      <Text>Country: {location.country}</Text>
      <Text>
        Temperature: {current.temp_c}°C ({current.temp_f}°F)
      </Text>
      <Text>Condition: {current.condition.text}</Text>
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

export function DetailsScreen({route}) {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather);
  const {city} = route.params;

  useEffect(() => {
    // Dispatch an action to fetch weather details
    dispatch({
      type: ActionTypes.FETCH_WEATHER,
      payload: {city},
    });
  }, [city]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <WeatherComponent weatherData={weatherData} />
    </View>
  );
}

const WeatherContainer = () => {
  const weatherData = useSelector(state => state.weather);

  return <DetailsScreen weatherData={weatherData} />;
};

export default WeatherContainer;
