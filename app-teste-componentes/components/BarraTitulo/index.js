import React from 'react';
import { View, Text } from 'react-native';

import estilos from './styleBarraTitulo';

export default function BarraTitulo() {
  return (
    <View style={ estilos.container}>
      <Text style={ estilos.titulo}>ATOR FAMOSO</Text>
    </View>
  );
}