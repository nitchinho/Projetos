import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default function ItemCardapio({ imagem, titulo, descricao }) {
    return (
        <View style={styles.cardArea} >
            <View style={styles.cardImgArea}>
                <Image resizeMode='cover' style={styles.cardImg} source={imagem} />
            </View>
            <View style={styles.cardTitDesc}>
                <Text style={styles.cardTitle}>{titulo}</Text>
                <Text style={styles.cardDescr}>{descricao}</Text>
            </View>
        </View>
    )
};

