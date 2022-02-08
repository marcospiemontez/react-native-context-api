import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Pedidos from './pages//Pedidos/index';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Pedidos" component={Pedidos}/>
    </Stack.Navigator>
  );
}


export default Routes;