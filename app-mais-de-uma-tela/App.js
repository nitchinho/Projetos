//Instalando os componentes de Navegação:
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// Instalar a biblioteca bottom-tabs: npm install @react-navigation/bottom-tabs

//1º - importando os componentes que serão usados:
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './Componentes/TelaInicial';
import TelaPerfil from './Componentes/TelaPerfil';

//2º - iniciar o componente responsável por definir as rotas:
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    //3º - Criar as rotas do aplicativo
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}