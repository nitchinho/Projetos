import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style'

import Hospedagem1 from '../../assets/hospedagens/hospedagem01.png'
import Hospedagem2 from '../../assets/hospedagens/hospedagem02.png'
import Hospedagem3 from '../../assets/hospedagens/hospedagem03.png'

export default function Passeios(props) {
    return (
        <View style={style.container}>
            <Text style={style.titulo}>Pousadas e Hotéis em Paraty</Text>
            <Text style={style.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>

            <View style={style.cards}>
                <Image style={style.img} source={Hospedagem1} />
                <Text style={style.cardTitulo}>Pousada Missanga</Text>
                <Text style={style.cardDescricao}>Valor médio: R$ 350,00</Text>
                <Text style={style.cardDescricao}>Localização: Próx. à Av. Roberto Silveira</Text>
            </View>
            <View style={style.cards}>
                <Image style={style.img} source={Hospedagem2} />
                <Text style={style.cardTitulo}>Pousada Morro do Forte</Text>
                <Text style={style.cardDescricao}>Valor médio: R$ 450,00</Text>
                <Text style={style.cardDescricao}>Localização: Próximo à Praia - Pontal</Text>
            </View>
            <View style={style.cards}>
                <Image style={style.img} source={Hospedagem3} />
                <Text style={style.cardTitulo}>Pousada Porto Imperial</Text>
                <Text style={style.cardDescricao}>Valor médio: R$ 550,00</Text>
                <Text style={style.cardDescricao}>Localização: Centro Histórico</Text>
            </View>

        </View>
    )
}
