import React from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native';


export default function BotaoPadrao(props) {
    const lidarComClique = () => {
        
    };

    return (
    <TouchableOpacity 
        onPress={props.onPress}
       style={{
            alingnItems: 'center',
            borderRadius: 20,
            height: 57,
            width: 200, 
            backgroundColor: '#FF8000',
            borderColor: 'black',
            borderWidth: 2,
            alignItems: 'center'

        }}>
            <Text style={{
                fontSize: 33,
                color: 'black',
                fontWeight: "bold"
            }}>
                {props.text}
            </Text>
        
    </TouchableOpacity>
    )
}