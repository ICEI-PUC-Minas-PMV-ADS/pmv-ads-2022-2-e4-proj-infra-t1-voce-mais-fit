import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import loginPage from "../../screens/loginPage";
import registerPage from "../../screens/registerPage";
import indexPage from "../../screens/indexPage";
import { propsNavigationStack } from "../../models/modelStack";
import modalGeneric from "../../screens/modalGeneric";
import alimentosPage from "../../screens/alimentosPage";
import editPage from "../../screens/editPage";
import exerciciosPage from "../../screens/exerciciosPage";

const {Navigator, Screen }= createNativeStackNavigator<propsNavigationStack>()

export default function(){
    return(
        <Navigator initialRouteName="loginPage" screenOptions={{ headerShown: false }}>
            <Screen name="loginPage" component={loginPage}/>
            <Screen name="registerPage" component={registerPage}/>
            <Screen name="indexPage" component={indexPage}/>
            <Screen name= "modalGeneric" component={modalGeneric}/>
            <Screen name="editPage" component={editPage}/>
            <Screen name="alimentosPage" component={alimentosPage}/>
            <Screen name="exerciciosPage" component={exerciciosPage}/>
        </Navigator>
    )
}