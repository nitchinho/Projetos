import React from 'react';
import { View, Text } from 'react-native'

import estilo from '../../assets/estilos';

const Resultado = () => {
    return (
        <View style={estilo.cardInput}>
            <View style={estilo.cardResultadoValor}></View>
            <Text style={estilo.cardValor}>0</Text>
            <Text style={estilo.cardTitulo}>Componente resultadoConversao</Text>
        </View>
    )

};
export default Resultado;