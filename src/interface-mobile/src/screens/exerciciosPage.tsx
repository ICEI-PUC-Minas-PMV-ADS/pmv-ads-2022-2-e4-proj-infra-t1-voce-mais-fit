import React from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, TouchableOpacity, Button } from "react-native";

import { propsStack } from "../models/modelStack";


const exerciciosPage = () =>{
    const navigation = useNavigation<propsStack>()

    return(
        <View>
            <Text>exercicios Page</Text>

           <Button
                title="Voltar"
                 onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default exerciciosPage