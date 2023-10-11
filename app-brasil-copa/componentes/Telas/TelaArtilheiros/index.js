import React from "react";
import { ScrollView, ImageBackground, Text } from "react-native";

import estilosGlobal from "../../../assets/estilo";

import bg from '../../../assets/background.png';

import ronaldo from '../../../assets/artilheiros/ronaldo.png';
import pele from '../../../assets/artilheiros/pele.png';
import ademir from '../../../assets/artilheiros/ademir.png';
import vava from '../../../assets/artilheiros/vava.png';
import jairzinho from '../../../assets/artilheiros/jairzinho.png';
import ItemArtilheiro from "./itemArtilheiro.js";

const TelaArtilheiros = () => {
    return(
        <ScrollView>
            <ImageBackground resizeMode="cover" blurRadius={10} source={bg}>
                <Text style={estilosGlobal.titulo}>Artilheiros</Text>
                <ItemArtilheiro foto={ronaldo} nome="Ronaldo" gols="15" anos="1994 - 1998 - 2002 - 2006" />
                <ItemArtilheiro foto={pele} nome="Pelé" gols="12" anos="1958 - 1962 - 1966 - 1970" />
                <ItemArtilheiro foto={ademir} nome="Ademir" gols="9" anos="1950" />
                <ItemArtilheiro foto={vava} nome="Vavá" gols="9" anos="1958 - 1962" />
                <ItemArtilheiro foto={jairzinho} nome="Jairzinho" gols="9" anos="1966 - 1970 - 1974" />
            </ImageBackground>
        </ScrollView>
    );
}

export default TelaArtilheiros