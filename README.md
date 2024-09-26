React Native Weather App
This project is a React Native application for fetching and displaying weather information. It utilizes Java 17.0.0-tem and Node.js v18.19.0 ,
while frontend components are developed using React Native. Redux is employed for state management,
and calls to external APIs are made using a pure Redux cycle.js approach.
Navigation within the application is facilitated by react-navigation/native v6.1.10.

Getting Started
Step 1: Start the Metro Server
First, you will need to start Metro, the JavaScript bundler that ships with React Native.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm

npm i 

npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
If everything is set up correctly, you should see your new app running in your Android Emulator or iOS Simulator shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

Step 3: Modifying your App
Now that you have successfully run the app, let's modify it.

Open App.tsx in your text editor of choice and edit some lines.

For Android: Press the <kbd>R</kbd> key twice or select "Reload" from the Developer Menu (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows and Linux, or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS) to see your changes!

For iOS: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
