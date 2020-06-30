import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'


export function CartaoAddTarefa(props) {
  return (
    <CheckBox 
      uncheckedIcon={<Image source={require('../img/canvas.png')} style={{height: 40, width: 40, tintColor:'green' }}/>}
    //checked={this.state.checked}
    //onPress={() => this.setState({checked: !this.state.checked})}
    />
  )
}

export function CartaoDeleTarefa(props) {
  return (
    <CheckBox
    uncheckedIcon={<Image source={require('../img/canvas.png')} style={{height: 40, width: 40, tintColor:'green' }}/>}
    />
  )

}
//      checkedIcon={<Image source={require('../img/canvas.png' )} style={{height: 30, width:30}} />}
