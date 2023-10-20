import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    
    container: {
        backgroundColor: '#ffffff',
        height: '100%',
        paddingTop: 10,
        paddingHorizontal: 20
    },

    logoArea: {
        width: '100%',
        height: 100,
    },   
    
    logo: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },

    logoTitle: {
        fontSize: 14,
        color: '#000',
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    title: {
        fontSize:26,
        textAlign: 'center',
        color: '#000',        
        textTransform: 'uppercase'
    },

    inputSearch: {        
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 50,
        width: '100%',
        height: 50,
        paddingHorizontal: 25,
        marginTop: 60,
    },
    // centeredView: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 22,
    //   },
    //   modalView: {
    //     margin: 20,
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5,
    //   },

    //   button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2,
    //     marginBottom: 5,
    //   },
    //   buttonOpen: {
    //     backgroundColor: '#F194FF',
    //   },
    //   buttonClose: {
    //     backgroundColor: '#2196F3',
    //   },
    //   textStyle: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //   },
    //   modalText: {
    //     marginBottom: 15,
    //     textAlign: 'center',
    //   },
    
})

export default style;