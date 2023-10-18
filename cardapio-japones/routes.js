import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Inicio from './componentes/inicio/'
import Categoria from './componentes/categoria/'
import options from './utils/screenOptions';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Roll" component={Categoria} initialParams={{ categoria: "roll" }} />
      <Tab.Screen name="Sushi" component={Categoria} initialParams={{ categoria: "sushi" }} />
      <Tab.Screen name="Yakitori" component={Categoria} initialParams={{ categoria: "yakitori" }} />
      <Tab.Screen name="Yakisoba" component={Categoria} initialParams={{ categoria: "yakisoba" }} />
      <Tab.Screen name="Sashimi" component={Categoria} initialParams={{ categoria: "sashimi" }} />
      <Tab.Screen name="Temaki" component={Categoria} initialParams={{ categoria: "temaki" }} />
      <Tab.Screen name="Cogumelos" component={Categoria} initialParams={{ categoria: "cogumelos" }} />
      <Tab.Screen name="Gyoza" component={Categoria} initialParams={{ categoria: "gyoza" }} />
      <Tab.Screen name="Tempura" component={Categoria} initialParams={{ categoria: "tempura" }} />
    </Tab.Navigator>
  );
}