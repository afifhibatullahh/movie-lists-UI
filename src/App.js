import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './routes';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}
