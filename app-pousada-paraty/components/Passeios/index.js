import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style'

import Passeio1 from '../../assets/passeios/passeio01.png'
import Passeio2 from '../../assets/passeios/passeio02.png'
import Passeio3 from '../../assets/passeios/passeio03.png'

export default function Passeios(props) {
    return (
        <View style={style.container}>
            <Text style={style.titulo}>Passeios em Paraty</Text>
            <Text style={style.descricao}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja três exemplos:</Text>
            
            <View style={style.cards}>
                <Text style={style.cardTitulo}>Tirolesa</Text>
                <Image style={style.img} source={Passeio1}/>                
            </View>
            <View style={style.cards}>
                <Text style={style.cardTitulo}>Rafting</Text>
                <Image style={style.img} source={Passeio2}/>                
            </View>
            <View style={style.cards}>
                <Text style={style.cardTitulo}>Canoagem no mangue</Text>
                <Image style={style.img} source={Passeio3}/>                
            </View>

        </View>
    )
}
