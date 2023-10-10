import React from 'react';
import { View, Text, TextInput } from 'react-native'
import estilo from '../../assets/estilos';

const Input = (props) => {
    return (
        <View style={estilo.cardInput}>
            <Text style={estilo.titulo}>{props.titulo}</Text>
            <View style={estilo.cardMedidas}>
                <Text style={estilo.cardMedidaNome}>{props.medida}</Text>
                <TextInput
                style={estilo.cardMedidaInput}
                keyboardType='decimal-pad'
                defaultValue='0'
                onChangeText={props.funcaoTextoAlterado}
                />
            </View>
        </View>
    )

};
export default Input;