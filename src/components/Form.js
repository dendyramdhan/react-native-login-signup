import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

export default class Form extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            {/* <View style={styles.container}> */}
                <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0, 0, 0, 0)' 
                    placeholder='Email'
                    placeholderTextColor='#fff' />
                <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0, 0, 0, 0)' 
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#fff' />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            {/* </View> */}
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
})
