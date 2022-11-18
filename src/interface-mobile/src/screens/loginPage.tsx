
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View, Text,TouchableOpacity,StatusBar ,StyleSheet, Button, Image, TextInput,Modal,Alert, AsyncStorage} from "react-native";

import VALOR from "../../OAuth-google.json"
import { propsStack } from '../models/modelStack';
import Styles from '../styles/stylesLogin';
import StylesGeneric from './../styles/stylesGeneric';
import modalGeneric from './modalGeneric';
import RegisterPage from './registerPage';
import exerciciosPage from './exerciciosPage';

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


    const [userInfo, setUserInfo] = useState();
    const [profile, setProfile] = useState({} as Profile);
    const [accessToken, setAccessToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

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
            navigation.navigate('indexPage', { name: data.name, email: data.email, rota: "Google"})
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
          email : profile.email,
          rota: "Google"
        });
      }
      else{
        promptAsync({useProxy: false, showInRecents: true})
      }
        
    }  
/*   async function logar(email: string, password:string){
      let response = await fetch('http://localhost:3000/api/user/login',{
          body: JSON.stringify({
          email:`${email}`,
          password: `${password}`
      })
      });
      response.json().then(data =>{setResp(data)
      console.log(resp)
          if (data != '' && data.msg == 'Autenticado com sucesso') {
            localStorage.setItem('usuario',data)
            navigation.navigate('indexPage', { name: data._id, email: data.email, rota:"api"})
          } else {
            
          }
        })    
    }
*/
    function logar(email: string, password: string){
      navigation.navigate("exerciciosPage");
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
        : logar(email,password)}>
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
