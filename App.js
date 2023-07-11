// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Monitoring from './src/screens/Monitoring';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShadowVisible: false,
        headerStyle: { elevation: 0,shadowColor: 'transparent', }
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}  options={{title: '',}}/>
        <Stack.Screen name="Monitor" component={Monitoring}  options={{title: '',}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;