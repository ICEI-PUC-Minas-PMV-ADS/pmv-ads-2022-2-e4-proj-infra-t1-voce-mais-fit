
import {NativeStackNavigationProp} from "@react-navigation/native-stack";




export type propsNavigationStack = {
    
    loginPage:undefined
    registerPage: undefined
    indexPage:{
        name: string,
        rota: string
    }
    exerciciosPage:undefined
    editPage:undefined
    alimentosPage:undefined
    modalGeneric:undefined
    
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>