import React from 'react'
import { ImageBackground, ScrollView, View, Text, Image } from 'react-native'
import Corrida1 from '../../assets/corrida1.jpg'
import Vitoria1 from '../../assets/vitoria1.jpg'
import Vitoria2 from '../../assets/vitoria2.jpg'
import Vitoria3 from '../../assets/vitoria3.jpg'
import estilos from './style'
import { FontAwesome5 } from '@expo/vector-icons';

export default function TelaVitorias() {
    return (
        <ScrollView>
            <ImageBackground source={Corrida1} style={estilos.container} blurRadius={5}>

                <View style={estilos.card1}>
                    <Text style={estilos.cardTitulo}>Senna em Números</Text>
                    <Text style={estilos.cardDescr}>Ele consquistou três campeonatos mundiais em 1988,1990 e 1991. Ganhou 41 Grandes Prêmios e 65 pole positions.</Text>

                    <View style={estilos.card2}>
                        <FontAwesome5 name='trophy' color='#ceb105' size={25} />
                        <Text style={estilos.card2Texto1}>161</Text>
                        <Text style={estilos.card2Texto2}>GP's DISPUTADOS</Text>
                    </View>

                    <View style={estilos.card2}>
                        <FontAwesome5 name='trophy' color='#ceb105' size={25} />
                        <Text style={estilos.card2Texto1}>65</Text>
                        <Text style={estilos.card2Texto2}>POLE POSITIONS</Text>
                    </View>
                    <View style={estilos.card2}>
                        <FontAwesome5 name='trophy' color='#ceb105' size={25} />
                        <Text style={estilos.card2Texto1}>41</Text>
                        <Text style={estilos.card2Texto2}>VITÓRIAS</Text>
                    </View>
                    <View style={estilos.card2}>
                        <FontAwesome5 name='trophy' color='#ceb105' size={25} />
                        <Text style={estilos.card2Texto1}>3</Text>
                        <Text style={estilos.card2Texto2}>VEZES CAMPEÃO MUNDIAL</Text>
                    </View>
                </View>

                <View style={estilos.card3}>
                    <Text style={estilos.card3Texto}>Campeonato Mundial - 1988</Text>
                    <Image style={estilos.card3Img} source={Vitoria1} />
                </View>
                <View style={estilos.card3}>
                    <Text style={estilos.card3Texto}>Campeonato Mundial - 1990</Text>
                    <Image style={estilos.card3Img} source={Vitoria2} />
                </View>
                <View style={estilos.card3}>
                    <Text style={estilos.card3Texto}>Campeonato Mundial - 1991</Text>
                    <Image style={estilos.card3Img} source={Vitoria3} />
                </View>
            </ImageBackground>
        </ScrollView>
    )
};
