import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Inicio from './componentes/inicio/'
import Categoria from './componentes/categoria/'
import options from './utils/screenOptions';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Balas" component={Categoria} initialParams={{ categoria: "Balas" }} />
      <Tab.Screen name="Chicletes" component={Categoria} initialParams={{ categoria: "Chicletes" }} />
      <Tab.Screen name="Pirulitos" component={Categoria} initialParams={{ categoria: "Pirulitos" }} />
      <Tab.Screen name="Candy Toys" component={Categoria} initialParams={{ categoria: "Candy Toys" }} />
      <Tab.Screen name="Licenciados" component={Categoria} initialParams={{ categoria: "Licenciados" }} />
      <Tab.Screen name="Brinquedos" component={Categoria} initialParams={{ categoria: "Licenciados" }} />
      <Tab.Screen name="Outros" component={Categoria} initialParams={{ categoria: "Outros" }} />      
    </Tab.Navigator>
  );
}