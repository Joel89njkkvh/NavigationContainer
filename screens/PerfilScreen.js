// src/screens/PerfilScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil de Usuario</Text>
      <Button title="Detalles de Usuario" onPress={() => navigation.navigate('Detalle')} />
    </View>
  );
}
