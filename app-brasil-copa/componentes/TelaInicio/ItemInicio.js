import React from 'react';
import { ImageBackground, Text, View } from 'react-native'

import estilo from './estilos';

const CardInicio = (props) => {
    return (
        <View style={estilo.Cards}>
            <ImageBackground style={estilo.imgFundo} source={props.fundo} borderRadius={20}>
                <View style={estilo.cardFundoEscuro}>
                    <Text style={estilo.cardTexto}>{props.texto}</Text>
                </View>
            </ImageBackground>
        </View>
    )
};

export default CardInicio;