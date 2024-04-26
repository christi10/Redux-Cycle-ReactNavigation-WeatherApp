import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'WeatherApp' }) // Customize the name to your app's name
    .useReactNative() // Add React Native plugins
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage) // Set up AsyncStorage
    .connect(); // Establish a connection to Reactotron

export default reactotron; // Make it available to the rest of the app
