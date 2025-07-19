// src/screens/DetalleScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetalleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalle de Usuario</Text>
      <Button title="Volver al Perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}
