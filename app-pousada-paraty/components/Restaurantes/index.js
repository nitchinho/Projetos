import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import style from './style'

import Bar1 from '../../assets/restaurantes/restaurante01.png'
import Bar2 from '../../assets/restaurantes/restaurante02.png'
import Bar3 from '../../assets/restaurantes/restaurante03.png'

export default function Restaurante(props) {
    return (
        <View style={style.container}>
            <Text style={style.titulo}>Bares e Restaurantes</Text>
            <Text style={style.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>
            <View style={style.cards}>
                <Image style={style.img} source={Bar1}/>
                <Text style={style.cardTitulo}>Armazén Mar</Text>
                <Text>Localização: Rod Rio-Santos</Text>
            </View>
            <View style={style.cards}>
                <Image style={style.img} source={Bar2}/>
                <Text style={style.cardTitulo}>Bendita's Restaurante</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>
            <View style={style.cards}>
                <Image style={style.img} source={Bar3}/>
                <Text style={style.cardTitulo}>Sereira do Mar Pizza-Bar</Text>
                <Text>Localização: Praia do Jabaquara</Text>
            </View>

        </View>
    )
}
