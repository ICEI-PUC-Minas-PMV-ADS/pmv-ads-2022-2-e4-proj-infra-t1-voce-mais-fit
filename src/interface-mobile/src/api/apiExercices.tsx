import api from '../services/api';

class ApiExercices{

    static async getExercices(gymgoerId: string){
        try{
                    let response = await api.get(`/api/gymgoer/${gymgoerId}/exerciseModels`)
                    let json = JSON.stringify(response);
                    let dados = JSON.parse(json || '{}')
                    console.log(dados.data)

                    let vetor = [];
                    for(let i=0; i < dados.data.length; i++){

                    }


                   /* let exercicesGroup = []
                    let exercices = []

                    for(let i = 0; i < dados.data.length; i++){
                        console.log(dados.data[i]._id);
                        exercicesGroup[i] = `Nome do Grupo: ${dados.data[i].name} \n, Descrição do Grupo: ${dados.data[i].description} \n`
                        console.log(exercicesGroup)
                        for(let x=0; x < exercicesGroup.length; x++){
                            console.log(dados.data[i].exercises[x]._id);
                            exercices[i] = `Nome do Exercicio: ${dados.data[i].exercises[x].name},\n Url do Vídeo: ${dados.data[i].exercises[x].youtubeUrl}`
                        }
                        let concatenar = `${exercicesGroup} ${exercices}`
                        return (JSON.stringify(concatenar) == null ?'{}' : Object(concatenar))
                    } */
                }
                catch(err){
                    console.log('Error: ' + err);
                }
    }
}

export default ApiExercices;