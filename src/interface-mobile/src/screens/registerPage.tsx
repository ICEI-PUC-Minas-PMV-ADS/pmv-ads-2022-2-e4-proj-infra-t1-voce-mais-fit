import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import { propsStack } from "../models/modelStack";



const RegisterPage = () =>{
    const route = useRoute()
    const navigation = useNavigation<propsStack>()

    return(
        <View>
            <Text>Registro</Text>
            <View>
            <Button
                title="modal"
                onPress={() => navigation.navigate('modalGeneric')}
            />
            </View>
            <TouchableOpacity>
                <Text onPress={() => navigation.goBack()}>
                 Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterPage