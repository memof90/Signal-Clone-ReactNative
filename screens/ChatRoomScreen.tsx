import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Message from '../components/Message'
import chatRoomData from '../assets/dummy-data/Chats';

export default function ChatRoomScreen() {
    return (
        <View style={styles.page}>
           <FlatList 
            data={chatRoomData.messages}
            renderItem={({ item }) => (
                <Message message={item} />
            )}
           />
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