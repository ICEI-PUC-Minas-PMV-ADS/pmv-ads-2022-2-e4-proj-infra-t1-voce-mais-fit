import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import Styles from "../styles/stylesIndexLogin";
import { propsStack } from "../models/modelStack";



const indexPage = () =>{
    const route = useRoute()
    const navigation = useNavigation<propsStack>()
    let dadosUsuario = ""
    var resultado =["a","b","c"];

    if (route.params != undefined ) {
        dadosUsuario = Object.values(route.params).toString()
        resultado = dadosUsuario.split(",")
        console.log(resultado)
    }

    function Voltar(){
        navigation.navigate('loginPage');
    }
    return(
        <View>
            <Text> {resultado[0]}</Text>
            <Text> {resultado[1]}</Text>
            <View>
                <Button
                    title="Exercicios"
                    onPress={() => navigation.navigate('exerciciosPage')}
                />
                <Button
                    title="perfil"
                    onPress={() => navigation.navigate('editPage')}
                />  
                <Button
                    title="alimentos"
                    onPress={() => navigation.navigate('alimentosPage')}
                />
            </View>  
            
           <Button
                title="Sair"
                 onPress={() => Voltar()}
            />
        </View>
    )
}

export default indexPage

