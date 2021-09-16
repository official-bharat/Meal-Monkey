import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateLogin from '../screens/CreateLogin';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateLogin" component={CreateLogin} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
