import React, {Component} from 'react';
import { SafeAreaView, Text, View, ImageBackground} from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';


class TelaDeLogin extends React.Component {
    constructor() {
        super();
            this.state = {
                email: ''
            }
    }
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ImageBackground source={img} style={{flex: 1}}>
                  <View style={{alignItems: 'center', flex: 1, justifyContent: "space-evenly"}}>
                    <Text style={Styles.textum}>LOGIN</Text>
                    <BotaoPadrao text='Entrar' onPress={() => this.props.navigation.navigate('AdicionaTarefa')} />
                    <BotaoPadrao text='Cadastre-se' onPress={() => this.props.navigation.navigate('TelaCadastro')}/>
    
                  </View>  
               </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;

