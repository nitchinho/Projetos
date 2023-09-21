import { StyleSheet } from "react-native";

const styleConteudo = StyleSheet.create({
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
  
  export default styleConteudo;