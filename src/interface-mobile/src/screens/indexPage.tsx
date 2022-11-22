import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Button, Image, TouchableHighlight, TextInput } from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import { propsStack } from "../models/modelStack";

import Styles from '../styles/stylesLogin';
import StylesGeneric from './../styles/stylesGeneric';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';

const nome = "Felipe";
const email = "emailVeridico@IssoEUmEmail.com"
const Senha = ""
const Peso = "65"
const Altura = "170"
const Whatsapp = "31 9 9856-8542"


const indexPage = () =>{
    const route = useRoute()
    const navigation = useNavigation<propsStack>()


    const [nomePrint, setNomePrint] = useState('');
    const [emailPint, setEmailPint] = useState('');
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
            
            <View style={StylesRegister.containerBtn}>

                <View>
                    <TouchableHighlight onPress={()=> navigation.navigate("alimentosPage")}>
                        <Image style={StylesExercices.img}
                        source={require('../../assets/menu/alimentosMenu.png')}
                        />
                    </TouchableHighlight>
                    <Text style={StylesExercices.inputBtn}>
                        Alimentos
                    </Text> 
                </View>
                <View>
                    <TouchableHighlight onPress={()=> navigation.navigate('indexPage', { name: '', rota: "Api-Sena"})}>
                        <Image style={StylesExercices.img}
                        source={require('../../assets/menu/indexMenu.png')}
                        />
                    </TouchableHighlight>
                    <Text style={StylesExercices.inputBtn}>
                        Inicio
                    </Text> 
                </View>
                <View>
                    <TouchableHighlight onPress={()=> navigation.navigate("exerciciosPage")}>
                        <Image style={StylesExercices.img}
                        source={require('../../assets/menu/exercicesMenu.png')}
                        />
                    </TouchableHighlight>
                    <Text style={StylesExercices.inputBtn}>
                        Exercícios
                    </Text> 
                </View>
            
            </View>

            <Text> {resultado[0]}</Text>
            <Text> {resultado[1]}</Text>

            <View>

                <Text>Nome: {nome}</Text>
                { esconde ? <TextInput style={Styles.input}
                    placeholder="Digite o Nome"
                    autoCorrect={true}
                    onChangeText={(text) => setNomePrint(text)}
                /> : null }
                
                <Text>Email: {email}</Text>
                { esconde ? <TextInput style={Styles.input}
                    placeholder="Digite o Email"
                    autoCorrect={true}
                    onChangeText={(text) => setEmailPint(text)}
                /> : null }
                <Text>Senha: ***** </Text>
                { esconde ? <TextInput style={Styles.input}
                    placeholder="Digite a Senha"
                    autoCorrect={true}
                    onChangeText={(text) => setSenhaPrint(text)}
                /> : null }
                <Text>Peso: {Peso}</Text>
                { esconde ? <TextInput style={Styles.input}
                    placeholder="Digite o Peso"
                    autoCorrect={true}
                    onChangeText={(text) => setPesoPrint(text)}
                /> : null }
                <Text>Altura: {Altura}</Text>
                { esconde ? <TextInput style={Styles.input}
                    placeholder="Digite a Altura"
                    autoCorrect={true}
                    onChangeText={(text) => setAlturaPrint(text)}
                /> : null }
                <Text>Whatsapp: {Whatsapp}</Text>
                { esconde ? <TextInput style={Styles.input}
                    placeholder="Digite o Whatsapp"
                    autoCorrect={true}
                    onChangeText={(text) => setWhatsappPrint(text)}
                /> : null }

            </View>

            <View>

            <View style={StylesRegister.containerBtn}>
                <TouchableOpacity style={StylesExercices.menuExercicesButton}>
                    { esconde ? <Text  onPress={()=> {
                            setEsconde(false)
                            //APi para alterar os dados vai aqui
                        }}>
                    Alterar Status
                    </Text> : <Text onPress={()=> setEsconde(true)}>
                        Alterar Status
                    </Text> }
                </TouchableOpacity>
                    
                <TouchableOpacity style={StylesExercices.menuExercicesButton}>
                    <Text 
                    onPress={() => Voltar()}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
                
                
                

            </View>

        </View>
    )
}

export default indexPage

