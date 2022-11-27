import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TouchableHighlight, TextInput } from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import { propsStack } from "../models/modelStack";

import api from '../services/api';

import Styles from '../styles/stylesLogin';
import StylesGeneric from './../styles/stylesGeneric';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';


const indexPage = () =>{
    const route = useRoute()
    const navigation = useNavigation<propsStack>()

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
    console.log(gymgoerId)
    console.log(trainerId)


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
                console.log("Entrou Gym")
            }
            else if(trainerId != 'null'){
                getTrainer();
                console.log("Entrou Trainer")
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

    

    let dadosUsuario = ""
    var resultado =["a","b"];

    if (route.params != undefined ) {
        dadosUsuario = Object.values(route.params).toString()
        resultado = dadosUsuario.split(",")
        console.log(resultado)
    }

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

            <Text> {resultado[0]}</Text>
            <Text> {resultado[1]}</Text>

            <View style={Styles.tamanho}>

                <Text>Nome: {nome}</Text>
                
                <Text>Email: {email}</Text>

                <Text>Senha: {senha}</Text>

                <Text>Peso: {Peso}</Text>

                <Text>Altura: {Altura}</Text>

                <Text>Whatsapp: {Whatsapp}</Text>

            </View>


            {/* Modal Alteração dos Dados */}
            <Modal visible={modalOpen} animationType='slide'>

                <View style={Styles.container}>

                <Text style={Styles.title}>
                    Alterar os Dados
                </Text>

                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Nome"
                        autoCorrect={true}
                        onChangeText={(text) => setNomePrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarNome}>Alterar</Text>
                </View>
                    
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Email"
                        autoCorrect={true}
                        onChangeText={(text) => setEmailPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarEmail}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Senha"
                        autoCorrect={true}
                        onChangeText={(text) => setSenhaPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarSenha}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Peso"
                        autoCorrect={true}
                        onChangeText={(text) => setPesoPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarPeso}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Altura"
                        autoCorrect={true}
                        onChangeText={(text) => setAlturaPrint(text)}
                    />
                    <Text style={Styles.textButton} onPress={alterarAltura}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Whatsapp"
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

