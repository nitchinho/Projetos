import React from "react";
import { View, Text } from "react-native";

import estilo from './style'


export default function TelaSobre() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Tela Sobre</Text>
      <Text style={estilo.paragrafo}>Esta é a tela Sobre do Aplicativo</Text>
    </View>
  )
}