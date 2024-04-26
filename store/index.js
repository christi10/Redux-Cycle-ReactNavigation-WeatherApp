import { createStore, combineReducers, compose, applyMiddleware } from 'redux'; // Include all necessary imports for Redux
import { createCycleMiddleware } from 'redux-cycles';
import { weatherReducer } from '../slices/weatherSlice';
import { getWeatherDetails } from '../cycles/createCycle';
import run from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import Reactotron from '../ReactotronConfig';
import reactotron from "../ReactotronConfig";
import {composeWithDevTools} from "@reduxjs/toolkit/src/devtoolsExtension"; // Import the Reactotron configuration

const root = combineReducers({
    weather: weatherReducer,
});
const composeEnhancers = composeWithDevTools({});
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;

const middleware = [cycleMiddleware]; // Add additional middleware if needed

const enhancers = reactotron?.createEnhancer
    ? composeEnhancers(applyMiddleware(...middleware), reactotron.createEnhancer())
    : composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
    root,
    enhancers
);

run(getWeatherDetails, {
    ACTION: makeActionDriver(),
    HTTP: makeHTTPDriver(),
});

export default store;
