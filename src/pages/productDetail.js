import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

export function ProductDetailScreen({navigation}) {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="magnify" onPress={null} />
          <Appbar.Action icon="cart-outline" onPress={null} />
        </Appbar.Header>
        <Text>Detalle</Text>
      </SafeAreaView>
    </>
  );
}
