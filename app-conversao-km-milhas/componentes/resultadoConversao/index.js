import React from 'react';
import { View, Text } from 'react-native'
import estilo from '../../assets/estilos';

const Resultado = (props) => {
    return (
        <View style={estilo.cardInput}>
            <View style={estilo.cardResultadoValor}>
            <Text style={estilo.cardValor}>{props.resultado}</Text>
            <Text style={estilo.cardTitulo}>{props.medidaResultado}</Text>
            </View>
        </View>
    )
};
export default Resultado;