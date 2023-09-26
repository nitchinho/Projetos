import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4fbc3',
        padding: 20,
    },
    img: {
        width: 300,
        height: 80,
        marginBottom: 5,
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descricao: {
        textAlign: 'center',
        marginBottom: 20,
    },
    cards: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius:5,
        borderColor: '#979797',
        borderWidth: 1
    },
    cardTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    cardDescricao: {
        textAlign: 'left',
        fontSize: 12,
    }
})

export default style;