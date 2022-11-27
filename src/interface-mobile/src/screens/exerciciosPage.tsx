import React, { useState, useEffect } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, Modal, Image, FlatList, ScrollView, TouchableOpacity, TouchableHighlight, TextInput } from "react-native";
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';
import api from '../services/api';

import { propsStack } from "../models/modelStack";
import modalGeneric from "./modalGeneric";


const exerciciosPage = () =>{

    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpenEx, setModalOpenEx] = useState(false);

    const [exercicio, setExercicio] = useState('')
    const [URLVideo, setURLVideo] = useState('')
    const [dias, setDias] = useState('')
    const [series, setSeries] = useState('')

    const navigation = useNavigation<propsStack>()


    const userId = localStorage.getItem("userId")
    const gymgoerId = localStorage.getItem("userGymgoerInfo")

    const getExercices = async () => {
            try{
                let response = await api.get(`/api/gymgoer/${gymgoerId}/exerciseModels`)
                let json = JSON.stringify(response);
                let dados = JSON.parse(json || '{}')
                for(let i = 0; i < dados.data.length; i++){
                    console.log(dados.data[i].name);
                    console.log(dados.data[i].description);
                    console.log(dados.data[i]._id);
                    console.log("---------------------")
                    for(let x=0; x < i; x++){
                        console.log(dados.data[i].exercises[x].name);
                        console.log(dados.data[i].exercises[x].youtubeUrl);
                        console.log(dados.data[i].exercises[x]._id);
                        console.log("---------------------")
                    }
                    
                }
            }
            catch(err){
                console.log('Error: ' + err);
            }
    }

    const dadosExercices = [
        {key: ["Peito ", "Supino ", "Supino com Halter "]},
        {key: "Perna"},
        {key: "Costas"},
        {key: "Biceps"},
        {key: "Triceps"},
        {key: "Abomen"},
    ]


    useEffect(() => {
        getExercices();
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
            

            <View style={StylesExercices.containeListExercices}>
                <ScrollView >
                <FlatList
                    data={dadosExercices}
                    renderItem = {( {item} ) => <Text>{item.key}{"\n"}</Text>}
                />
                </ScrollView >
            </View>

            

            <Modal visible={modalOpen} animationType='slide'>

                <View style={Styles.container}>

                    <TextInput style={Styles.input}
                        placeholder="Exercício"
                        autoCorrect={true}
                        onChangeText={(text) => setExercicio(text)}
                    />
                    <TextInput style={Styles.input}
                        placeholder="Link do Vídeo"
                        autoCorrect={true}
                        onChangeText={(text) => setURLVideo(text)}
                    />
                    <View style={StylesRegister.containerBtn}>

                        <TextInput style={StylesRegister.inputBtn}
                        placeholder="Dias"
                        autoCorrect={true}
                        onChangeText={(text) => setDias(text)}
                        />
                        <TextInput style={StylesRegister.inputBtn}
                        placeholder="N Séries"
                        autoCorrect={true}
                        onChangeText={(text) => setSeries(text)}
                        />
                    </View>

                    <View style={StylesRegister.containerBtn}>
                        <TouchableOpacity style={StylesExercices.menuExercicesButton}>
                        <Text>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(false)}>
                        <Text>
                            Fechar
                        </Text> 
                    </TouchableOpacity>
                    </View>
                    
                    

                </View>
            </Modal>



            <Modal visible={modalOpenEx} animationType='slide'>

                <View style={Styles.container}>

                <Text style={Styles.title}>
                    Lista de Exercícios
                </Text>
                    
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Lista Cost Inic </Text>
                    <Text style={StylesExercices.espacamentoText}> Segunda</Text>
                </View>
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Lista Perna Hard </Text>
                    <Text style={StylesExercices.espacamentoText}> Terça</Text>
                </View>
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Peitoral de Monstro </Text>
                    <Text style={StylesExercices.espacamentoText}> Quarta</Text>
                </View>
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Barriga Seca </Text>
                    <Text style={StylesExercices.espacamentoText}> Quinta</Text>
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
        


            <View style={StylesRegister.containerBtn}>

                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(true)}>
                    <Text >
                        Adicionar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(true)}>
                    <Text>
                    Listar Personal
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

export default exerciciosPage