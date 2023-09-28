import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicial from "./components/TelaInicial"
import TelaSobre from "./components/TelaSobre";

const Tab = createBottomTabNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TelaInicial} />
        <Tab.Screen name="Sobre" component={TelaSobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}