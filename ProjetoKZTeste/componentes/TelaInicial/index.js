import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, Pressable } from 'react-native';
import { nomes } from './dados/dados';
import estilo from './estilo';
import Logo from '../../assets/logokz.png'

const TelaInicial = () => {
  const [nomeSorteado, setNomeSorteado] = useState('');
  const [corFundo, setCorFundo] = useState(estilo.boxNumero);

  const sortearNomes = () => {
    setCorFundo(estilo.boxNumero)
    let i = 0;
    while (i < 200) {
      setTimeout(() => {
        const novoNome = Math.floor(Math.random() * nomes.length);
        setNomeSorteado(nomes[novoNome]);
      }, 0.9);
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

  const listaSorteados = () => {
    const listasorteado = [];
    listasorteado.push(nomeSorteado)
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
        <Pressable style={estilo.pressable} onPress={sortearNomes}>
          <Text style={estilo.pressableText}>sortear</Text>

        </Pressable>
      </View>
      <View>
        <Button title="Limpar" onPress={limparNome} color="#1f4f66" />
      </View>
    </View>
  );
}

export default TelaInicial;