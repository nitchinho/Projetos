import React from 'react';
import { View } from 'react-native';
import estilos from './styleApp';
import BarraTitulo from './components/BarraTitulo/';
import Card from './components/Card';
import Conteudo from './components/Conteudo';


export default function App() {
  return (
    <View style={ estilos.container}>
      <BarraTitulo />
      <Card/>
      <Conteudo/>
    </View>
    
  );
}


