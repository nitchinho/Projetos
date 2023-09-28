import React from "react";
import { View, Text } from "react-native";

import estilo from './style'


export default function TelaInicial() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Tela Home</Text>
      <Text style={estilo.paragrafo}>Esta é a tela Home do Aplicativo. Tela Inicial</Text>
    </View>
  )
}