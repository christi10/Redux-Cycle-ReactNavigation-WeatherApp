// // getWeatherDetailsCycle.js
// import { BASEURL, APIKEY } from '@env';
// import { createCycle } from './createCycle';
// import { getWeatherDetailsError, getWeatherDetailsFailed, getWeatherDetailsSuccess } from "../src/actions/weatherActions";
//
// export function getWeatherDetailsCycle(sources) {
//   return createCycle({
//     sources,
//     runOnActions: ['FETCH_WEATHER'],
//     url: `${BASEURL}/current.json?key=${APIKEY}&q=athens`,
//     category: 'SET_WEATHER_DATA',
//     resultActions: {
//       onSuccess: (response) => getWeatherDetailsSuccess(response.body),
//       onError: (error) => getWeatherDetailsError(error),
//       onFailure: getWeatherDetailsFailed,
//     },
//   });
// }
