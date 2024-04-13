// In weatherSlice.js

// Import ActionTypes if not already imported
// import * as ActionTypes from '../actions/types';

// Define your action types
export const ActionTypes = {
  FETCH_WEATHER: 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILED: 'FETCH_WEATHER_FAILED',
  FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR',
};

// Define your initial state
const initialState = {
  current: {
    cloud: 0,
    condition: {
      code: 0,
      icon: '',
      text: '',
    },
    // other properties...
  },
  location: {
    country: '',
    lat: 0,
    localtime: '',
    // other properties...
  },
};

// Define your action handlers
function fetchWeather(state, action) {
  // You can update state here if needed
  return state;
}

function fetchWeatherSuccess(state, action) {
  const { current, location } = action.payload;
  return {
    ...state,
    current,
    location,
  };
}

function fetchWeatherFailed(state, action) {
  // You can update state here if needed
  return state;
}

function fetchWeatherError(state, action) {
  // You can update state here if needed
  return state;
}

// Map action types to action handlers
export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      return fetchWeather(state, action);
    case ActionTypes.FETCH_WEATHER_SUCCESS:
      return fetchWeatherSuccess(state, action);
    case ActionTypes.FETCH_WEATHER_FAILED:
      return fetchWeatherFailed(state, action);
    case ActionTypes.FETCH_WEATHER_ERROR:
      return fetchWeatherError(state, action);
    default:
      return state;
  }
}
