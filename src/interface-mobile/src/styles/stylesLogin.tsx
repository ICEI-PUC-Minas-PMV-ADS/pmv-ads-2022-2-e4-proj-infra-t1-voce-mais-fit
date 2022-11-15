import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userInfo: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    userInput:{
      borderColor: '#0d0909'
    },
    userInputError:{
      borderColor:'#d62626'
    }
  });

export default Styles;