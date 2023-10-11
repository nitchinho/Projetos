import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    itemTitulos: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    imagemFundoTitulos: {
        height: 145,
    },
    fundoEscuro: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        height: '100%',
    },
    areaLocal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    local: {
        fontSize: 24,
        color: '#ffffff',
        marginVertical: 10,
        marginLeft: 15,
    },
    estrela: {
        marginRight: 15,
        marginTop: 15,
    },
    ano: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
});

export default estilos;