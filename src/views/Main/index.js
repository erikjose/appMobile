import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// API
import api from '../../services/api';

// Styles
import styles from './styles';

export default class Main extends Component 
{
    state = {
        newBox: '',
    };

    async componentDidMount() {
        const box = await AsyncStorage.getItem('@Box: box');
        if(box) {
            this.props.navigation.navigate('Box');
        }
    };

    handleSignIn = async () => {
        const res = await api.post('boxes', {
            title: this.state.newBox
        });

        await AsyncStorage.setItem('@Box: box', res.data._id);

        this.props.navigation.navigate('Box');
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/image/logo.png')} style={styles.logo}/>
                <TextInput
                    style={styles.input}
                    placeholder="Crie um box"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={this.state.newBox}
                    onChangeText={text => this.setState({ newBox: text })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleSignIn}
                >
                    <Text style={styles.buttonText}>Criar um box</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
