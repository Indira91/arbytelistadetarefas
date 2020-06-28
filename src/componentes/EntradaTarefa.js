import React from 'react';
import { TextInput, Text, View, Image } from 'react-native';
import CartaoTarefa from '../componentes/CartaoTarefa';

export function EntradaTarefa(props) {
    return (
        <View style={{
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
            <TextInput
                style={{fontSize: 20}}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={'Insira uma tarefa'}  
                placeholderTextColor='#848484'
                maxLength={10}
            />
            <CartaoTarefa />
        </View>

    )
};

export function Tarefas(props) {
    return (
        <TextInput
            style={{
                backgroundColor: '#81BEF7',
                textAlign: 'justify',
                height: 45,
                width: 380,
                borderRadius: 3,
                opacity: 1,
                borderWidth: 1,
                fontSize: 20,
                marginTop: 25,
            }}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor='#848484'
            maxLength={40}
            Image={props.image}
        />


    )
}