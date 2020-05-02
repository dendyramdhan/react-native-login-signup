import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Logo />
                    <Form type="Signup" />
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signUpText}>Already have an account?</Text>
                        <Text style={styles.signUpButton}> Sign in</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#455a64'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signUpText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    },
    signUpButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    }
})
