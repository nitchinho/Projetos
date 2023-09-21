import React from 'react';
import { View, Image } from 'react-native';
import Fundo from '../../assets/fundo.png'
import styleTopo from './style';

export default function Topo() {

  return (
    <View style={styleTopo.container}>
      <Image style={styleTopo.cardtopo} source={Fundo} />
    </View>
  );
}
