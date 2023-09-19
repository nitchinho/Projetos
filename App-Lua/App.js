import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Lua from './assets/lua.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={Lua}
        style={styles.img}
      />
      <View style={styles.card}>
      <Text style={styles.titulo}>LUA</Text>
      <Text style={styles.paragrafo}>A Lua é o satélite natural do <Text style={styles.destaque}>Planeta Terra</Text>, distanciados por aproximadamente 384.405 quilómetros.</Text>
      </View>
      <Button
      style={styles.btn}
      title='Clique Aqui'
      color={'#3c9dd6'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  img: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    shadowOpacity: 10,
    shadowColor: 'white',    
  },
  card: {    
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,    
    marginBottom: 40,
    width: 330,
    borderStyle: 'dotted',
    paddingVertical: 10,
    paddingVertical: 15,
  },
  paragrafo: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    padding: 5,
  },
  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 30,
    textDecorationLine: 'i'
  }
});
