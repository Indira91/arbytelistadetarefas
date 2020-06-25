import React, {Component} from 'react';
import { SafeAreaView, Text, View, ImageBackground} from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles'


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
                  <View>
                    <Text style={Styles.textum}>LOGIN</Text>
                  </View>
               </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;

