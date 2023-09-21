import React from 'react';
import { Text, View, Image } from 'react-native';
import Foto from '../../assets/foto.png'
import styleConteudo from './style';


export default function Conteudo() {

  return (
    <View style={styleConteudo.carddescricao}>
      <Image style={styleConteudo.foto} source={Foto} />
      <Text style={styleConteudo.titulo}>Rodrigo Almeida</Text>
      <Text style={styleConteudo.paragrafo}>Estudante de análise e desenvolvimento de sistemas, certificado SCRUM PSM I, me aperfeiçoando na linguagem JavaScript e seus frameworks (Node.JS, React, React Native)</Text>
    </View>
  );
}