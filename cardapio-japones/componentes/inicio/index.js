import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import logo from '../../assets/logo.png'
import style from './style'
import ItemCardapio from '../ItemCardapio';
import { searchItemCardapio, filterSugestoes } from '../../services';

export default function Inicio() {

    const [titulo, setTitulo] = useState("Sugestões")
    const [termo, setTermo] = useState();
    const [cardapioLista, setCardapioLista] = useState(filterSugestoes())

    function handleSearch(inputTerm) {
        if (inputTerm.length > 2) {
            const buscaLista = searchItemCardapio(inputTerm)

            setCardapioLista(buscaLista);
            setTitulo("Você buscou por: " + inputTerm)
        }
        else {
            setCardapioLista(filterSugestoes())
            setTitulo("Sugestões")
        }
        setTermo(inputTerm);
    }

    return (
        <View style={style.container}>
            <View style={style.logoArea}>
                <Image source={logo} style={style.logo}></Image>
                <Text style={style.logoTitle}>CARDÁPIO JAPONÊS</Text>
            </View>
            <TextInput onChangeText={(inputTerm) => handleSearch(inputTerm)} value={termo} placeholder='O que você procura?' style={style.inputSearch} keyboardType='default' ></TextInput>
            <Text style={style.title}>{titulo}</Text>
            <ScrollView>
                {
                    cardapioLista.map((produto, index) => (
                        <ItemCardapio key={index} titulo={produto.nome} descricao={produto.descricao} imagem={produto.imagem} />
                    ))
                }
            </ScrollView>
        </View>
    )
};






