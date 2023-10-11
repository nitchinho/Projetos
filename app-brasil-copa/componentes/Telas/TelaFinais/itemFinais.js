import React from "react";
import { ImageBackground, Image, Text, View } from "react-native";

import estilos from "./estilos";

const ItemFinal = (props) => {
    return(
        <View style={estilos.itemFinais}>
            <ImageBackground source={props.estadio} borderRadius={20} style={estilos.imagemFundoFinais}>
                <View style={estilos.fundoEscuro}>
                    <Text style={estilos.ano}>{props.anoLocal}</Text>
                    <View style={estilos.areaResultado}>
                        <Image style={estilos.bandeira} source={props.bandeiraVitoria}/>
                        <Text style={estilos.resultado}>{props.resultado}</Text>
                        <Image style={estilos.bandeira} source={props.bandeiraDerrota}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ItemFinal