import React from "react";
import { ImageBackground, Text, View } from "react-native";

import estilos from "./estilos";


const ItemArtilheiro = (props) => {
    return(
        <View style={estilos.itemArtilheiros}>
            <ImageBackground source={props.foto} borderRadius={20} style={estilos.imagemFundoArtilheiros}>
                <View style={estilos.fundoEscuro}>
                    <View style={estilos.areaGols}>
                        <Text style={estilos.nome}>{props.nome}</Text>
                        <Text style={estilos.gols}>{props.gols} Gols</Text>
                    </View>
                    <View style={estilos.areaAnos}>
                        <Text style={estilos.anos}>{props.anos}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ItemArtilheiro;