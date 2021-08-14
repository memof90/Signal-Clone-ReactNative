import { StyleSheet } from 'react-native';


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

  export default styles;