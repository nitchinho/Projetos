import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Fundo } from './assets/fundo.jpg'
import { Foto } from './assets/foto.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.fundo} source={Fundo} />
      </View>
      <View style={styles.card2}>
      <Image style={styles.foto} source={Foto} />
      <Text style={styles.titulo}>Rodrigo Almeida</Text>
      <Text style={styles.paragrafo}>Estudante de análise e desenvolvimento de sistemas, certificado SCRUM PSM I, me aperfeiçoando na linguagem JavaScript e seus frameworks (Node.JS, React, React Active)</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
  },
  card2: {
    flex: 1,
  },
  fundo: {
    width: 50,
    height: 50,
  },
  foto: {
    width: 50,
    height: 50,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 30,
  },
  paragrafo: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center'
  }
});
