import {ActionTypes} from '../slices/weatherSlice';
import {BASEURL, APIKEY} from '@env';
import xs from 'xstream';
import sampleCombine from "xstream/extra/sampleCombine";

export function getWeatherDetails(sources) {
  const request$ = sources.ACTION.filter(
        action => action.type === ActionTypes.FETCH_WEATHER,
      ).compose(sampleCombine())
      .map(([action]) => {
          return {
              url: `${BASEURL}/current.json?key=${APIKEY}&q=${action.payload.city}`,
              category: 'SET_WEATHER_DATA',
              method: 'POST',
          }
      })

  const response$ = sources.HTTP.select('SET_WEATHER_DATA')
        .map(response =>
          response.replaceError(err => xs.of({error: err}))
            .map(response => {
              if (response.status === 200) {
                return {
                  type: ActionTypes.FETCH_WEATHER_SUCCESS,
                  payload: response.body,
                };
              }
            }),
        )
        .flatten();

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
