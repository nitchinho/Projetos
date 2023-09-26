import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './components/Inicio/';
import Hospedagem from './components//Hospedagem/'
import Passeios from './components/Passeios/'
import Restaurantes from './components/Restaurantes/'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={Inicio}/>
        <Stack.Screen name='Hospedagem' component={Hospedagem}/>
        <Stack.Screen name='Passeios' component={Passeios}/>
        <Stack.Screen name='Restaurantes' component={Restaurantes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
