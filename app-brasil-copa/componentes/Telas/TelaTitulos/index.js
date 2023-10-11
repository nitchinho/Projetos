import React from "react";
import { ScrollView, ImageBackground, Text } from "react-native";

import estilosGlobal from "../../../assets/estilo";

import bg from '../../../assets/background.png';

import campeao from '../../../assets/1.png';
import bi from '../../../assets/2.png';
import tri from '../../../assets/3.png';
import tetra from '../../../assets/4.png';
import penta from '../../../assets/5.png';

import solna from '../../../assets/cidades/solna.png';
import santiago from '../../../assets/cidades/santiago.png';
import cidademexico from '../../../assets/cidades/cidademexico.png';
import pasadena from '../../../assets/cidades/pasadena.png';
import yokohama from '../../../assets/cidades/yokohama.png';
import ItemTitulo from "./itemTitulo";

const TelaTitulos = () => {
    return(
        <ScrollView>
            <ImageBackground resizeMode="cover" blurRadius={10} style={estilosGlobal.imagemFundo} source={bg}>
                <Text style={estilosGlobal.titulo}>Títulos</Text>
                <ItemTitulo fundo={solna} pais="Suécia" imagemTitulo={campeao} ano="1958" />
                <ItemTitulo fundo={santiago} pais="Chile" imagemTitulo={bi} ano="1962" />
                <ItemTitulo fundo={cidademexico} pais="México" imagemTitulo={tri} ano="1970" />
                <ItemTitulo fundo={pasadena} pais="EUA" imagemTitulo={tetra} ano="1994" />
                <ItemTitulo fundo={yokohama} pais="Japão" imagemTitulo={penta} ano="2002" />
            </ImageBackground>
        </ScrollView>
    );
}

export default TelaTitulos;