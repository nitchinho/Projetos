import React, { useState } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native'

import bg from '../../assets/background.jpg'
import estilo from '../../assets/estilos';
import Resultado from '../resultadoConversao';
import Input from '../inputConversao';

export default function ConverterKm() {

    const [milhas, setMilhas] = useState(0);

    function converteKmParaMi(quilometros) {
        const valorConvertido = quilometros / 1.60;
        setMilhas(valorConvertido.toFixed(2));
    }

    return (
        <SafeAreaView>
            <ImageBackground source={bg} blurRadius={150} style={estilo.background}>
                <Input
                    titulo="Conversor de quilômetros para milhas"
                    medida="Quilômetros"
                    funcaoTextoAlterado={valorInput => converteKmParaMi(valorInput)}
                />
                <Resultado
                    resultado={milhas}
                    medidaResultado="Milhas" />
            </ImageBackground>
        </SafeAreaView>

    );
}
