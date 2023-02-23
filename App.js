import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function app() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A6D" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}