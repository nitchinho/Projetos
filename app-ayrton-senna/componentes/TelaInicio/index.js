import React from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'
import estilos from './style'
import Fundo from '../../assets/fundo.jpg'
import FotoCapa from '../../assets/foto-capa.jpg'

export default function TelaInicio() {
    return (
        <ImageBackground source={Fundo} style={estilos.container} blurRadius={5}>            
            <Image style={estilos.imgCapa} source={FotoCapa} />
            <View style={estilos.card}>
            <Text style={estilos.titulo}>Ayrton Senna</Text>
            <Text style={estilos.descricao}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto. </Text>
            </View>
        </ImageBackground>

    )
};
