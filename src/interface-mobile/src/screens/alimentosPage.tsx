import React, { useState, useEffect } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, TouchableHighlight, Image, Modal, ScrollView, FlatList } from "react-native";
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';
import StylesAliments from '../styles/stylesAliments';

import { propsStack } from "../models/modelStack";
import apiAlimentos from "../api/ApiAlimentos";
import apiRegistroDiario from "../api/apiRegistroDiario";


const alimentosPage = () =>{

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    const dat = `${ano}-${mes}-${dia}`;
    const datExib = `${dia}/${mes}/${ano}`

    type apiBusca = {
        name: string;
        carbPer100g: string;
        proteinPer100g: string;
        fatPer100g: string;
        kcalPer100g: string;
    }
    const [apiBuscaAlimento, setApiBuscaAlimento] = useState({} as apiBusca);

    const [carboidrato, setCarboidrato] = useState('')
    const [proteina, setProteina] = useState('')
    const [gordura, setGordura] = useState('')
    const [calorias, setCalorias] = useState('')

    // Id Registro Diario
   // const [dailyRegistersID, setDailyRegistersID] = useState('')

    

    //nome e descrição
    const [description, setDescription] = useState('Cacal td dia')

    

    const [alimento, setAlimento] = useState('');

    const [modalOpenEx, setModalOpenEx] = useState(false);

    const [x, setX] = useState('')

    const navigation = useNavigation<propsStack>()


    const userId = localStorage.getItem("userId")
    const gymgoerId = localStorage.getItem("userGymgoerInfo")


    // Registro Diario GET com DAta /api/gymgoer/{gymgoerId}/dailyRegisters/{date}
    const getRegistroDiarioAlimentos = async () => {
        setX(await apiRegistroDiario.registroAlimentoDiario(gymgoerId?.toString(),dat));
    }

    // Registro Diario - Alimentos COnsumidos POST Rota: api/gymgoer/dailyRegisters/{dailyRegisterId}/foods
    const postRegistroDiarioAlimentos = async () => {
        console.log(alimento)
       await apiRegistroDiario.postRegistroDiario(apiBuscaAlimento.name, description, apiBuscaAlimento.carbPer100g, apiBuscaAlimento.proteinPer100g, apiBuscaAlimento.fatPer100g, apiBuscaAlimento.kcalPer100g);
    }

    const getBuscaAlimentosAuto = async (text : string) => {
        setApiBuscaAlimento(await apiAlimentos.buscaAlimentosAuto(gymgoerId?.toString(),text));
    }


    useEffect(() => {
        getRegistroDiarioAlimentos();
    })

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

        <View style={StylesAliments.main}>
            <View style={Styles.container}>

                <View style={StylesAliments.viewSpaco}>
                    <Text style={Styles.btnText}>Alimento</Text>
                    <TextInput style={StylesAliments.inputLarge}
                    placeholder="Nome Alimento"
                    autoCorrect={true}
                    onChangeText={(text) => getBuscaAlimentosAuto(text)}
                />
                </View>
                <View style={StylesAliments.viewSpaco}>
                    <Text style={Styles.btnText}>Carboidratos</Text>
                    <TextInput style={StylesAliments.input}
                    placeholder={apiBuscaAlimento.carbPer100g == undefined ? "n calorias" : apiBuscaAlimento.carbPer100g }
                    autoCorrect={true}
                    onChangeText={() => setCarboidrato(apiBuscaAlimento.carbPer100g)}
                />
                </View>
                <View style={StylesAliments.viewSpaco}>
                    <Text style={Styles.btnText}>Proteinas</Text>
                    <TextInput style={StylesAliments.input}
                    placeholder={apiBuscaAlimento.proteinPer100g == undefined ? "N Proteinas" : apiBuscaAlimento.proteinPer100g}
                    autoCorrect={true}
                    onChangeText={() => setProteina(apiBuscaAlimento.proteinPer100g)}
                />
                </View>
                <View style={StylesAliments.viewSpaco}>
                   <Text style={Styles.btnText}>Gordura</Text>
                    <TextInput style={StylesAliments.input}
                    placeholder={apiBuscaAlimento.fatPer100g == undefined ? "N Gordura" : apiBuscaAlimento.fatPer100g}
                    autoCorrect={true}
                    onChangeText={() => setGordura(apiBuscaAlimento.fatPer100g)}
                />
                </View>
            </View>
            <View style={StylesAliments.kcal}>
                <Text style={Styles.btnText}>Kcal</Text>
                <TextInput style={StylesAliments.inputLarge}
                    placeholder={apiBuscaAlimento.kcalPer100g == undefined ? "N Kcal" : apiBuscaAlimento.kcalPer100g}
                    autoCorrect={true}
                    onChangeText={(text) => setCalorias(apiBuscaAlimento.kcalPer100g)}
                />
            </View>
        </View>

            <Modal visible={modalOpenEx} animationType='slide'>

                <View style={Styles.container}>

                <Text style={Styles.title}>
                    Dieta de Alimentos
                </Text>

             
                <View style={StylesRegister.containerBtn}>
                       {/*
                            <Text style={StylesExercices.espacamentoText}>Dom</Text>
                            <Text style={StylesExercices.espacamentoText}>Seg</Text>
                            <Text style={StylesExercices.espacamentoText}>Ter</Text>
                            <Text style={StylesExercices.espacamentoText}>Qua</Text>
                            <Text style={StylesExercices.espacamentoText}>Qui</Text>
                            <Text style={StylesExercices.espacamentoText}>Sex</Text>
                            <Text style={StylesExercices.espacamentoText}>Sab</Text>
                       */} 
                       <Text style={Styles.btnText}>Data: {datExib}</Text>
                    </View>
                        
                    <View style={StylesRegister.containerBtn}>
                        <Text style={Styles.btnText}>{x}</Text>
                    </View>
                    
               
                    

                    <View style={StylesRegister.containerBtn}>
                    <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(false)}>
                        <Text>
                            Fechar
                        </Text> 
                    </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>


            <View style={StylesRegister.containerMenu}>
            <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={postRegistroDiarioAlimentos}>
                <Text>
                    Adicionar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(true)}>
                    <Text>
                    Dieta
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={() => navigation.goBack()}>
                    <Text>
                    Voltar
                    </Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default alimentosPage