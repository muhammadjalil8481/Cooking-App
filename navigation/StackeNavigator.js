import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import Splash from '../screens/Splash';

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
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
