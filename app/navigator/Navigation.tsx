// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home"
import FavourateList from "../screens/FavourateList"
import ProfileDetails from "../screens/ProfileDetails"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FavourateList" component={FavourateList}/>
        <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;