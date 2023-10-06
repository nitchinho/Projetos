import React from 'react';
import { Text, View } from 'react-native';

import estiloGlobal from '../../assets/estilos/estilos';
import estiloValor from './estilos';


export default function ItemComparacao(props) {
    return (
        <View style={[estiloGlobal.container, props.estilo]}>
            <Text style={estiloValor.textoValores}>{props.ano}</Text>
            <Text style={estiloValor.textoValores}>{props.salario}</Text>
            <Text style={estiloValor.textoValores}>{props.crescimento}</Text>
            <Text style={estiloValor.textoValores}>{props.inflacao}</Text>
            <View style={estiloValor.img}>{props.statusCrescimento}</View>
        </View>
    );
}