import React, {Component} from 'react';
import { SafeAreaView, Text, View, ImageBackground} from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';
import EntradaTarefa from '../componentes/EntradaTarefa';

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
                        <View>
                            <Text style={Styles.textum}>Olá indira,</Text>
                            <Text style={Styles.textres}>Aqui pode cadastrar suas tarefas</Text>
                        </View> 
                        <View>
                            <EntradaTarefa/>
                        </View>
                        <View>
                            <BotaoPadrao text='Sair' onPress={() => this.props.navigation.navigate('Login')} />   
                        </View>

                    </View> 
                    

               </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;