
import React from 'react';
import { TextInput, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import {CartaoAddTarefa} from '../componentes/CartaoAddTarefa';

export function EntradaTarefa(props) {
    return (
        <SafeAreaView style={{
            backgroundColor: '#81BEF7',
            height: 45,
            width: 380,
            borderRadius: 3,
            opacity: 1,
            borderWidth: 1,
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <View style={{ flex: 9 }}>
                <TextInput
                    style={{ fontSize: 20 }}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={'Insira uma tarefa'}
                    placeholderTextColor='#848484'
                    maxLength={28}
                />
            </View>
            <View style={{ flex: 1.8 }}>
                <CartaoAddTarefa/>
            </View>
        </SafeAreaView>

    )
};

export function Tarefas(props) {
    return (
        <ScrollView>
            <SafeAreaView
                style={{
                    backgroundColor: '#81BEF7',
                    height: 45,
                    width: 380,
                    borderRadius: 3,
                    opacity: 1,
                    borderWidth: 1,
                    marginTop: 25,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <View>
                    <TextInput
                        style={{ fontSize: 20 }}
                        onChangeText={props.onChangeText}
                        value={props.value}
                        placeholder={'Insira uma tarefa'}
                        placeholderTextColor='#848484'
                        maxLength={40}
                    />
                </View>

            </SafeAreaView>
        </ScrollView>
    )
};