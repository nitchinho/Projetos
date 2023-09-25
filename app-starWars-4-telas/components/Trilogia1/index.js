import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../../styles';

import imagem from '../../assets/darth-vader.jpeg';

export default function Trilogia1(props) {
  return (
    <View style={styles.container}>

      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>A história do Darth Vader</Text>

        <Image source={imagem} style={styles.imagem}/>

        <Text style={styles.textos}>
          Trilogia prequela. Episódios IV, V e VI
        </Text>


        <Text style={styles.textos}>
          Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem cronológica da série Star Wars. Nela é contada a história do grande vilão Darth Vader.
        </Text>

        <Text style={styles.textos}>
          Através dessa trilogia você vai saber de onde ele veio e quem ele é.
        </Text>
      </View>
      <Button
                title='Voltar'
                onPress={() => props.navigation.navigate('Tela Inicial')} color={"#372d00"}
            />
    </View>
  )
}