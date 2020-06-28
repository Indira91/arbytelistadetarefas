import React, {Component} from 'react';
import { SafeAreaView, Text, View, ImageBackground, Image} from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';
import {EntradaTarefa} from '../componentes/EntradaTarefa';
import CartaoTarefa from '../componentes/CartaoTarefa';


class TelaAdicionaTarefa extends React.Component {
    constructor() {
        super();
            this.state = {
                tarefa: ''
            }
    }
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ImageBackground source={img} style={{flex: 1}}>
                    <View style={{alignItems: 'center', flex: 1, justifyContent: "space-evenly"}}>
                        <View style={{alignItems: "flex-start", flex: 2, marginTop: 8}}>
                            <Text style={Styles.textum}>Olá indira,</Text>
                            <Text style={Styles.textres}>Aqui pode cadastrar suas tarefas</Text>
                            <EntradaTarefa/>

                        </View> 
                        <View style={{alignItems: "flex-start", flex: 4}}>

                        </View>
                        <View style={{justifyContent: 'flex-end', flex: 2, marginBottom: 20}}>
                            <BotaoPadrao text='Sair' onPress={() => this.props.navigation.navigate('Login')} />   
                        </View>

                    </View> 
                    

               </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaAdicionaTarefa;

