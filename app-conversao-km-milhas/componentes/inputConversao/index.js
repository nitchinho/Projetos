import React from 'react';
import { View, Text } from 'react-native'
import estilo from '../../assets/estilos';

const Input = (props) => {
    return (
        <View style={estilo.cardInput}>
            <Text style={estilo.titulo}>{props.titulo}</Text>
            <View style={estilo.cardMedidas}>
                <Text style={estilo.cardMedidaNome}>{props.medida}</Text>
                <Text style={estilo.cardMedidaInput}>6.25</Text>
            </View>
        </View>
    )

};
export default Input;