import {ActionTypes} from '../slices/weatherSlice';
import {BASEURL, APIKEY} from '@env';
import xs from 'xstream';

export function getWeatherDetails(sources) {
  const request$ = sources.ACTION
    ? sources.ACTION.filter(
        action => action.type === ActionTypes.FETCH_WEATHER_SUCCESS,
      ).map(action => ({
        sources,
        url: `${BASEURL}/current.json?key=${APIKEY}&q=${action.payload.city}`,
        category: 'SET_WEATHER_DATA',
        method: 'POST', // Change method to GET for fetching weather data
      }))
    : xs.empty();

  const response$ = sources.HTTP
    ? sources.HTTP.select('SET_WEATHER_DATA')
        .map(response$ =>
          response$
            .replaceError(err => xs.of({error: err})) // Handle errors
            .map(response => {
              if (response.status === 200) {
                return {
                  type: ActionTypes.FETCH_WEATHER_SUCCESS,
                  payload: response.body,
                };
              }
              return;
            }),
        )
        .flatten()
    : xs.empty();

  const action$ = xs.combine(response$).map(([response]) => {
    if (response) {
      return response;
    }
    else {
      return {
        type: ActionTypes.FETCH_WEATHER_FAILED,
        payload: {error: 'Failed to fetch weather data'},
      };
    }
  });
  return {
    ACTION: action$,
    HTTP: request$,
  };
}
