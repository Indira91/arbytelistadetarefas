import React, {Component} from 'react';
import { SafeAreaView, View, ImageBackground} from 'react-native'

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles'


class TelaDeLogin extends Component {
    constructor() {
        super();
            this.state = {
                email: ''
            }
    }
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <ImageBackground source={img} styles={Styles.background}>

                </ImageBackground>

            </SafeAreaView>
        )
    }
}

export default TelaDeLogin;