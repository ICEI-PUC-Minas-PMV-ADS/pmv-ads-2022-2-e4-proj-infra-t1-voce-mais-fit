import React from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, Button, Image, FlatList, ScrollView, StatusBar } from "react-native";
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';

import { propsStack } from "../models/modelStack";


const exerciciosPage = () =>{
    const navigation = useNavigation<propsStack>()

    const dadosExercices = [
        {key: "Peito"},
        {key: "Perna"},
        {key: "Costas"},
        {key: "Biceps"},
        {key: "Triceps"},
        {key: "Abomen"},
    ]

    return(
        <View style={Styles.container}>

            <View style={StylesRegister.containerBtn}>

                <View>
                    <Image style={StylesExercices.img}
                    source={require('../../assets/loginImagem.jpg')}
                    />
                    <Text style={StylesExercices.inputBtn}>
                        Alimentos
                    </Text> 
                </View>
                <View>
                    <Image style={StylesExercices.img}
                    source={require('../../assets/loginImagem.jpg')}
                    />
                    <Text style={StylesExercices.inputBtn}>
                        Inicio
                    </Text> 
                </View>
                <View>
                <Image style={StylesExercices.img}
                    source={require('../../assets/loginImagem.jpg')}
                    />
                    <Text style={StylesExercices.inputBtn}>
                        Exercícios
                    </Text> 
                </View>
            
            </View>
            

            <View style={StylesExercices.containeListExercices}>
                <ScrollView >
                <FlatList
                    data={dadosExercices}
                    renderItem = {( {item} ) => <Text>{item.key}</Text>}
                />
                </ScrollView >
            </View>
            


            <View style={StylesRegister.containerBtn}>
                <Text style={StylesExercices.menuExercicesButton}>
                    Adicionar
                </Text>
                <Text style={StylesExercices.menuExercicesButton}>
                    Listar Personal
                </Text>
                <Text style={StylesExercices.menuExercicesButton}
                onPress={() => navigation.goBack()}>
                    Voltar
                </Text>
            </View>
            

        </View>
    )
}

export default exerciciosPage