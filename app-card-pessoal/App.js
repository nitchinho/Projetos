import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, setOpenInstagram } from 'react-native';
import  Fundo  from './assets/fundo.png'
import  Foto  from './assets/foto.png'
import { useState } from 'react';

export default function App() {
  const [openInstagram, setOpenInstagram] = useState(false);
  const onPress = () => {
    if (Linking.canOpenURL('http://www.instagram.com/nitchinho')) {
      Linking.openURL('http://www.instagram.com/nitchinho');
      setOpenInstagram(true);
    } else {
      // Mostrar um erro
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.cardtopo} source={Fundo} />

      <View style={styles.carddescricao}>
        <Image style={styles.foto} source={Foto} />
        <Text style={styles.titulo}>Rodrigo Almeida</Text>
        <Text style={styles.paragrafo}>Estudante de análise e desenvolvimento de sistemas, certificado SCRUM PSM I, me aperfeiçoando na linguagem JavaScript e seus frameworks (Node.JS, React, React Active)</Text>
      </View>
      <Button title='Meu portiflio' onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
  cardtopo: {
    flex: 1,
  },
  carddescricao: {
    flex: 1,
    alignItems: 'center'
  },
  foto: {    
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 30,
  },
  paragrafo: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center'
  }
});
