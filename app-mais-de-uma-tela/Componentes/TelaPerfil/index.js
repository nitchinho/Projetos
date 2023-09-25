import React from "react"
import { View, Text, Button } from "react-native"

export default function TelaPerfil(props) {
    return (
        <View>
            <Text>
                Tela do Perfil
            </Text>
            <Button
            title="Ir para Tela Inicial"
            onPress={()=> {props.navigation.navigate('Início')}}
            />
        </View>
    );    
}