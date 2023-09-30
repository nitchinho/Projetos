import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, } from '@expo/vector-icons';

import TelaInicio from './componentes/TelaInicio';
import TelaSobre from "./componentes/TelaSobre";
import TelaVitorias from "./componentes/TelaVitorias";

export default function App(props) {

  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#eecb01'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000',
          },
          tabBarActiveTintColor: '#ba171',
          tabBarInactiveTintColor: '#000',
          tabBarActiveBackgroundColor: '#fff',
          tabBarInactiveBackgroundColor: '#eecb01',
        }}
      >
        <Tabs.Screen
          name="Início"
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={20} color={color} />
            ),
          }} />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="question-circle" size={20} color={color} />)
          }} />
        <Tabs.Screen
          name="Vitórias"
          component={TelaVitorias}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="trophy" size={20} color={color} />)
          }} />
      </Tabs.Navigator >
    </NavigationContainer >
  );
}
