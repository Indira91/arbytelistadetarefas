import React from 'react';
import {TextInput} from 'react-native';

export default function CaixaDeTexto (props) {
    return (
        <TextInput  
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
        placeholder= {props.placeholder}
        placeholderTextColor= '#848484'
        />
        
    )
}