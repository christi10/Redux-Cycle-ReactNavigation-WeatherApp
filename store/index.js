import {createStore, applyMiddleware, combineReducers} from 'redux';
import {weatherReducer} from '../slices/weatherSlice';
import {getWeatherDetails} from '../cycles/createCycle';
import {createCycleMiddleware} from 'redux-cycles';
import run from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  weather: weatherReducer,
  // Add other reducers if any
});


const cycleMiddleware = createCycleMiddleware();
const {makeActionDriver} = cycleMiddleware;
const drivers = {
  ACTION: makeActionDriver(),
  HTTP: makeHTTPDriver(),
};

const store = createStore(rootReducer, applyMiddleware(cycleMiddleware));

run(getWeatherDetails, drivers); // Run your cycle function

export default store;
