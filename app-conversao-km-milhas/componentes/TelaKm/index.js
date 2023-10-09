import React from 'react';
import { Text, SafeAreaView, ImageBackground } from 'react-native'
import bg from '../../assets/background.jpg'
import estilo from '../../assets/estilos';
import Resultado from '../resultadoConversao';
import Input from '../inputConversao';


const ConverterKm = (props) => {
    return (
        <SafeAreaView>
            <ImageBackground source={bg} blurRadius={150} style={estilo.background}>
                <Input titulo="Conversor de quilômetros para milhas" medida = "Quilômetros" />
                <Resultado />
            </ImageBackground>
        </SafeAreaView>

    )
}
export default ConverterKm;