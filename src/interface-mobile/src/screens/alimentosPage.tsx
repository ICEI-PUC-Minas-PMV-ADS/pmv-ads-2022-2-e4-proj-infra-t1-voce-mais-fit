import React, { useState } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
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

            <TouchableOpacity style={StylesExercices.menuExercicesButton}>
                    <Text
                    onPress={() => navigation.goBack()}>
                    Voltar
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

export default alimentosPage