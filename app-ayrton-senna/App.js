import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicio from './componentes/TelaInicio';
import TelaSobre from "./componentes/TelaSobre";
import TelaVitorias from "./componentes/TelaVitorias";

export default function App(props) {

  const tabs= createBottomTabNavigator();
  return (
    <NavigationContainer>
      <tabs.Navigator>
        <tabs.Screen name="Início" component={TelaInicio}/>
        <tabs.Screen name="Sobre" component={TelaSobre}/>
        <tabs.Screen name="Vitórias" component={TelaVitorias}/>        
      </tabs.Navigator>
    </NavigationContainer>
);
  }
