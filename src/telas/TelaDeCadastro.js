import React, { Component } from 'react';
import { SafeAreaView, Text, View, ImageBackground, Alert } from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';
import CaixaDeTexto from '../componentes/CaixaDeTexto';
import { cadastrar } from '../API/usuario';


class TelaDeLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            nome: ''
        }
    }
    fazerCadastro = () => {
            
        cadastrar(this.state.nome, this.state.email )
            .then(() => {
                Alert.alert('Cadastrado com sucesso');
                this.props.navigation.navigate('Login')
            })
            .catch(() => {
                if (this.state.email != ''){
                Alert.alert('Usuario já existe')
                }else{
                Alert.alert('Erro ao cadastrar, tente novamente')   
                }
                
             })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={img} style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', flex: 1, justifyContent: "space-evenly" }}>
                        <View style={{ justifyContent: 'flex-end', flex: 1.5 }}>
                            <Text style={Styles.textdois}>CADASTRO</Text>
                        </View>
                        <View style={{ justifyContent: 'space-around', flex: 1.3 }}>
                            <CaixaDeTexto value={this.state.nome} placeholder='usuario' onChangeText={nome => this.setState({ nome: this.state.nome = nome })} />
                            <CaixaDeTexto value={this.state.email} placeholder='email' onChangeText={email => this.setState({ email: this.state.email = email })} />
                        </View>
                        <View style={{ justifyContent: 'space-around', flex: 2 }}>
                            <BotaoPadrao text='Cadastrar' onPress={this.fazerCadastro} />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;