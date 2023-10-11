import { createStackNavigator } from "@react-navigation/stack";

    import Inicio from '../Telas/TelaInicio'
    import Artilheiros from '../Telas/TelaArtilheiros'
    import Finais from '../Telas/TelaFinais'
    import Titulos from '../Telas/TelaTitulos'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen
            name="Inicio"
            component={Inicio}
            />
            <Stack.Screen
            name="Artilheiros"
            component={Artilheiros}
            />
            <Stack.Screen
            name="Finais"
            component={Finais}
            />
            <Stack.Screen
            name="Titulos"
            component={Titulos}
            />
        </Stack.Navigator>
    )
}
