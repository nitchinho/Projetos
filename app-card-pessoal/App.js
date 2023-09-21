import React from 'react';
import { StyleSheet, View, Button, Linking } from 'react-native';
import Topo from './components/Topo/index';
import Conteudo from './components/Conteudo/index';
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
      <Topo />
      <Conteudo/>
      <Button title='Meu portiflio' onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  }
});