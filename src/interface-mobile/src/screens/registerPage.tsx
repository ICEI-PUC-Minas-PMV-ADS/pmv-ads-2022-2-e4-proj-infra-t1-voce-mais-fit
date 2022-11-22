
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View, Text, TextInput} from "react-native";

import VALOR from "../../OAuth-google.json"
import { propsStack } from '../models/modelStack';
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';



WebBrowser.maybeCompleteAuthSession();
const LoginPage = () =>{
  const navigation = useNavigation<propsStack>()
    
    type Profile = {
        email: string;
        family_name: string;
        given_name: string;
        name: string;
        picture: string;
    }



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    
    const [loginError, setLoginError] = useState(false);

    function logar(){

    }



    return (  
      <View style={Styles.container}>

        <Text style={Styles.title}>
          Crie Sua Conta
        </Text>

         <TextInput style={Styles.input}
              placeholder="Digite o Nome"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
              />
        <TextInput style={Styles.input}
            placeholder="Digite o Email"
            autoCorrect={true}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={Styles.input}
            placeholder="Confirme o Email"
            autoCorrect={true}
            onChangeText={(text) => setEmail(text)}
        />
          <TextInput style={Styles.input}
              placeholder="********"
              autoCorrect={true}
              onChangeText={(text) => setPassword(text)}
          />
          <TextInput style={Styles.input}
              placeholder="********"
              autoCorrect={true}
              onChangeText={(text) => setPassword(text)}
          />

        <View style={StylesRegister.containerBtn}>

            <TextInput style={StylesRegister.inputBtn}
              placeholder="Peso"
              autoCorrect={true}
              onChangeText={(text) => setPeso(text)}
            />

            <TextInput style={StylesRegister.inputBtn}
              placeholder="Altura"
              autoCorrect={true}
              onChangeText={(text) => setAltura(text)}
            />
        </View>


        <Text>{ loginError ? 'Verifique os campos!' : null }</Text>

        <Text style={Styles.btnLogin}
        onPress={()=> email == ''|| password == '' || peso == '' || altura == '' ? 
        setLoginError(true)
        : logar()}>
          Criar a Conta
        </Text >
        
        <Text style={Styles.btnLogin}
        onPress={()=> navigation.navigate("loginPage")}>
          Voltar Para Login
        </Text>
        
      </View>
      
     
    );

}

export default LoginPage  
