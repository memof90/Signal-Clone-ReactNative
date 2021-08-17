//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const MessageInput = () => {
    return (
        <View style={styles.root} >
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>+</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10
    },
    inputContainer: {
        backgroundColor: '#EAEAEA',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#2E6DEF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 35
    }

});

//make this component available to the app
export default MessageInput;
