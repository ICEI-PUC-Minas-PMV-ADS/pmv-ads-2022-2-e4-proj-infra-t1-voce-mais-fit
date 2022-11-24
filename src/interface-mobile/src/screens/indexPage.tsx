import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TouchableHighlight, TextInput } from "react-native";
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
    
                <Text>Senha: ***** </Text>

                <Text>Peso: {Peso}</Text>

                <Text>Altura: {Altura}</Text>

                <Text>Whatsapp: {Whatsapp}</Text>

            </View>

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
                    <Text style={Styles.textButton}>Alterar</Text>
                </View>
                    
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Email"
                        autoCorrect={true}
                        onChangeText={(text) => setEmailPrint(text)}
                    />
                    <Text style={Styles.textButton}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Senha"
                        autoCorrect={true}
                        onChangeText={(text) => setSenhaPrint(text)}
                    />
                    <Text style={Styles.textButton}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Peso"
                        autoCorrect={true}
                        onChangeText={(text) => setPesoPrint(text)}
                    />
                    <Text style={Styles.textButton}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Altura"
                        autoCorrect={true}
                        onChangeText={(text) => setAlturaPrint(text)}
                    />
                    <Text style={Styles.textButton}>Alterar</Text>
                </View>
                <View style={StylesRegister.containerMenu}>
                    <TextInput style={Styles.input}
                        placeholder="Whatsapp"
                        autoCorrect={true}
                        onChangeText={(text) => setWhatsappPrint(text)}
                    />
                    <Text style={Styles.textButton}>Alterar</Text>
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

