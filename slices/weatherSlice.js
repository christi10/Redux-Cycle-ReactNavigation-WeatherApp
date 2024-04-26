
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
    feelslike_c: 0,
    feelslike_f: 0,
    gust_kph: 0,
    gust_mph: 0,
    humidity: 0,
    is_day: 0,
    last_updated: '',
    last_updated_epoch: 0,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 0,
    pressure_mb: 0,
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    vis_km: 0,
    vis_miles: 0,
    wind_degree: 0,
    wind_dir: '',
    wind_kph: 0,
    wind_mph: 0,
  },
  location: {
    country: '',
    lat: 0,
    localtime: '',
    localtime_epoch: 0,
    lon: 0,
    name: '',
    region: '',
    tz_id: '',
  },
  loading: false,
  error: null,
};

// Define your action handlers
function fetchWeather(state, action) {
  return {
    ...state,
    loading: true,
    error: null,
  };
}

function fetchWeatherSuccess(state, action) {
  const {  location,current } = action.payload;

  if (!location || !location.name) {
    console.error('location object or name property is missing in the API response');
    return state;
  }
  if (!current) {
    console.error('current object is missing in the API response');
    return state;
  }

  return {
    ...state,
    current,
    location,
    loading: false,
    error: null,
  };
}

function fetchWeatherFailed(state, action) {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  };
}

function fetchWeatherError(state, action) {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  };
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
