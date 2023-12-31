import React from "react";
import { View, Text, Image } from "react-native";

import estilo from "../../assets/estilos/estilos";
import console from '../../assets/historia/console-xbox.png';

export default function Historia() {
    return (
        <View>
            <Text style={estilo.titulo}>História do Xbox</Text>

            <Image style={estilo.capa} source={console} />

            <Text style={estilo.descricao}>A Microsoft começou sua história com o público gamer em 2001, com o lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o dos seus concorrentes.

            {"\n"}
            {"\n"}

            E para mostrar a capacidade desse novo console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e foi aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, principalmente nos Estados Unidos.
            </Text>
        </View>
	)
}