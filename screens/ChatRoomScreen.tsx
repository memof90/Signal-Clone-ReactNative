import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
// MARK: DATA
import chatRoomData from '../assets/dummy-data/Chats';
// MARK: Components
import Message from '../components/Message';
import MessageInput from '../components/Message/MessaInput';

// Navegation
import { useRoute } from '@react-navigation/core';

export default function ChatRoomScreen() {

    // MARK: Setup navegation
    const route = useRoute();
    // console.warn("Display chatRoom", route.params?.id);

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