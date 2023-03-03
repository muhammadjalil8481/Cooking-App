import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AddMealScreen, HomeScreen, MEalDetails} from '../screens';
import CartScreen from '../screens/CartScreen';
import Login from '../screens/Login';
import MealDetails from '../screens/MealDetails';
import Onboarding from '../screens/Onboarding';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'simple_push',
      }}
      initialRouteName="">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddMealScreen" component={AddMealScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
