import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Account from '../pages/Account';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          // bottom:25,
          // left:20,
          // right:20,
          backgroundColor: 'white',
          // borderRadius:15,
          height: 60,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={24} color={focused ? '#000' : '#C4C4C4'} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="film-outline"
              size={24}
              color={focused ? '#000' : '#C4C4C4'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="person"
              size={24}
              color={focused ? '#000' : '#C4C4C4'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
