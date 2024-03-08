/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './Navigation/App';
import {name as appName} from './app.json';
import store from './store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
