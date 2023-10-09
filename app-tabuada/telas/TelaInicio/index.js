import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground } from "react-native";

import { validarResposta, gerarNumero, geraSimboloMatematicoAleatorio } from "./funcoes";

import estilo from './estilo';
import fundo from '../../assets/fundo.png';


const TelaInicio = (props) => {
  const [ primeiroNumero, setPrimeiroNumero ] = useState(Math.floor(Math.random() * 30 + 1));
  const [ simbolo, setSimbolo ] = useState('*');
  const [ segundoNumero, setSegundoNumero ] = useState(Math.floor(Math.random() * 30 + 1));  
  const [ respostaUsuario, setRespostaUsuario ] = useState('');
  
  const criarQuestao = () => {
    setPrimeiroNumero(gerarNumero());
    setSimbolo(geraSimboloMatematicoAleatorio());
    setSegundoNumero(gerarNumero());    
    setRespostaUsuario("");
  }

  const responder = () => {
    if ( validarResposta(primeiroNumero, simbolo, segundoNumero, respostaUsuario) ) {
      props.navigation.navigate('RespostaCorreta');
    } else {
      props.navigation.navigate('RespostaErrada');
    }

    criarQuestao();
  }

  // const abrirTelaTabuada = () => {
  //   props.navigation.navigate('Tabuada');
  // }

  return (
    <ImageBackground source={fundo} style={estilo.imagemFundo}>
      <View style={estilo.tela}>
        <View style={estilo.boxPergunta}>
          <Text style={estilo.titulo}>
            Duvido você acertar!
          </Text>

          <View style={estilo.boxQuestao}>
            <Text style={estilo.texto}>            
              { primeiroNumero }
            </Text>

            <Text style={estilo.texto}>
              {simbolo}
            </Text>

            <Text style={estilo.texto}>            
              { segundoNumero }
            </Text>

            <Text style={estilo.texto}>
              =
            </Text>

            <TextInput 
              textAlign="center"
              onChangeText={ setRespostaUsuario } 
              keyboardType="number-pad" 
              value={respostaUsuario.toString()} 
              autoFocus={true}
              maxLength={3} 
              style = { estilo.input }/>
          </View>

          <View style={estilo.opcoes}>
            <View style={estilo.boxBotao}>
              <Button title="Pular" onPress={criarQuestao} color="#e53b62"/>
            </View>

            <View style={estilo.boxBotao}>
              <Button title="Responder" onPress={responder} color="#a0df52"/>
            </View>
          </View>

        </View>

        {/* <View style={estilo.boxBotaoTabuada}>
          <Button title="Ver tabuada" onPress={abrirTelaTabuada} color="#1f4f66"/>
        </View> */}
      </View>
    </ImageBackground>
  );
}

export default TelaInicio;