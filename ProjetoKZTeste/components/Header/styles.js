import {StyleSheet} from 'react-native';

const style=StyleSheet.create({
    container:{
        flex:1,
        
    },
    logo: {
        width: 50,
        height: 50
    },
    header: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',        
        borderColor: 'black',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#dbdbdb',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor:'#e2e3c3'        
    },
    title: {        
        fontWeight: 'bold',
        color: '#9c326c',
        fontSize: 18,
        paddingRight: 10
    }

});

export default style;
