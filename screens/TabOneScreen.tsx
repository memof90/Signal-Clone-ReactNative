import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function TabOneScreen() {
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


const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10
  }, 
  badgeContainer: {
    backgroundColor: '#2E6DEF',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10
  },
  badgeText: {
    color: '#fff',
    fontSize: 12
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3
  },
  text: {
    color: '#7F8281',
    fontSize: 14
  }
})

