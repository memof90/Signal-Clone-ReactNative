import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// Components
import ChatRoomItem from '../components/ChatRoomItem';
// data
import ChatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRoomsData[0]
const chatRoom2 = ChatRoomsData[1]


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <ChatRoomItem chatRoom={chatRoom1}/>
      <ChatRoomItem chatRoom={chatRoom2}/>
    </View>
  );
}


const styles = StyleSheet.create({
  page : {
    backgroundColor: 'white',
    flex: 1
  }
})

