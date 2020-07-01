import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ImageBackground, AsyncStorage, Alert, ScrollView } from 'react-native';
import axios from 'axios';

import img from '../img/telafundo.jpg';
import Styles from '../styles/Styles';
import BotaoPadrao from '../componentes/BotaoPadrao';
import { EntradaTarefa, Tarefas } from '../componentes/EntradaTarefa';
import 'react-native-gesture-handler';


function TelaAdicionaTarefa({ navigation, dispatch, tasks }) {

    const [dadosUsuario, setdadosUsuario] = useState({ user: {} })

    useEffect(() => {
        AsyncStorage.getItem('dadosUsuario')
            .then((dadosUsuario) => {
                if (dadosUsuario !== null) {
                    const parsed = JSON.parse(dadosUsuario);
                    setdadosUsuario(parsed)
                    return parsed.token;
                }
            })
            .catch(err => { console.log('primeiro catch', err); navigation.navigate('Login') })
            .then((token) => {
                if (!token) return;
                return axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            })
            //.then(res => {
            //dispatch(adionarLista(res.data))
            //})
            .catch(err => console.log('erro de rede', err))
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={img} style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', flex: 1, justifyContent: "space-evenly" }}>
                    <View style={{ alignItems: "flex-start", flex: 2, marginTop: 6,}}>
                        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Ola {dadosUsuario.user.fullName}, </Text>
                        <Text style={Styles.textres}>Aqui pode cadastrar suas tarefas!</Text>
                        <EntradaTarefa />
                    </View>
                    <View style={{ flex: 5, justifyContent: "space-around", marginTop: 30 }}>
                        <ScrollView>
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                            <Tarefas />
                        </ScrollView>



                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 15}}>
                        <BotaoPadrao text='Sair' onPress={() => navigation.navigate('Login')} />
                    </View>

                </View>


            </ImageBackground>
        </SafeAreaView>
    )
}


export default TelaAdicionaTarefa;

