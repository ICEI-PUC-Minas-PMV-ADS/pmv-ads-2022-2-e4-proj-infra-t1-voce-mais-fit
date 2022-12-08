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
      color:'#fffbfb',
      backgroundColor: '#601430',
      padding: 5,
      width: 200,
      marginBottom: 10,
    },
    inputWhats: {
      color:'#fffbfb',
      backgroundColor: '#601430',
      padding: 5,
      width: 100,
      marginBottom: 10,
    },
    btnLogin: {
      backgroundColor: '#FD0054',
      color: 'white',
      margin: 5,
    },
    btnText: {
      backgroundColor: '#FD0054',
      color: 'white',
      margin: 5,
      fontSize: 20,
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
    },
    tamanho: {
      marginTop: 130,
      marginBottom: 130,
      color:'#fff',
      fontStyle: 'bold'
    },
    textButton: {
      height: 30,
      borderRadius: 10,
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      marginLeft: 5,
    },
    textEnfeite: {
      height: 30,
      borderRadius: 5,
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      marginRight: 5,
      fontSize: 20,
    },
  
  });

export default Styles;