import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './src/view/screens/Menu.js';
import Detail from './src/view/screens/Detail.js';
import List from './src/view/screens/List.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'KLP Price Menu', //Set Header Title
            headerStyle: {
              backgroundColor: 'black', //Set Header color
            },
            headerTintColor: 'lightgray', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detail Page', //Set Header Title
            headerStyle: {
              backgroundColor: 'black', //Set Header color
            },
            headerTintColor: 'lightgray', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: 'List Page', //Set Header Title
            headerStyle: {
              backgroundColor: 'black', //Set Header color
            },
            headerTintColor: 'lightgray', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
