import React, { Component } from 'react';
import { SafeAreaView, Text, View, ImageBackground } from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';
import CaixaDeTexto from '../componentes/CaixaDeTexto';
import { logar } from '../API/usuario'


class TelaDeLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }
    loginDoUsuario = () => {
        logar()
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={img} style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', flex: 1, justifyContent: "space-evenly" }}>
                        <View style={{ justifyContent: 'center', flex: 4 }}>
                            <Text style={Styles.textum}>LOGIN</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-start', flex: 4 }}>
                            <CaixaDeTexto value={this.state.email} placeholder='email' onChangeText={email => this.setState({ email: this.state.email = email })} />
                        </View>
                        <View style={{ justifyContent: 'space-around', flex: 3 }}>
                            <BotaoPadrao text='Entrar' onPress={() => this.props.navigation.navigate('AdicionaTarefa')} />
                        </View>
                        <View style={{ justifyContent: 'flex-start', flex: 3 }}>
                            <BotaoPadrao text='Cadastre-se' onPress={() => this.props.navigation.navigate('TelaCadastro')} />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;

