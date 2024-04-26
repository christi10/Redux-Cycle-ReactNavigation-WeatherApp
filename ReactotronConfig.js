// import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {reactotronRedux} from 'reactotron-redux';
//
// const reactotron = Reactotron.configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .use(reactotronRedux())
//   .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .connect(); // let's connect!
//
// export default reactotron;

import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'Your App Name' }) // Customize the name to your app's name
    .useReactNative() // Add React Native plugins
    .use(reactotronRedux({
        except: ["EFFECT_TRIGGERED", "EFFECT_RESOLVED", "EFFECT_REJECTED"], // Exclude certain Redux actions
        isActionImportant: (action) => action.type === "repo.receive", // Highlight specific actions
    }))
    .setAsyncStorageHandler(AsyncStorage) // Set up AsyncStorage
    .connect(); // Establish a connection to Reactotron

export default reactotron; // Make it available to the rest of the app
