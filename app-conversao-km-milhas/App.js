import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';


import ConverterKm from "./componentes/TelaKm";
import ConverterMilhas from "./componentes/TelaMilhas";

const Tabs = createBottomTabNavigator();

const App = () => (
  <NavigationContainer >
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Quilômetros para Milhas"
        component={ConverterKm}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="ruler" size={20} color={color} />
          )
        }} />
      <Tabs.Screen
        name="Milhas para Quilômetros"
        component={ConverterMilhas}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="ruler-combined" size={24} color={color} />
          )
        }} />
    </Tabs.Navigator>
  </NavigationContainer>
)

export default App;