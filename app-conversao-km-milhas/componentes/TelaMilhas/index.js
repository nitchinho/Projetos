import React from 'react';
import { Text, SafeAreaView, ImageBackground } from 'react-native'
import bg from '../../assets/background_b.jpeg'
import estilo from '../../assets/estilos';
import Resultado from '../resultadoConversao';
import Input from '../inputConversao';

const ConverterMilhas = () => {
    return (
        <SafeAreaView>
            <ImageBackground source={bg} blurRadius={150} style={estilo.background}>
                <Input titulo="Conversor de Milhas para quilômetros" medida="Milhas"/>
                <Resultado />
            </ImageBackground>
        </SafeAreaView>
    )
}
export default ConverterMilhas;