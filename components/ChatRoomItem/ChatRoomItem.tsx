import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

// Styles
import styles from './styles';

export default function ChatRoomItem() {
    return (
        <View style={styles.container}>
        <Image 
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
          style={styles.image}
        />
        <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>4</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.text}>11:11 AM</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa magnam quibusdam atque velit laborum, totam cum fugit alias illum sapiente ea expedita quam corporis, deleniti illo minima quis suscipit?</Text>
        </View>
    </View>
    );
}


