import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductListScreen from './src/ProductListScreen';
import ProductDetailScreen from './src/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
      }}>
        <Stack.Screen name="PRODUCTLIST" component={ProductListScreen} />
        <Stack.Screen name="PRODUCTDETAIL" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

