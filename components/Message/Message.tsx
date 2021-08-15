//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const blue = '#2E6DEF';
const gray  = 'lightgrey';
const myID = 'u1';

// create a component
const Message = ({message} : { message : any}) => {
    
    const isMe = message.user.id === myID;

    return (
        <View style={[
            styles.container, isMe ? styles.rightContainer : styles.leftContainer,
        ]}>
            <Text style={{color: isMe ? 'black' : 'white'}}>{message.content}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer:{
        backgroundColor: blue,
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer:{
        backgroundColor: gray,
        marginLeft: 'auto',
        marginRight: 10,
    }
});

//make this component available to the app
export default Message;

