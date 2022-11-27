import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TouchableHighlight, TextInput } from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import { propsStack } from "../models/modelStack";

import api from '../services/api';

import Styles from '../styles/stylesLogin';
import StylesGeneric from './../styles/stylesGeneric';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';
import apiEmail from '../api/apiEmail';
import ApiResterUser from '../api/apiRegisterUser';
import apiUsuario from '../api/apiUsuario';


const indexPage = () =>{
    const route = useRoute()
    const navigation = useNavigation<propsStack>()

    const [pesoBoolean, setPesoBoolean] = useState(false);
    const [alturaBoolean, setAlturaBoolean] = useState(false);
    

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [Whatsapp, setWhatsapp] = useState('')
    const [Peso, setPeso] = useState('');
    const [Altura, setAltura] = useState('');

    const [nomePrint, setNomePrint] = useState('');
    const [emailPint, setEmailPrint] = useState('');
    const [senhaPrint, setSenhaPrint] = useState('');
    const [pesoPrint, setPesoPrint] = useState('');
    const [alturaPrint, setAlturaPrint] = useState('');
    const [WhatsappPrint, setWhatsappPrint] = useState('');

    const [esconde, setEsconde] = useState(false);

    const [emailEsc, setEmailEsc] = useState(false);
    const [senhaEsc, setSenhaEsc] = useState(false);
    const [pesoEsc, setPesoEsc] = useState(false);
    const [alturaEsc, setAlturaEsc] = useState(false);
    const [WhatsappEsc, setWhatsappEsc] = useState(false);

    const [modalOpen, setModalOpen] = useState(false)

    const userId = localStorage.getItem("userId")
    const gymgoerId = localStorage.getItem("userGymgoerInfo")
    const trainerId = localStorage.getItem("userTrainerInfo")

    // Métodos para pegar os dados do usuário da API
    const getUser = async () => {
        try{
            let response = await api.get(`/api/user/${userId}`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')
            setEmail(dados.data.email);
            setSenha(dados.data.password)
        }
        catch(err){
            console.log(err);
        }
    }
    const getGymgoer = async () => {
        try{
            let response = await api.get(`/api/gymgoer/${gymgoerId}`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')

            setNome(dados.data.name)
            setWhatsapp(dados.data.whatsapp)
        }
        catch(err){
            console.log(err);
        }
    }

    const getTrainer = async () => {
        try{
            let response = await api.get(`/api/trainer/${trainerId}`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')

            setNome(dados.data.name)
            setWhatsapp(dados.data.whatsapp)
        }
        catch(err){
            console.log(err);
        }
    }

    const getGymgoerPhisical = async () => {
        try{
            let response = await api.get(`/api/gymgoer/${gymgoerId}/physicalInformation`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')

            setPeso(dados.data.weight)
            setAltura(dados.data.height)
        }
        catch(err){
            console.log(err);
        }
    }


        useEffect(() => {
            getUser();
            if(gymgoerId != 'null'){
                getGymgoer();
                getGymgoerPhisical();
                setAlturaBoolean(true);
                setPesoBoolean(true);
            }
            else if(trainerId != 'null'){
                getTrainer();
            }
        })

    //Métodos para alterar os dados do usuário
    const alterarNome = async () => {
        try{
            await api.patch(`/api/gymgoer/${gymgoerId}`, {
                name: `${nomePrint}`
            })
        }
        catch(err){
            console.log(err);
        }
    }
    const alterarWhatsapp = async () => {
        try{
            await api.patch(`/api/gymgoer/${gymgoerId}`, {
                whatsapp: `${WhatsappPrint}`
            })
        }
        catch(err){
            console.log(err);
        }
    }
    const alterarAltura = async () => {
        try{
            await api.patch(`/api/gymgoer/${gymgoerId}/physicalInformation`, {
                height: `${alturaPrint}`
            })
        }
        catch(err){
            console.log(err);
        }
    }
    const alterarPeso = async () => {
        try{
            await api.patch(`/api/gymgoer/${gymgoerId}/physicalInformation`, {
                weight: `${pesoPrint}`
            })
        }
        catch(err){
            console.log(err);
        }
    }
    const alterarEmail = async () => {
        try{
            await api.patch(`/api/user/${userId}`, {
                email: `${emailPint}`
            })
        }
        catch(err){
            console.log(err);
        }
    }
    const alterarSenha = async () => {
        try{
            await api.patch(`/api/user/${userId}`, {
                password: `${senhaPrint}`
            })
        }
        catch(err){
            console.log(err);
        }
    }

   async function loginGoogle(given_name:string , email:string, password:string) {
    let valida = await apiUsuario.getUsuario(email);
    if(valida == '' || valida == undefined){
        await ApiResterUser.criarGymgoer(given_name,email,password,'gymgoer','310000000','Você é o melhor!');
        await apiEmail.emailGoogleConta(given_name, email,password);
        await logar(email,password);
    }else{
       valida =  valida == undefined? '': valida;
        await logar(email,valida)
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
              setModalOpen(true);
        }
        catch(error){
            console.log('Erro usuarioApi error: ', error);
        } 
      }  
    
//#region criando usuario apartir da Google 
    let dadosUsuario = ""
    var resultado =["a","b"];

    if (route.params != undefined) {
        dadosUsuario = Object.values(route.params).toString()
        let userGymgoerInfo = localStorage.getItem("userGymgoerInfo");
        console.log(userGymgoerInfo)
        resultado = dadosUsuario.split(",")
        if(resultado[1] == "Google" && userGymgoerInfo == null){
            let apiGoogle = JSON.parse(localStorage.getItem("usuarioGoogle") || '{}');
            let password = apiGoogle.id + apiGoogle.given_name;
            loginGoogle(apiGoogle.given_name, apiGoogle.email, password)
        }

    }
//#endregion

    function Voltar(){
        navigation.navigate('loginPage');
    }
    return(
        <View style={Styles.container}>
            
            {/* Menu */}
            <View style={StylesRegister.containerMenu}>

                <View style={StylesRegister.elementsMenu}>
                    <TouchableHighlight onPress={()=> navigation.navigate("alimentosPage")}>
                        <Image style={StylesExercices.img}
                        source={require('../../assets/menu/alimentosMenu.png')}
                        />
                    </TouchableHighlight>
                    <Text style={StylesRegister.textMenu}>
                        Alimentos
                    </Text> 
                </View>
                <View style={StylesRegister.elementsMenu}>
                    <TouchableHighlight onPress={()=> navigation.navigate('indexPage', { name: '', rota: "Api-Sena"})}>
                        <Image style={StylesExercices.img}
                        source={require('../../assets/menu/indexMenu.png')}
                        />
                    </TouchableHighlight>
                    <Text style={StylesRegister.textMenu}>
                        Inicio
                    </Text> 
                </View>
                <View style={StylesRegister.elementsMenu}>
                    <TouchableHighlight onPress={()=> navigation.navigate("exerciciosPage")}>
                        <Image style={StylesExercices.img}
                        source={require('../../assets/menu/exercicesMenu.png')}
                        />
                    </TouchableHighlight>
                    <Text style={StylesRegister.textMenu}>
                        Exercícios
                    </Text> 
                </View>
            </View>
            <View>  
            <Text style={Styles.btnText}>Bem-Vindo {nome}!</Text>
            <Text style={Styles.btnText}>Nosso aplicativo foi criado para te ajudar</Text>
            <Text style={Styles.btnText}>Facilitando a organização dos seus treinos e da sua alimentação!</Text>    
            </View>
            
            {/* Modal Alteração dos Dados */}
            <Modal visible={modalOpen} animationType='slide'>

                <View style={Styles.container}>

                <Text style={Styles.title}>
                    Alterar os Dados
                </Text>

                <View style={StylesRegister.containerMenu}>
                    <Text style={Styles.textEnfeite}>Nome:</Text>
                    <TextInput style={Styles.input}
                        placeholder={nome}
                        autoCorrect={false}
                        onChangeText={(text) => setNomePrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarNome}>Alterar</Text>
                </View>
                    
                <View style={StylesRegister.containerMenu}>
                    <Text style={Styles.textEnfeite}>Email:</Text>
                    <TextInput style={Styles.input}
                        placeholder={email}
                        autoCorrect={true}
                        onChangeText={(text) => setEmailPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarEmail}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <Text style={Styles.textEnfeite}>Senha:</Text>
                    <TextInput style={Styles.input}
                        placeholder={senha}
                        autoCorrect={true}
                        onChangeText={(text) => setSenhaPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarSenha}>Alterar</Text>
                </View>

                { pesoBoolean ? <View style={StylesRegister.containerMenu}>
                    <Text style={Styles.textEnfeite}>Peso:</Text>
                    <TextInput style={Styles.input}
                        placeholder={Peso}
                        autoCorrect={true}
                        onChangeText={(text) => setPesoPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarPeso}>Alterar</Text>
                </View> : null }

                { alturaBoolean ? <View style={StylesRegister.containerMenu}>
                    <Text style={Styles.textEnfeite}>Altura:</Text>
                    <TextInput style={Styles.input}
                        placeholder={Altura}
                        autoCorrect={true}
                        onChangeText={(text) => setAlturaPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarAltura}>Alterar</Text>
                </View> : null }

                <View style={StylesRegister.containerMenu}>
                    <Text style={Styles.textEnfeite}>Whatsapp:</Text>
                    <TextInput style={Styles.input}
                        placeholder={Whatsapp}
                        autoCorrect={true}
                        onChangeText={(text) => setWhatsappPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarWhatsapp}>Alterar</Text>
                </View>
                    

                    <View style={StylesRegister.containerBtn}>
                        
                    <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(false)}>
                        <Text>
                            Fechar
                        </Text> 
                    </TouchableOpacity>
                    </View>

                </View>
            </Modal>

            <View>

            <View style={StylesRegister.containerBtn}>
                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(true)}>
                <Text >
                        Alterar Status
                    </Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={() => Voltar()}>
                    <Text >
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
                
                
                

            </View>

        </View>
    )
}

export default indexPage

