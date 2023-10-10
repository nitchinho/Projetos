import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    
    background: {
        height: '100%',
    },
    cardInput: {
        backgroundColor: 'rgba(255,255,255,0.4)',        
        borderRadius: 18,
        paddingVertical: 25,
        marginHorizontal: 15,
        marginTop: 70,
    },
    titulo: {
        color: '#fff',
        textAlign: 'center',        
        fontSize: 20,
        padding: 10,
    },
    cardMedidas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',        
    },
    cardMedidaNome: {
        backgroundColor: '#9eda7b',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 18,
        marginRight: 10,

    },
    cardMedidaInput: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 8,
        fontSize: 18,
    },
    cardResultadoValor: {
        alignItems: 'center'
    },
    cardTitulo: {
        color: '#fff',
        fontSize: 25,                
        paddingBottom: 20,
    },
    cardValor: {
        color: '#fff',
        fontSize: 80,
        paddingBottom: 10,
    }





})
export default estilo;