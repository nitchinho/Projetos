import React from "react";
import { ImageBackground, Text, View } from "react-native";

import estilos from "./estilos";

const ItemInicio = (props) => {
    return(
        <View style={estilos.itemMenu} onTouchEnd={props.acao}>
            <ImageBackground borderRadius={20} style={estilos.imagemFundoMenu} source={props.fundo}>
                <View style={estilos.fundoEscuro}>
                    <Text style={estilos.textoMenu}>{props.texto}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ItemInicio