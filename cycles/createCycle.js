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
            .replaceError(err => xs.of(err)) // Handle errors
            .filter(response => response.status === 200) // Filter successful responses
            .map(response => ({
              type: ActionTypes.FETCH_WEATHER_SUCCESS,
              payload: response.body,
            })),
        )
        .flatten()
    : xs.empty();

  const action$ = response$.mapTo({type: ActionTypes.FETCH_WEATHER});

  return {
    ACTION: action$,
    HTTP: request$,
  };
}
