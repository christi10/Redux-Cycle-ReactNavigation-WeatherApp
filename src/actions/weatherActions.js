import {ActionTypes} from '../../slices/weatherSlice';

export const getWeatherDetailsSuccess = weatherData => ({
  type: ActionTypes.SET_WEATHER_DATA,
  payload: weatherData,
});

export const getWeatherDetailsError = error => ({
  type: ActionTypes.FETCH_DATA_FAILURE,
  payload: error,
});

export const getWeatherDetailsFailed = () => ({
  type: ActionTypes.FETCH_DATA_ERROR,
});
