import React, { useState } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, TouchableHighlight, Image, Modal } from "react-native";
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
    
    const [alimento, setAlimento] = useState('');

    const [modalOpenEx, setModalOpenEx] = useState(false);
    const [modalOpenAl, setModalOpenAl] = useState(false);

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

        <View style={StylesAliments.main}>
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
        </View>


            <Modal visible={modalOpenAl} animationType='slide'>

                <View style={Styles.container}>

                <Text style={Styles.title}>
                    Adicione um Alimento
                </Text>
                
                    <TextInput style={Styles.input}
                        placeholder="Alimento"
                        autoCorrect={true}
                        onChangeText={(text) => setAlimento(text)}
                    />
                    
                

                    <View style={StylesRegister.containerBtn}>
                    <TouchableOpacity style={StylesExercices.menuExercicesButton}>
                        <Text>
                            Adicionar
                        </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenAl(false)}>
                        <Text>
                            Fechar
                        </Text> 
                    </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>


            <Modal visible={modalOpenEx} animationType='slide'>

                <View style={Styles.container}>

                <Text style={Styles.title}>
                    Dieta de Alimentos
                </Text>

                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Dom</Text>
                    <Text style={StylesExercices.espacamentoText}>Seg</Text>
                    <Text style={StylesExercices.espacamentoText}>Ter</Text>
                    <Text style={StylesExercices.espacamentoText}>Qua</Text>
                    <Text style={StylesExercices.espacamentoText}>Qui</Text>
                    <Text style={StylesExercices.espacamentoText}>Sex</Text>
                    <Text style={StylesExercices.espacamentoText}>Sab</Text>
                </View>
                    
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Alimento </Text>
                    <Text style={StylesExercices.espacamentoText}> V.Kcal e V.Nutri</Text>
                </View>
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Alimento </Text>
                    <Text style={StylesExercices.espacamentoText}> V.Kcal e V.Nutri</Text>
                </View>
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Alimento </Text>
                    <Text style={StylesExercices.espacamentoText}> V.Kcal e V.Nutr</Text>
                </View>
                <View style={StylesRegister.containerBtn}>
                    <Text style={StylesExercices.espacamentoText}>Alimento </Text>
                    <Text style={StylesExercices.espacamentoText}> V.Kcal e V.Nutr</Text>
                </View>

                    <View style={StylesRegister.containerBtn}>
                    <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(false)}>
                        <Text>
                            Fechar
                        </Text> 
                    </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>


            <View style={StylesRegister.containerMenu}>
                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenAl(true)}>
                    <Text>
                    Adicionar
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(true)}>
                    <Text>
                    Dieta
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