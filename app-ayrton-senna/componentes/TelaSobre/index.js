import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import FotoCapa from '../../assets/foto-capa.jpg'
import Preparacao from '../../assets/preparacao.png'
import ReiChuva from '../../assets/rei-da-chuva.png'
import ReiMonaco from '../../assets/rei-de-monaco.png'
import Silverstone from '../../assets/silvastone.png'

import estilos from './style'

export default function TelaSobre() {
    return (
        <View style={estilos.container}>
            <View style={estilos.Topo}>
                <Text style={estilos.TopoTitulo}>Ayrton Senna</Text>
                <Image style={estilos.TopoImg} source={FotoCapa} />
                <Text style={estilos.TopoDescr} >No esporte mais global e veloz do mundo, um piloto é considerado rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria de automobilismo mundial.</Text>
            </View>

            <ScrollView>
                <View style={estilos.card}>
                    <Image style={estilos.imgCard} source={ReiChuva} />
                    <View style={estilos.boxTexto}>
                        <Text style={estilos.boxTitulo}>Rei da chuva</Text>
                        <Text>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imgCard} source={ReiMonaco} />
                    <View style={estilos.boxTexto}>
                        <Text style={estilos.boxTitulo}>Rei da Mônaco</Text>
                        <Text>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imgCard} source={Silverstone} />
                    <View style={estilos.boxTexto}>
                    <Text style={estilos.boxTitulo}>"Silvastone"</Text>
                        <Text>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imgCard} source={Preparacao} />
                    <View style={estilos.boxTexto}>
                    <Text style={estilos.boxTitulo}>Preparação</Text>
                        <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};
