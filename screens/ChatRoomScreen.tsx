import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Message from '../components/Message'

export default function ChatRoomScreen() {
    return (
        <View style={styles.page}>
           <Message />
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1
    }
});