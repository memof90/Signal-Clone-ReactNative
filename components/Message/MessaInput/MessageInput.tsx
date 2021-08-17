//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// MARK: ICONS
import { SimpleLineIcons } from '@expo/vector-icons'; 

// create a component
const MessageInput = () => {
    return (
        <View style={styles.root} >
            <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.iconInput} />
                <TextInput style={styles.input}/>
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
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    iconInput: {
        marginHorizontal: 5
    },
    input: {
        flex: 1,
        marginHorizontal: 5
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
