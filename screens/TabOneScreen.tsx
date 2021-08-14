import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
// Components
import ChatRoomItem from '../components/ChatRoomItem';
// data
import ChatRoomsData from '../assets/dummy-data/ChatRooms';



export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
        data={ChatRoomsData}
        renderItem={({ item }) => (
          <ChatRoomItem chatRoom={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  page : {
    backgroundColor: 'white',
    flex: 1
  }
})

