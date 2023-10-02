import { StyleSheet } from "react-native";

const estilos= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,        
    },

    cardTitulo: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescr:{
        textAlign: 'center',
        color: '#a6a6a6',
        marginBottom: 25,
    },
    card1: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        width: 340,
        marginBottom: 50,        
    },

    card2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    card2Texto1: {
        color: '#eecb01',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 5,
    },
    card2Texto2: {
        color: '#a6a6a6',
        fontSize: 16
    },
    card3: {
        backgroundColor: '#rgba(0,0,0,0.6)',
        marginBottom: 20,
    },
    card3Texto: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        padding: 15
    },
    card3Img: {
        width: 300,
        height: 200,        
    }
    
    
})

export default estilos;