import React from 'react';
import { ImageBackground, Text, SafeAreaView } from 'react-native';
import CardInicio from './ItemInicio';

import bg from '../../assets/background.png'
import finais from '../../assets/bg_finais.png'
import artilheiros from '../../assets/bg_artilheiros.png'
import titulos from '../../assets/bg_titulos.png'

import estilos from '../../assets/estilo'


const TelaInicio = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <ImageBackground source={bg} resizeMode="cover" blurRadius={10}>
                <Text style={estilos.titulo}>Brasil nas copas do mundo</Text>
                <CardInicio fundo={finais} texto="finais" />
                <CardInicio fundo={artilheiros} texto="artilheiros" />
                <CardInicio fundo={titulos} texto="títulos" />
            </ImageBackground>
        </SafeAreaView>
    )
};
export default TelaInicio