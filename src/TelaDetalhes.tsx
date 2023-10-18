// TelaDetalhes.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type TelaDetalhesProps = {
  navigation: StackNavigationProp<any>;
}

const TelaDetalhes: React.FC<TelaDetalhesProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Tela de Detalhes</Text>
      <Button
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Tela de Configurações')}
      />
    </View>
  );
}

export default TelaDetalhes;
