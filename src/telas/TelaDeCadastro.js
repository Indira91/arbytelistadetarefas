import React, {Component} from 'react';
import { SafeAreaView, Text, View, ImageBackground} from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';
import CaixaDeTexto from '../componentes/TextInput';


class TelaDeLogin extends React.Component {
    constructor() {
        super();
            this.state = {
                email: '',
                usuario:''
            }
    }
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ImageBackground source={img} style={{flex: 1}}>
                    <View style={{alignItems: 'center', flex: 1, justifyContent: "space-evenly"}}>
                        <View style={{justifyContent: 'flex-end', flex: 1.5}}>
                            <Text style={Styles.textdois}>CADASTRO</Text>
                        </View>
                        <View style={{justifyContent: 'space-around', flex: 1.3}}> 
                            <CaixaDeTexto value={this.state.usuario} placeholder='usuario' onChangeText={usuario => this.setState({ usuario: this.state.usuario = usuario})}/>
                            <CaixaDeTexto value={this.state.email} placeholder='email' onChangeText={email => this.setState({ email: this.state.email = email })}/>
                        </View>
                        <View style={{justifyContent: 'space-around', flex: 2}}>  
                            <BotaoPadrao text='Cadastrar' onPress={() => this.props.navigation.navigate('Login')}/>
                        </View>
                    </View>
               </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;