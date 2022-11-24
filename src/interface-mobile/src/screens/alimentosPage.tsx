import React, { useState } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, TouchableHighlight, Image } from "react-native";
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';
import StylesAliments from '../styles/stylesAliments'

import { propsStack } from "../models/modelStack";


const alimentosPage = () =>{

    const [carboidrato, setCarboidrato] = useState('')
    const [proteina, setProteina] = useState('')
    const [gordura, setGordura] = useState('')
    const [calorias, setCalorias] = useState('')

    const navigation = useNavigation<propsStack>()

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


            <View style={StylesRegister.containerBtn}>

                <View style={StylesAliments.viewSpaco}>
                    <Text>Carboidratos</Text>
                    <TextInput style={StylesAliments.input}
                    placeholder="N Carboidratos"
                    autoCorrect={true}
                    onChangeText={(text) => setCarboidrato(text)}
                />
                </View>
                <View style={StylesAliments.viewSpaco}>
                    <Text>Proteinas</Text>
                    <TextInput style={StylesAliments.input}
                    placeholder="N Proteinas"
                    autoCorrect={true}
                    onChangeText={(text) => setProteina(text)}
                />
                </View>
                <View style={StylesAliments.viewSpaco}>
                   <Text>Gordura</Text>
                    <TextInput style={StylesAliments.input}
                    placeholder="N Gordura"
                    autoCorrect={true}
                    onChangeText={(text) => setGordura(text)}
                />
 
                </View>
                
            </View>

            <View style={StylesAliments.kcal}>
                <Text>Kcal</Text>
                <TextInput style={StylesAliments.inputLarge}
                    placeholder="N Kcal"
                    autoCorrect={true}
                    onChangeText={(text) => setCalorias(text)}
                />
            </View>


            <View style={StylesRegister.containerMenu}>
                <TouchableOpacity style={StylesExercices.menuExercicesButton}>
                    <Text>
                    Adicionar
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