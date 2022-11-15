import React, { useEffect, useState } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";

import { propsStack } from "../models/modelStack";


const editPage = () =>{
    const navigation = useNavigation<propsStack>()
    let userInfo :Array<string>
    
 
        let name = localStorage.getItem('usuarioGoogle'); 
        if (name != null) {
            userInfo = name.split(':');
            userInfo = userInfo.toString().split(',');
        } else {
            userInfo = ['a','b']
        }

    return(
        <View>
            <Text>edit Page</Text>
            <Text>{`${userInfo[9]}`}</Text>
           <Button
                title="Voltar"
                 onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default editPage