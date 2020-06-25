
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import TelaDeLogin from './src/telas/TelaDeLogin';

const Stack = createStackNavigator();

function ListaDeTarefas(){
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={TelaDeLogin} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default ListaDeTarefas;


