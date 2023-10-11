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
  const [nomeSorteado, setNomeSorteado] = useState('');
  const [corFundo, setCorFundo] = useState(estilo.boxNumero);

  const gerarNome = () => {
    const novoNome = Math.floor(Math.random() * nomes.length);
    setNomeSorteado(nomes[novoNome]);
  };

  const exibirNomes = () => {
    setCorFundo(estilo.boxNumero)
    let i = 0;
    while (i < 100) {
      setTimeout(() => {
        gerarNome();
      }, 0.5);      
      i++;
    }
    setTimeout(() => {
      setCorFundo(estilo.boxNumero2);
    }, 10);      
  };

  const limparNome = () => {
    setNomeSorteado('')
    setCorFundo(estilo.boxNumero)
  }

  return (
    <View style={estilo.tela}>
      <View>
        <Text style={estilo.titulo}>
          Toque no botão e veja quem é o vencedor do sorteio
        </Text>
        <Image style={estilo.logo} source={Logo} />
      </View>

      <View style={corFundo}>
        <Text style={estilo.numero}>{nomeSorteado}</Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button title="Sortear" onPress={exibirNomes} color="#1f4f66" />
      </View>
      <View>
        <Button title="Limpar" onPress={limparNome} color="#1f4f66" />
      </View>
    </View>
  );
}

export default TelaInicial;


<TextInput
  textAlign="left" />