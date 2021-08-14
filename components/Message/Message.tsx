//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const blue = '#2E6DEF';
const gray  = 'lightgrey';

// create a component
const Message = () => {

    const isMe = true;

    return (
        <View style={[
            styles.container, 
            {backgroundColor: isMe ? gray : blue},
            {marginLeft: isMe ? 'auto' :  10}
        ]}>
            <Text style={{color: isMe ? 'black' : 'white'}}>Message</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E6DEF',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
});

//make this component available to the app
export default Message;

