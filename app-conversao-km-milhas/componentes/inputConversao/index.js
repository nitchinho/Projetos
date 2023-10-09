import React from 'react';
import {View, Text} from 'react-native'
import estilo from '../../assets/estilos';

const Input = () => {
    return (
        <View style={estilo.cardInput}>            
            <Text style={estilo.titulo}>
                Conversor de Quilômetros para Milhas
            </Text>
        </View>
    )
    
};
export default Input;