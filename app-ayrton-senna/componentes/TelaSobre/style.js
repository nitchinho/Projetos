import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    Topo: {
        paddingTop: 5,
        paddingHorizontal: 12,        
    },
    TopoTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    TopoImg: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginBottom: 5,
    },
    TopoDescr: {
        color: '#757575',
        fontWeight: 'bold',
        marginBottom: 10,        
        textAlign: 'justify'
    },
    card: {
        flexDirection: 'row',
        marginBottom:20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d5d5d5',
        alignItems: 'center'
    },
    imgCard: {
        width:100,
        height: 100,
    },
    boxTexto: {
        padding: 10,
        flex: 1,
    },
    boxTitulo: {
        fontSize: 18,
        fontWeight: 'bold',

    }
});
export default estilos;
    
    