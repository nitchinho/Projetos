import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from '@expo/vector-icons';

import TelaInicial from "./components/TelaInicial"
import TelaSobre from "./components/TelaSobre";

const Tab = createBottomTabNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'black',
          tabBarLabelPosition: 'beside-icon',
          headerTitleAlign: 'center',          
          headerStyle: {
            backgroundColor: 'white',            
          },
          headerBackgroundContainerStyle: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (<Entypo name="home" size={24} color={color} />)
          }} />
        <Tab.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="questioncircleo" size={24} color={color} />)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}