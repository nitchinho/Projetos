import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    itemArtilheiros: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    imagemFundoArtilheiros: {
        height: 180,
    },
    fundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },
    areaGols: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    nome: {
        fontSize: 32,
        color: '#fff',
        textTransform: 'uppercase',
        marginLeft: 15,
        marginVertical: 5,
    },
    gols: {
        width: 80,
        height: 30,
        fontSize: 18,
        color: '#fff',
        backgroundColor: '#021245',
        textTransform: 'uppercase',

        marginRight: 15,
        marginVertical: 15,
        paddingHorizontal: 5,
        paddingVertical: 2.5,

        borderRadius: 10,

    },
    anos: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 100,

        color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#00905C',
    },

});

export default estilos;