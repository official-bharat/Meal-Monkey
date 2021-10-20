import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateLogin from '../screens/CreateLogin';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResetScreen from '../screens/ResetScreen';
import OtpScreen from '../screens/OtpScreen';
import NewScreen from '../screens/NewScreen';
import introScreen from '../screens/IntroScreen';
import SearchFood from '../screens/SearchFood';
import MenuScreen from '../screens/MenuScreen';
import DessertsScreen from '../screens/DessertsScreen';
import ChickenScreen from '../screens/ChickenScreen';
import offerScreen from '../screens/OffersScreen';
import ProfileScreen from '../screens/OffersScreen';
import MoreScreen from '../screens/MoreScreen';
import PaymentScreen from '../screens/PaymentScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AboutScreen from '../screens/AboutScreen';
import IndexScreen from '../screens/IndexScreen';
import OrderScreen from '../screens/OrderScreen';
import CheckOut from '../screens/CheckOut';
import ChangeAddress from '../screens/ChangeAddress';
import SearchAddress from '../screens/SearchAddess';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateLogin" component={CreateLogin} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="ResetScreen" component={ResetScreen} />
        <Stack.Screen name="NewPassword" component={NewScreen} />
        <Stack.Screen name="introScreen" component={introScreen} />
        <Stack.Screen name="SearchFood" component={SearchFood} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Desserts" component={DessertsScreen} />
        <Stack.Screen name="ChickenScreen" component={ChickenScreen} />
        <Stack.Screen name="offerScreen" component={offerScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MoreScreen" component={MoreScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="CheckOut" component={CheckOut} />

        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
        <Stack.Screen name="SearchAddress" component={SearchAddress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
