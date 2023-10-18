// TelaInicial.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type TelaInicialProps = {
  navigation: StackNavigationProp<any>;
}

const TelaInicial: React.FC<TelaInicialProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Tela de Detalhes')}
      />
    </View>
  );
}

export default TelaInicial;
