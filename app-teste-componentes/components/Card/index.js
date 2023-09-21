import React from "react";
import { View, Text, Image } from "react-native";

import Foto from '../../assets/Foto.png'

export default function Card() {
    return (
        <View>
            <View>
                <Image source={Foto} />
                <Text>Samuel Jackson</Text>
                <Text>Ator e produtor norte-americano</Text>
            </View>
        </View>
    );
}