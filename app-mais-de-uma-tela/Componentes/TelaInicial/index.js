import React from "react"
import { View, Text, Button } from "react-native"


export default function TelaInicial(props) {
    return (
        <View>
            <Text>
                Tela Inicial
            </Text>
            <Button
                title="Ir para Tela de Perfil"
                onPress={() => { props.navigation.navigate('Perfil') }}
            />
        </View>
    );
};