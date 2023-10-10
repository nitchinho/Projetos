import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    Cards: {
        flex:1,        
        marginVertical: 15,
        paddingHorizontal: 15,
        
    },
    imgFundo: {
        height: 180,
        width: 350,
    },
    cardFundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },
    cardTexto: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#rgba(255, 255, 255, 0.80)',
        textTransform: 'uppercase',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default estilos;