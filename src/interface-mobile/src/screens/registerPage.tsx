
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal} from "react-native";

import VALOR from "../../OAuth-google.json"
import { propsStack } from '../models/modelStack';
import api from '../services/api';
import Styles from '../styles/stylesLogin';
import StylesGeneric from './../styles/stylesGeneric';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';



WebBrowser.maybeCompleteAuthSession();
const LoginPage = () =>{

  const navigation = useNavigation<propsStack>()

  const [openModalAl, setOpenModalAl] = useState(false);
  const [openModalProf, setOpenModalProf] = useState(false);
  

    const [email, setEmail] = useState('');
    const[name, setName] = useState('');
    const [apelido, setApelido] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setuserType] = useState('');
    const [whatsapp, setwhatsapp] = useState('');
    const [workHoursDescription, setworkHoursDescription] = useState('');

    const [loginError, setLoginError] = useState(false);
    const[loginErrorProf, setLoginErrorProf] = useState(false);

    const criar = async (name: string, email: string, password:string, userType:string, whatsapp:string,workHoursDescription:string) => {
      try{
          let response = await api.post('/api/user', {
              name:`${name}`,
              email:`${email}`,
              password: `${password}`,
              userType: 'gymgoer',
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
        <Text>Escolha entre Aluno ou Professor:</Text>

        <View style={StylesRegister.containerBtn}>
          <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setOpenModalAl(true)}>
            <Text>
              Aluno
            </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setOpenModalProf(true)}>
            <Text>
              Professor
            </Text> 
        </TouchableOpacity>
        </View>
        

         
        <Modal visible={openModalAl} animationType='slide'>

          <View style={Styles.container}>

              <Text style={Styles.title}>
                Crie Conta Aluno
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
              <TextInput style={StylesRegister.inputBtn}
                placeholder="Whatsapp"
                autoCorrect={true}
                onChangeText={(text) => setwhatsapp(text)}
              />

              <Text>{ loginError ? 'Verifique os campos!' : null }</Text>

              <Text style={Styles.btnLogin}
                onPress={()=> email == ''|| password == '' || whatsapp == '' || workHoursDescription == '' 
                ? setLoginError(true)
                : criar(name ,email, password, userType, whatsapp, workHoursDescription)}>
                Criar a Conta
              </Text >



              <View style={StylesRegister.containerBtn}>

                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setOpenModalAl(false)}>
                    <Text>
                        Fechar
                    </Text> 
                </TouchableOpacity>
            </View>
                    
          </View>
        </Modal>



        <Modal visible={openModalProf} animationType='slide'>

          <View style={Styles.container}>

            <Text style={Styles.title}>
              Crie Conta Professor
            </Text>


            <TextInput style={Styles.input}
              placeholder="Digite o Nome"
              autoCorrect={true}
              onChangeText={(text) => setName(text)}
            />
            <TextInput style={Styles.input}
              placeholder="Digite o Apelido"
              autoCorrect={true}
              onChangeText={(text) => setApelido(text)}
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

            <Text>{ loginErrorProf ? 'Verifique os campos!' : null }</Text>

            <Text style={Styles.btnLogin}
              onPress={()=> email == ''|| password == '' || userType == '' || whatsapp == '' || apelido == '' 
              ? setLoginErrorProf(true)
              : criar(name ,email, password, userType, whatsapp, workHoursDescription)}>
              Criar a Conta
            </Text >

            <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setOpenModalProf(false)}>
              <Text>
                Fechar
              </Text> 
            </TouchableOpacity>
          </View>
        </Modal>


        <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> navigation.navigate("loginPage")}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
        
        
      </View>
      
     
    );

}

export default LoginPage  
