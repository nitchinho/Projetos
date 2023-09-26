import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import style from './style';

import Imagem from '../../assets/01.png'

export default function Inicio(props) {
    return (
        <View style={style.container}>
            <View style={style.card}>
                <Text style={style.titulo}>Paraty</Text>
                <Text style={style.paragrafo}>Saiba o que visitar em Paraty</Text>

                <Image source={Imagem} style={style.img} />

                <View style={style.boxbotao}>
                    <Button
                        style={style.botao}
                        title='VER RESTAURANTES'
                        onPress={() => props.navigation.navigate('Restaurantes')}
                        color="#372d00"
                    />
                </View>

                <View style={style.boxbotao}>
                    <Button                        
                        title='VER PASSEIOS'
                        onPress={() => props.navigation.navigate('Passeios')}
                        color="#372d00"
                    />
                </View>

                <View style={style.boxbotao}>
                    <Button
                        style={style.botao}
                        title='VER HOSPEDAGEM'
                        onPress={() => props.navigation.navigate('Hospedagem')}
                        color="#372d00"
                    />
                </View>
            </View>

        </View>
    );
}