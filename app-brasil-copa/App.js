import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicio from "./componentes/TelaInicio";

const Navegacao = createStackNavigator();

const App = () => (

  <NavigationContainer>
    <Navegacao.Navigator>
      <Navegacao.Screen name="Inicio" component={TelaInicio} />
    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;