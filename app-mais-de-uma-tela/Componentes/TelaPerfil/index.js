import React from "react"
import { View, Text } from "react-native"

export default function TelaPerfil() {
    return (
        <View>
            <Text>
                Tela do Perfil
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