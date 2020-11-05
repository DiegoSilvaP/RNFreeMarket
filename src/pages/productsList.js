import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
} from 'react-native';
import {Appbar, Button, useTheme, Text} from 'react-native-paper';
import ProductsList from '../common/services/getProducts';

export function ProductsScreen({navigation}) {
  const {colors} = useTheme();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.Action icon="menu" />
          <Appbar.Content title="Free market" subtitle="Aplicacion vergas" />
          <Appbar.Action icon="magnify" onPress={null} />
          <Appbar.Action icon="cart-outline" onPress={null} />
        </Appbar.Header>
        <View style={{margin: 10}}>
          <Text>Aqu va el puto carrusel</Text>
          <ProductsList />
        </View>
      </SafeAreaView>
    </>
  );
}
