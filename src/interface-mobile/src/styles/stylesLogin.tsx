import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//#601430

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FD0054',
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
    },
    imgLogin: {
      width: 200,
      height: 200,
      marginBottom: 60,
    },
    input: {
      backgroundColor: '#601430',
      padding: 5,
      width: 200,
      marginBottom: 10,
    },
    btnLogin: {
      backgroundColor: '#FD0054',
      color: 'white',
      margin: 5,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    title: {
      fontSize: 45,
      textAlign: 'center',
      marginBottom: 90,
      fontStyle: 'italic',
    }
  });

export default Styles;