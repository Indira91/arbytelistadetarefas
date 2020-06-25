import React from 'react';
import {TextInput} from 'react-native';

export default function CaixaDeTexto (props) {
    return (
        <TextInput placeholderTextColor= '#848484' placeholder= {props.placeholder}
        style={{
            backgroundColor:'#81BEF7',
            textAlign: 'center',
            height: 50,
            width: 260,
            borderRadius: 5,
            opacity: 1,
            borderWidth: 1,
            fontSize: 23
        }}
        onChangeText={props.onChangeText}
        value={props.value}
        />
        
    )
}