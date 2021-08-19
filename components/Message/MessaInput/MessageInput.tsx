//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

// MARK: ICONS
import { SimpleLineIcons, AntDesign, Ionicons } from '@expo/vector-icons'; 

// create a component
const MessageInput = () => {

    const [message, setMessage] = useState('');

    // MARK: Function 
    const sendMessage = () => {
        console.warn("sending:", message)
    //  Reset input
        setMessage('');
    }
    const onPlusClick = () => {
        console.warn("On Plus clicked")
    }
    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClick();
        }
    }
    

    return (
        <View style={styles.root} >
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.iconInput} />
                <TextInput style={styles.input} 
                value={message}
                onChangeText={setMessage}
                placeholder="Signal message"
                />
                <SimpleLineIcons name="camera" size={24} color="#595959" style={styles.iconInput} />
                <SimpleLineIcons name="microphone" size={24} color="#595959" style={styles.iconInput}/>
            </View>
            <Pressable
             style={styles.buttonContainer}
             onPress={onPress}
             >
                { message ? <Ionicons name="send" size={18} color="#fff" />
                :  <AntDesign name="plus" size={24} color="#fff"/>}
            </Pressable
            >
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
        padding: 5
    },
    iconInput: {
        marginHorizontal: 5
    },
    input: {
        flex: 1,
        marginHorizontal: 5
    },
    buttonContainer: {
        width: 40,
        height: 40,
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
