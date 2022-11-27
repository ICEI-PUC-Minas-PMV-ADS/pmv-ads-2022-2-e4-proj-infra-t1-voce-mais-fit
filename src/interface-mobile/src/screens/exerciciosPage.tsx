import React, { useState, useEffect } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { View, Text, Modal, Image, FlatList, ScrollView, TouchableOpacity, TouchableHighlight, TextInput } from "react-native";
import Styles from '../styles/stylesLogin';
import StylesRegister from '../styles/stylesRegister';
import StylesExercices from '../styles/stylesExercices';
import api from '../services/api';

import { propsStack } from "../models/modelStack";
import ApiExercices from "../api/apiExercices";


const exerciciosPage = () =>{

    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpenEx, setModalOpenEx] = useState(false);

    const [nameGrupamento, setNameGrupamento] = useState('')
    const [descricaoGrupamento, setDescricaoGrupamento] = useState('')
    const [nomeExercicio, setNomeExercicio] = useState('')
    const [descricaoExercicio, setDescricaoExercicio] = useState('')

    
    const [nomeAcademia, setNomeAcademia] = useState('')
    const [descricaoAcademia, setDescricaoAcademia] = useState('');
    const [enderecoAcademia, setEnderecoAcademia] = useState('');
    
    const navigation = useNavigation<propsStack>()


    const userId = localStorage.getItem("userId")
    const gymgoerId = localStorage.getItem("userGymgoerInfo")


    const postAcademia = async (name: string, descricao: string, endereco: string) => {
        try{
            await api.post(`/api/gym`, {
                name: name,
                description: descricao,
                address: endereco
            })
        }
        catch(err){
            console.log("Error: " + err)
        }
    }

    const postExercicies = async (name: string, description: string, nameExercices: string, descriptionExercices: string) => {
        try{
            await api.post(`/api/gymgoer/${gymgoerId}/exerciseModels`, {
                name: `${name}`,
                description: `${description}`,
                exercises: [{
                    name: `${nameExercices}`,
                    description: `${descriptionExercices}`
                }]
            })
        }
        catch(err){
            console.log("Error: " + err);
        }
    }

    const getExercices = async () => {
        try{
            let response = await api.get(`/api/gymgoer/${gymgoerId}/exerciseModels`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')
            let vetor = [];
            for(let i=0; i < dados.data.length; i++){
                vetor[i] = `\n Grupamento Muscular a Trabalhar: ${dados.data[i].name} \n Descrição: ${dados.data[i].description} \n Nome do Exercício: ${dados.data[i].exercises[0].name} \n Vídeo do Exercício: ${dados.data[i].exercises[0].youtubeUrl} \n`
            }
            return (JSON.stringify(vetor) == null ?'{}' : Object(vetor))
        }
        catch(err){
            console.log("Error: " + err)
        }
    }

    const getAcademias =async () => {
        try{
            let response = await api.get(`/api/gym`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')
            let vetor = []
            for(let i=0; i < dados.data.length; i++){
                console.log(dados.data[i]._id)
                vetor[i] = `\n Nome Academia: ${dados.data[i].name} \nDescrição: ${dados.data[i].description} \nEndereço: ${dados.data[i].address} \n`
            }
            return (JSON.stringify(vetor) == null ?'{}' : Object(vetor))
        }
        catch(err){
            console.log("Error: " + err)
        }
    }


    const [x, setX] = useState('');
    const chamarExercicios = async () => {
        setX(await getExercices());
    }

    const [y, setY] = useState('');
    const chamarAcademias = async () => {
        setY(await getAcademias())
    }
    

    useEffect(() => {
        chamarAcademias();
        chamarExercicios();
    }, []);
        
    
   

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
            

            <View style={StylesExercices.containeListExercices}>
            <ScrollView >
                    <Text style={Styles.btnText}>{x}</Text>
                </ScrollView >
            </View>

            

            <Modal visible={modalOpen} animationType='slide'>

                <View style={Styles.container}>

                    <TextInput style={Styles.input}
                        placeholder="Nome Grupamento"
                        autoCorrect={true}
                        onChangeText={(text) => setNameGrupamento(text)}
                    />
                    <TextInput style={Styles.input}
                        placeholder="Descrição"
                        autoCorrect={true}
                        onChangeText={(text) => setDescricaoGrupamento(text)}
                    />
                    
                    <TextInput style={Styles.input}
                        placeholder="Nome Exercicio"
                        autoCorrect={true}
                        onChangeText={(text) => setNomeExercicio(text)}
                    />
                    <TextInput style={Styles.input}
                        placeholder="Descrição Exercicio"
                        autoCorrect={true}
                        onChangeText={(text) => setDescricaoExercicio(text)}
                    />

                    <View style={StylesRegister.containerBtn}>
                        <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={() => postExercicies(nameGrupamento, descricaoGrupamento, nomeExercicio, descricaoExercicio)}>
                        <Text>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(false)}>
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
                    Adicionar Academia
                </Text>
                  
                <View>
                    <TextInput style={Styles.input}
                        placeholder="Nome Academia"
                        autoCorrect={true}
                        onChangeText={(text) => setNomeAcademia(text)}
                    />
                    <TextInput style={Styles.input}
                        placeholder="Descrição da Academia"
                        autoCorrect={true}
                        onChangeText={(text) => setDescricaoAcademia(text)}
                    />
                    <TextInput style={Styles.input}
                        placeholder="Endereço da Academia"
                        autoCorrect={true}
                        onChangeText={(text) => setEnderecoAcademia(text)}
                    />
                </View> 

                <View style={StylesExercices.containeListExercices}>
                    <ScrollView >
                            <Text style={Styles.btnText}>{y}</Text>
                    </ScrollView >
                 </View>
                
                    <View style={StylesRegister.containerBtn}>
                        <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> postAcademia(nomeAcademia, descricaoAcademia, enderecoAcademia)}>
                            <Text>
                                Adicionar
                            </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(false)}>
                            <Text>
                                Fechar
                            </Text> 
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
        


            <View style={StylesRegister.containerBtn}>

                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpen(true)}>
                    <Text>
                        Adicionar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StylesExercices.menuExercicesButton} onPress={()=> setModalOpenEx(true)}>
                    <Text>
                    Adicioar Academia
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

export default exerciciosPage