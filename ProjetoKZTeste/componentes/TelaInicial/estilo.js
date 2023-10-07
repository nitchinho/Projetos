import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: { 
    width: '100%',
    justifyContent: "center", 
    alignItems: 'center',
  },
  
  titulo: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: "center"
  },
  
  linhaInput: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 10
  },

  inputFocus: {
    borderWidth: 1,
    borderColor: '#1f4f66',
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10 
  },

  inputNormal: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10 
  },

  boxNumero:{
    borderColor: '#6b1042',
    backgroundColor: '#dc1e85',
    borderWidth: 5,
    height: 150,
    width: 300,
    borderRadius: 75,
    justifyContent: "center",
    alignItems:"center",
    marginTop: 50,
    marginBottom: 50
  },


  numero: {
    fontSize: 50,
    color: '#e6e907'
  },
  boxBotao: {
    width:200,
    marginTop: 0,
    marginBottom: 20,
  },
  logo:{
    width:150,
    height:150,
    alignSelf: 'center'
  }

});

export default estilo;