import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Tabs} />
    </Stack.Navigator>
  );
};

export default Route;
