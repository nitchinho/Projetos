import { StyleSheet } from "react-native";

const estilo= StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d6d6d'
        
    },
    card: {
        width: 250,        
        backgroundColor: '#107c0f',
        marginBottom: 20,
        alignItems: 'center',        
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,        
    },
    cardImg: {
        justifyContent: 'space-between',
        width: 100,
        height: 100,
    },
    cardTexto: {
        color: '#fff',
        textAlign: 'center',        
        fontSize: 13,
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius:50,        
    },
    titulo: {
        marginBottom:20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'darkgreen'
    },
    descricao: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 30,

    }

});

export default estilo;
