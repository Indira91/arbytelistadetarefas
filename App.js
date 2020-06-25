
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import TelaDeLogin from './src/telas/TelaDeLogin';
import TelaAdicionaTarefa from './src/telas/TelaAdicionaTarefa';
import TelaDeCadastro from './src/telas/TelaDeCadastro'

const Stack = createStackNavigator();

function ListaDeTarefas(){
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={TelaDeLogin} options={{ headerShown: false}}/>
        <Stack.Screen name='AdicionaTarefa' component={TelaAdicionaTarefa} />
        <Stack.Screen name='TelaCadastro' component={TelaDeCadastro} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default ListaDeTarefas;


