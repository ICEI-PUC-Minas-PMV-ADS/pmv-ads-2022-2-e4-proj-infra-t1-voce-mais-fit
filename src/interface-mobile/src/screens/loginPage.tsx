
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View, Text,TouchableOpacity,StatusBar ,Button ,StyleSheet , Image, TextInput,Modal,Alert, AsyncStorage} from "react-native";

import VALOR from "../../OAuth-google.json"
import { propsStack } from '../models/modelStack';
import api from '../services/api';
import Styles from '../styles/stylesLogin';

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
    const logar = async (email: string, password:string) => {
      try{
          const response = await api.post('/api/user/login', {
              email:`${email}`,
              password: `${password}`
          });
            console.log(JSON.stringify(response.data));
      }
      catch(error){
          console.log('GoogleUserReq error: ', error);
      }
    }

    return (  
      <View style={Styles.container}>
         <TextInput 
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
              />
          <TextInput
              placeholder="********"
              autoCorrect={true}
              onChangeText={(text) => setPassword(text)}
          />

        <Button 
          title={"Login"}
          onPress={()=> email == ''|| password == ''? 
          console.log('Mula!')
          :logar(email,password)}
        />  
        <Button 
          title={"Login com Google"}
          onPress={()=>logarGoogle()}
        />
        <StatusBar/>
        <Button
          title={'Register'}
          onPress={()=> navigation.navigate("registerPage")}
        />
      </View>
      
     
    );

}

export default LoginPage  
