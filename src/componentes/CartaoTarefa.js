import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'


export default function CartaoTarefa(props) {
  return (
    <CheckBox 
      uncheckedIcon={<Image source={require('../img/canvas.png')} style={{height: 40, width: 40, tintColor:'green' }}/>}
    //checked={this.state.checked}
    //onPress={() => this.setState({checked: !this.state.checked})}
    />
  )
}

//      checkedIcon={<Image source={require('../img/canvas.png' )} style={{height: 30, width:30}} />}
