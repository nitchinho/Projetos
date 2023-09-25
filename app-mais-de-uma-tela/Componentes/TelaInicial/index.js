import React from "react"
import { View, Text } from "react-native"

export default function TelaInicial() {
    return (
        <View>
            <Text>
                Tela Inicial
            </Text>
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});