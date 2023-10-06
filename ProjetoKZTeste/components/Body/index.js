import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import style from './styles'
import Logo from '../../assets/logokz.png'

export default function Body() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={Logo} style={style.logo} />
                <Text style={style.title}>TELA DE ITENS</Text>
            </View>
        </View>
    )
};
