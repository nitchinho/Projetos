import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    
    container: {
        backgroundColor: '#f11635',
        height: '100%',
        paddingTop: 10,
        paddingHorizontal: 20
    },

    logoArea: {
        width: '100%',
        height: 100,
    },   
    
    logo: {
        width: 92,
        height: 80,
        left: -10,
        marginBottom: 10,
        alignSelf: 'center'
    },

    logoTitle: {
        fontSize: 14,
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    title: {
        fontSize:26,
        textAlign: 'center',
        color: '#ffffff',
        marginVertical: 12,
        textTransform: 'uppercase'
    },

    inputSearch: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: '100%',
        height: 50,
        paddingHorizontal: 24,
        marginTop: 25,
    },
    
})

export default style;