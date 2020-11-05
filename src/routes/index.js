import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../pages/productsList';
import {ProductDetailScreen} from '../pages/productDetail';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
