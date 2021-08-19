//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

// Icons
import { Ionicons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'; 

// create a component
const MessageHeader = ({props} : {props : any}) => {

    //SetUp Dimensions
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, {width: width - 25}]}>
            <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'}}
            style={styles.image}
            />
            <Text style={styles.text}>{props.children}</Text>
            <FontAwesome name="video-camera" size={24} color="#E0E9FD" style={styles.icon}/>
            <Ionicons name="md-call" size={24} color="#E0E9FD" style={styles.icon}/>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="#E0E9FD" style={styles.icon} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        alignItems: 'center',
        marginLeft: 25
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30
  },
  text: {
     fontSize: 20,
     flex: 1,
     marginLeft: 10,
     color: "#fff"
  },
  icon: {
      marginHorizontal: 10
  }
  
});

//make this component available to the app
export default MessageHeader;