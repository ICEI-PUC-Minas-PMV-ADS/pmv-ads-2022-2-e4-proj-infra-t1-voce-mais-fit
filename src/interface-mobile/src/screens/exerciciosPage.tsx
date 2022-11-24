import React, { useState } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, Modal, Image, FlatList, ScrollView, TouchableOpacity, TouchableHighlight, TextInput } from "react-native";
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';

import { propsStack } from "../models/modelStack";
import modalGeneric from "./modalGeneric";


const exerciciosPage = () =>{

    const [modalOpen, setModalOpen] = useState(false)
    const [exercicio, setExercicio] = useState('')
    const [URLVideo, setURLVideo] = useState('')
    const [dias, setDias] = useState('')
    const [series, setSeries] = useState('')

    const navigation = useNavigation<propsStack>()

    const dadosExercices = [
        {key: ["Peito ", "Supino ", "Supino com Halter "]},
        {key: "Perna"},
        {key: "Costas"},
        {key: "Biceps"},
        {key: "Triceps"},
        {key: "Abomen"},
    ]

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
        


            <View style={StylesRegister.containerBtn}>

                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(true)}>
                    <Text >
                        Adicionar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StylesExercices.menuExercicesButton}>
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