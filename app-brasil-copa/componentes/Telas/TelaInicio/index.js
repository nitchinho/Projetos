import React from "react";
import { ImageBackground, Text, View } from "react-native";

import estilosGlobal from "../../../assets/estilo";

import bg from '../../../assets/background.png';
import bg_finais from '../../../assets/bg_finais.png';
import bg_artilheiros from '../../../assets/bg_artilheiros.png';
import bg_titulos from '../../../assets/bg_titulos.png';
import ItemInicio from "./itemInicio";

const TelaInicio = (props) => {

    const abrirFinais = () => {
        props.navigation.navigate('Finais');
    }

    const abrirArtilheiros = () => {
        props.navigation.navigate('Artilheiros');
    }

    const abrirTitulos = () => {
        props.navigation.navigate('Titulos');
    }

    return(
        <View>
            <ImageBackground resizeMode="cover" blurRadius={10} style={estilosGlobal.imagemFundo} source={bg}>
                <Text style={estilosGlobal.titulo}>Brasil nas copas do mundo</Text>
                <ItemInicio acao={abrirFinais} fundo={bg_finais} texto="Finais" />
                <ItemInicio acao={abrirArtilheiros} fundo={bg_artilheiros} texto="Artilheiros" />
                <ItemInicio acao={abrirTitulos} fundo={bg_titulos} texto="Títulos" />
            </ImageBackground>
        </View>
    );
}

export default TelaInicio