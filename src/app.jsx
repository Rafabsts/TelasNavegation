import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Tela de Detalhes" component={TelaDetalhes} />
        <Stack.Screen name="Tela de Configurações" component={TelaConfiguracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

