import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 3
    },
    text: {
      color: 'white',
      marginRight: 5,
    },
    coinContainer: {
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      borderBottomColor: '#282828',
      padding: 15,
    },
    rank: {
      fontWeight: 'bold',
      color:'white',
    },
    rankContainer: {
      backgroundColor: '#585858',
      borderRadius: 5,
      paddingHorizontal:5,
      marginRight: 5,
      paddingVertical: 2,

    },
  });
  
  export default styles;