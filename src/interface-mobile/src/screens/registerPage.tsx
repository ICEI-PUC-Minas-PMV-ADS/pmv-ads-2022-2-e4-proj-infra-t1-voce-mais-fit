
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View, Text, TextInput} from "react-native";

import VALOR from "../../OAuth-google.json"
import { propsStack } from '../models/modelStack';
import api from '../services/api';
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';



WebBrowser.maybeCompleteAuthSession();
const LoginPage = () =>{
  const navigation = useNavigation<propsStack>()
    

    const [email, setEmail] = useState('');
    const[name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setuserType] = useState('');
    const [whatsapp, setwhatsapp] = useState('');
    const [workHoursDescription, setworkHoursDescription] = useState('');
    const [loginError, setLoginError] = useState(false);

    const criar = async (name: string, email: string, password:string, userType:string, whatsapp:string,workHoursDescription:string) => {
      try{
          let response = await api.post('/api/user', {
              name:`${name}`,
              email:`${email}`,
              password: `${password}`,
              userType: `${userType}`,
              whatsapp: `${whatsapp}`,
              workHoursDescription: `${workHoursDescription}`
          })
            console.log(JSON.stringify(response.data));
           //navigation.goBack()
      }
      catch(error){
          console.log('Erro usuarioApi error: ', error);
      }
    }



    return (  
      <View style={Styles.container}>

        <Text style={Styles.title}>
          Crie Sua Conta
        </Text>

         <TextInput style={Styles.input}
              placeholder="Digite o Nome"
              autoCorrect={true}
              onChangeText={(text) => setName(text)}
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
        <TextInput style={Styles.input}
            placeholder="Motivação para TREINAR"
            autoCorrect={true}
            onChangeText={(text) => setworkHoursDescription(text)}
        />
        <View style={StylesRegister.containerBtn}>

            <TextInput style={StylesRegister.inputBtn}
              placeholder="Peso"
              autoCorrect={true}
              onChangeText={(text) => setuserType(text)}
            />

            <TextInput style={StylesRegister.inputBtn}
              placeholder="Altura"
              autoCorrect={true}
              onChangeText={(text) => setwhatsapp(text)}
            />
        </View>


        <Text>{ loginError ? 'Verifique os campos!' : null }</Text>

        <Text style={Styles.btnLogin}
        onPress={()=> email == ''|| password == '' || userType == '' || whatsapp == '' || workHoursDescription == '' ? 
        setLoginError(true)
        : criar(name ,email, password, userType, whatsapp, workHoursDescription)}>
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
