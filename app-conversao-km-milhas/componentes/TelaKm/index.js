import React from 'react';
import { Text, SafeAreaView, ImageBackground } from 'react-native'
import bg from '../../assets/background.jpg'
import estilo from '../../assets/estilos';
import Resultado from '../resultadoConversao';
import Input from '../inputConversao';


const ConverterKm = () => {
    return (
        <SafeAreaView>
            <ImageBackground source={bg} blurRadius={150} style={estilo.background}>
                <Input />
                <Resultado />
            </ImageBackground>
        </SafeAreaView>

    )
}
export default ConverterKm;