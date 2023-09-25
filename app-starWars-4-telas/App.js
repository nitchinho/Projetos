import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaInicio from './components/TelaInicio/'
import Trilogia1 from './components/Trilogia1/'
import Trilogia2 from './components/Trilogia2/'
import Trilogia3 from './components/Trilogia3/'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={TelaInicio} />
        <Stack.Screen name='Trilogia 1' component={Trilogia1} />
        <Stack.Screen name='Trilogia 2' component={Trilogia2} />
        <Stack.Screen name='Trilogia 3' component={Trilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}