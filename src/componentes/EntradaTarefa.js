
import React, { useState } from 'react';
import { TextInput, Text, View, Image, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements';


function CartaoAddTarefa(props) {
    return (
        <CheckBox
            uncheckedIcon={<Image source={require('../img/adicionar.png')} style={{ height: 28, width: 28, tintColor: 'red' }} />}
        />
    )

};

function CartaoCheckTarefa(props) {
    return (
        <CheckBox
            uncheckedIcon={<Image source={require('../img/check.png')} style={{ height: 35, width: 35, tintColor: 'green' }} />}
        //checked={this.state.checked}
        //onPress={() => this.setState({checked: !this.state.checked})}
        />
    )
};

function CartaoEditeAddTarefa(props) {
    return (
        <CheckBox
            uncheckedIcon={<Image source={require('../img/editaeadd.png')} style={{ height: 28, width: 28 }} />}
        />
    )

};
function CartaoDeleTarefa(props) {
    return (
        <CheckBox
            uncheckedIcon={<Image source={require('../img/apagar.png')} style={{ height: 28, width: 28 }} />}
        />
    )

}



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
            justifyContent: 'space-between',
        }}>
            <View style={{ flex: 14 }}>
                <TextInput
                    style={{ fontSize: 18 }}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={'Insira uma tarefa'}
                    placeholderTextColor='#848484'
                    maxLength={40}
                />
            </View>
            <View style={{ flex: 2.6 }}>
                <CartaoAddTarefa />
            </View>
        </SafeAreaView>

    )
};

export function Tarefas(props) {
    return (
                <SafeAreaView
                    style={{
                        backgroundColor: '#FFA07A',
                        height: 45,
                        width: 380,
                        borderRadius: 3,
                        opacity: 0.85,
                        borderWidth: 1,
                        marginTop: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                       

                    }}>

                    <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                        <CartaoCheckTarefa />
                    </View>

                    <View style={{ flex: 3.5, alignItems: 'flex-start' }}>
                        <TextInput
                            style={{ fontSize: 20, marginHorizontal: 13 }}
                            onChangeText={props.onChangeText}
                            value={props.value}
                            placeholder={'Editar a tarefa'}
                            placeholderTextColor='#848484'
                            maxLength={40}
                        />
                    </View>

                    <View style={{ flex: 0.4 }}>
                        <CartaoEditeAddTarefa />
                    </View>

                    <View style={{ flex: 0.7 }}>
                        <CartaoDeleTarefa />
                    </View>

                </SafeAreaView> 
    )
};

// checkedIcon={<Image source={require('../img/canvas.png' )} style={{height: 30, width:30}} />}