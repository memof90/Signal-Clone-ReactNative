//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

// Icons
import { SimpleLineIcons} from '@expo/vector-icons'; 

// create a component
const MessageHeader = ({props} : {props : any}) => {

    //SetUp Dimensions
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
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
        justifyContent: 'space-around',
        padding: 10,
        alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30
  },
  text: {
     fontSize: 20,
     fontWeight: 'bold',
     flex: 1,
     textAlign: 'center',
     marginLeft: 50
  },
  icon: {
      marginHorizontal: 10
  }
  
});

//make this component available to the app
export default MessageHeader;