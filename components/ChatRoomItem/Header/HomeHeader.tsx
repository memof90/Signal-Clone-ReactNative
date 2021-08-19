//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Icons
import { SimpleLineIcons} from '@expo/vector-icons'; 

// create a component
const HomeHeader = ({props} : {props : any}) => {
    return (
        <View style={styles.container}>
            <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'}}
            style={styles.image}
            />
            <Text style={styles.text}>Signal</Text>
            <SimpleLineIcons name="camera" size={24} color="#393939" style={styles.icon}/>
            <SimpleLineIcons name="pencil" size={24} color="#393939" style={styles.icon}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30
  },
  text: {
     fontSize: 20
  },
  icon: {
      marginHorizontal: 5
  }
});

//make this component available to the app
export default HomeHeader;
