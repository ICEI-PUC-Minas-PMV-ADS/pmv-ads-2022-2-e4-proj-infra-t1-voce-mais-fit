
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View, Text,TouchableOpacity,StatusBar ,StyleSheet, Button, Image, TextInput,Modal,Alert, AsyncStorage} from "react-native";

import VALOR from "../../OAuth-google.json"
import { propsStack } from '../models/modelStack';
import api from '../services/api';
import Styles from '../styles/stylesLogin';
import StylesGeneric from './../styles/stylesGeneric';

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
    type ProfileApi={
        msg: string,
        token: string,
        usuario: [
            {
              _id: string,
              email: string,
              password:string,
              userType: string,
              trainerInfo?: string,
              gymgoerInfo?: string,
              __v: 0
            }
        ]
    }

    const [userInfo, setUserInfo] = useState();
    const [profile, setProfile] = useState({} as Profile);
    const [accessToken, setAccessToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileApi, setProfileApi] = useState({} as ProfileApi);

    const [loginError, setLoginError] = useState(false);
    
    const[resp, setResp]  = useState({});

    const [request, response, promptAsync] = Google.useAuthRequest({
            androidClientId: VALOR.CLIENT_ID,
            webClientId: VALOR.CLIENT_ID,
            expoClientId: VALOR.CLIENT_ID 
    });

    useEffect(() => {
      if (response?.type === 'success') {
          const { authentication } = response;
          getGoogleUser((authentication as any).accessToken)
      }
    }, [response]);


    const getGoogleUser = async (accessToken: string) => {
       try{
           let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
               headers: { Authorization: `Bearer ${accessToken}`}
           });
           setAccessToken(accessToken);
           userInfoResponse.json().then(data =>{setUserInfo(data);
            setProfile(data);
            console.log(JSON.stringify(data))
            localStorage.setItem('usuarioGoogle', JSON.stringify(data))
            navigation.navigate('indexPage', { name: data.name, rota: "Google"})
            });
       }
       catch(error){
           console.log('GoogleUserReq error: ', error);
       }
 
    }

    function logarGoogle(){
      if(accessToken && userInfo){
        navigation.navigate("indexPage",{
          name : profile.name,
          rota: "Google"
        });
      }
      else{
        promptAsync({useProxy: false, showInRecents: true})
      }
        
    }  

    const logar = async (email: string, password:string) => {
      try{
          let response = await api.post('/api/user/login', {
              //mode: 'cors',
              email:`${email}`,
              password: `${password}`
          })
            localStorage.setItem('usuarioApi', JSON.stringify(response.data));
            let dados = JSON.parse(localStorage.getItem("usuarioApi") || '{}');
            localStorage.setItem('userId', dados.usuario[0]._id);
            localStorage.setItem('userGymgoerInfo', dados.usuario[0].gymgoerInfo);
            localStorage.setItem('userTrainerInfo', dados.usuario[0].trainerInfo);

            if(dados != null || dados != undefined)
              navigation.navigate('indexPage', { name: email, rota: "Api-Sena"})
      }
      catch(error){
          console.log('Erro usuarioApi error: ', error);
      } 
    }


    return (  
      <View style={Styles.container}>

        <Text style={Styles.title}>
          Você Mais Fit!
        </Text>

        <Image style={Styles.imgLogin}
          source={require('../../assets/loginImagem.jpg')}
        />
         <TextInput style={Styles.input}
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
          />
          <TextInput style={Styles.input}
              placeholder="********"
              autoCorrect={true}
              onChangeText={(text) => setPassword(text)}
          />


        <Text style={StylesGeneric.GenericLabelAlert}>{ loginError ? 'Email ou senha incorretos!' : null }</Text>

        <Text style={Styles.btnLogin}
        onPress={()=> email == ''|| password == ''? 
        setLoginError(true)
        : logar(email,password)} >
          Login
        </Text >

        <Text style={Styles.btnLogin}
        onPress={()=>logarGoogle()}>
          Login com Google
        </Text>
        
        <Text style={Styles.btnLogin}
        onPress={()=> navigation.navigate("registerPage")}>
          Criar Conta
        </Text>
        
      </View>
      
     
    );

}

export default LoginPage  
