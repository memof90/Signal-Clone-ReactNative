import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
// MARK: DATA
import chatRoomData from '../assets/dummy-data/Chats';
// MARK: Components
import Message from '../components/Message';
import MessageInput from '../components/Message/MessaInput';

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.page}>
           <FlatList 
            data={chatRoomData.messages}
            renderItem={({ item }) => (
                <Message message={item} />
            )}
            inverted
           />
           <MessageInput />
        </SafeAreaView>
    )
}

// define your styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1
    }
});