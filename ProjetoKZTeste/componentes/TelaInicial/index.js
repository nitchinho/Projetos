import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import estilo from './estilo';
import Logo from '../../assets/logokz.png'

const nomes = [
  "Rodrigo",
  "Camila",
  "Lidiane",
  "Luiza",
  "Armando",
  "Rebeca",
  "Erick",
  "Bianca",
  "Vanessa",
  "Fernando",
  "Ribamar",
  "João",
  "Ribamar",
  "Marcelo",
  "Mirian",
  "Vanessa B.",
  "Valter"
]

const TelaInicial = () => {
  const [ nomeSorteado, setNomeSorteado ] = useState('');

  const gerarNome = () => {
    const novoNome = Math.floor(Math.random() * nomes.length);
    setNomeSorteado(nomes[novoNome]);
  }  

  const limparNome = () => {
    setNomeSorteado('')    
  }

  return (
    <View style={estilo.tela}>
      <View>
      <Text style={estilo.titulo}>
        Toque no botão e veja quem é o vencedor do sorteio
      </Text>
      <Image style={estilo.logo} source={Logo}/>
      </View>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>{nomeSorteado}</Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button title="Sortear" onPress={gerarNome} color="#1f4f66"/>        
      </View>
      <View>
      <Button title="Limpar" onPress={limparNome} color="#1f4f66"/>
      </View>
    </View>
  );
}

export default TelaInicial;


<TextInput 
  textAlign="left" />