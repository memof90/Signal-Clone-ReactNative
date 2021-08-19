import React from 'react'
import { View, Text, Image, Pressable } from 'react-native';

// Navegation
import { useNavigation } from '@react-navigation/core';


// Styles
import styles from './styles';

export default function ChatRoomItem({chatRoom} : { chatRoom : any }) {

  const user = chatRoom.users[1];

  // MARK: SetUp Navegation
  const navigation = useNavigation();

  // MARK: Fuctions
  const onPress = () => {
    navigation.navigate('ChatRoom');
  }
    return (
        <Pressable
         style={styles.container}
         onPress={onPress}
         >
        <Image 
          source={{ uri: user.imageUri}}
          style={styles.image}
        />
        
        {chatRoom.newMessages && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>}

        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
        </View>
    </Pressable>
    );
}


