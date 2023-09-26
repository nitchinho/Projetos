import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e1e3e4'

    },
    img: {
        width:300,
        height:200,
        marginBottom: 20,
    },
    card: {
        width: 320,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,       
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign: 'center',
        paddingBottom: 10,
    },
    paragrafo: {
        textAlign: 'center',
        paddingBottom: 20,

    },
    boxbotao: {
        marginBottom: 10,
    },
})

export default style