import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'WeatherApp' })
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

export default reactotron;
