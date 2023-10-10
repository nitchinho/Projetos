import React, { useState } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native'

import bg from '../../assets/background_b.jpeg'
import estilo from '../../assets/estilos';
import Resultado from '../resultadoConversao';
import Input from '../inputConversao';

export default function ConverterMilhas () {

    const [quilometros, setQuilometros] = useState(0);

    function converteMiParaKm(milhas) {
        const valorConvertido = milhas * 1.60;
        setQuilometros(valorConvertido.toFixed(2));
    }

    return (
        <SafeAreaView>
            <ImageBackground source={bg} blurRadius={150} style={estilo.background}>
                <Input
                    titulo="Conversor de Milhas para quilômetros"
                    medida="Milhas"
                    funcaoTextoAlterado={valorInput => converteMiParaKm(valorInput)}
                />
                <Resultado
                    resultado={quilometros}
                    medidaResultado="Quilômetros" />
            </ImageBackground>
        </SafeAreaView>
    )
}