import React from "react";
import { ImageBackground, Image, Text, View } from "react-native";

import estilos from "./estilos";

const ItemTitulo = (props) => {
    return(
        <View style={estilos.itemTitulos}>
            <ImageBackground source={props.fundo} borderRadius={20} style={estilos.imagemFundoTitulos}>
                <View style={estilos.fundoEscuro}>
                    <View style={estilos.areaLocal}>
                        <Text style={estilos.local}>{props.pais}</Text>
                        <Image style={estilos.estrela} source={props.imagemTitulo}/>
                    </View>
                    <View style={estilos.areaAnos}>
                        <Text style={estilos.ano}>{props.ano}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ItemTitulo