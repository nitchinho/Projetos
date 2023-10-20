import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({

    cardArea: {
        backgroundColor: '#dadada',
        justifyContent: 'center',        
        width: '100%',
        height: 350,
        flexDirection: 'column',
        marginVertical: 10,
        borderRadius: 24,
    },

    cardImg: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,        
        borderWidth: 3,
        borderColor: '#dadada',
        marginTop: 2.5,
        marginLeft: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 250,
        width: '100%',       

    },
    cardTitDesc: {
        paddingHorizontal: 7,
        height: 85,
        marginHorizontal: 5,
        marginVertical: 5,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    cardTitle: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 19,       

    },
    cardDescr: {
        color: '#323232',
        width: 250,
        fontSize: 15,
        fontStyle: 'italic',
        lineHeight: 20,
    },
    
    })

export default styles;