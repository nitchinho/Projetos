import React from "react";
import { View, Text, Image } from "react-native";
import estilos from "./styleCard";
import Foto from '../../assets/Foto.png'

export default function Card() {
    return (
        <View style={estilos.container}>
            <View style={estilos.box}>
                <Image style={estilos.fotoCapa} source={Foto} />
                <Text style={estilos.nome}>Samuel Jackson</Text>
                <Text style={estilos.paragrafo}>Ator e produtor norte-americano</Text>
            </View>
        </View>
    );
}