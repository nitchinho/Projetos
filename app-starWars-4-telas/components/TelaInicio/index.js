import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import Logo from '../../assets/logo.jpg'

export default function TelaInicio(props) {
    return (
        <View>
            <Text>
                Star Wars ordem cronológica
            </Text>
            <Image
                source={Logo}
            />

            <Text>
                Você sabe qual é a ordem cronológica da franquia Star Wars?
            </Text>

            <Text>
                Os principais filmes da franquia estão divididos em trilogias. Clique no botão a seguir para conferir:
            </Text>

            <Button
            title='Ver a 1ª Trilogia'
            onPress={() => props.navigation.navigate('Trilogia 1')} color={"#372d00"}
            />
            <Button
            title='Ver a 2ª Trilogia'
            onPress={() => props.navigation.navigate('Trilogia 2')} color={"#372d00"}
            />
            <Button
            title='Ver a 3ª Trilogia'
            onPress={() => props.navigation.navigate('Trilogia 3')} color={"#372d00"}
            />
        </View>
    )
}
