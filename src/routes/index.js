import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './BottomTabs';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Tabs} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
};

export default Route;
