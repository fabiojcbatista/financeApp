import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import Sign from '../pages/Sign';

const Stack = createStackNavigator();

export default function Routes() {
 return (
    <Stack.Navigator>
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        />
        <Stack.Screen
        name="Sign"
        component={Sign}
        />
    </Stack.Navigator>
  );
}