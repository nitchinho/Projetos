import React from "react";
import { ScrollView, ImageBackground, Text } from "react-native";

import estilosGlobal from "../../../assets/estilo";

import bg from '../../../assets/background.png';

import brasil from '../../../assets/bandeiras/brasil.png';
import uruguai from '../../../assets/bandeiras/uruguai.png';
import suecia from '../../../assets/bandeiras/suecia.png';
import tcheco from '../../../assets/bandeiras/tchecoslovaquia.png';
import italia from '../../../assets/bandeiras/italia.png';
import franca from '../../../assets/bandeiras/franca.png';
import alemanha from '../../../assets/bandeiras/alemanha.png';

import maracana from '../../../assets/estadios/estadio_brasil.png';
import rasunda from '../../../assets/estadios/estadio_suecia.png';
import nacional from '../../../assets/estadios/estadio_chile.png';
import azteca from '../../../assets/estadios/estadio_mexico.png';
import rose from '../../../assets/estadios/estadio_eua.png';
import stade from '../../../assets/estadios/estadio_franca.png';
import yokohama from '../../../assets/estadios/estadio_japao.png';
import ItemFinal from "./itemFinais";

const TelaFinais = () => {
    return(
        <ScrollView>
            <ImageBackground resizeMode="cover" blurRadius={10} source={bg}>
                <Text style={estilosGlobal.titulo}>Finais</Text>
                <ItemFinal estadio={maracana} anoLocal="1950 - Maracanã, Brasil" bandeiraVitoria={uruguai} bandeiraDerrota={brasil} resultado="2x1" />
                <ItemFinal estadio={rasunda} anoLocal="1958 - Rasunda,Suécia" bandeiraVitoria={brasil} bandeiraDerrota={suecia} resultado="5x2" />
                <ItemFinal estadio={nacional} anoLocal="1962 - Estadio Nacional, Chile" bandeiraVitoria={brasil} bandeiraDerrota={tcheco} resultado="3x1" />
                <ItemFinal estadio={azteca} anoLocal="1970 - Estádio Azteca, México" bandeiraVitoria={brasil} bandeiraDerrota={italia} resultado="4x1" />
                <ItemFinal estadio={rose} anoLocal="1994 - Rose Bowl, EUA" bandeiraVitoria={brasil} bandeiraDerrota={italia} resultado="0x0" />
                <ItemFinal estadio={stade} anoLocal="1998 - Stade de France, França" bandeiraVitoria={franca} bandeiraDerrota={brasil} resultado="3x0" />
                <ItemFinal estadio={yokohama} anoLocal="2002 - Yokohama, Japão" bandeiraVitoria={brasil} bandeiraDerrota={alemanha} resultado="2x0" />
            </ImageBackground>
        </ScrollView>
    );
}

export default TelaFinais