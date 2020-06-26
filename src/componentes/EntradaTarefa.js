import React from 'react';
import { TextInput, Text, View} from 'react-native';

export default function EntradaTarefa (props){
    return (
        <TextInput  
        style={{
            backgroundColor:'#81BEF7',
            textAlign: 'center',
            height: 45,
            width: 360,
            borderRadius: 3,
            opacity: 1,
            borderWidth: 1,
            fontSize: 20
        }}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder= {props.placeholder}
        placeholderTextColor= '#848484'
        maxLength = {36}
        />

    )
}