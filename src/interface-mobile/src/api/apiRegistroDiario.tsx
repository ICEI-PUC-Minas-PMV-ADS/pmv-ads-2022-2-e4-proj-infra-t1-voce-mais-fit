import api from "../services/api";

// Swagger: Registro Diario
class apiRegistroDiario {

    
    static async registroAlimentoDiario(gymgoerId? : string, dat?: string) {
        try{
            // GET Registro Diario com Data do Dia
            let response = await api.get(`/api/gymgoer/${gymgoerId}/dailyRegisters/${dat}`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}');
           let vetor = []
           for(let i=0; i < dados.data.foods.length; i++){
            vetor[i] = `Alimento: ${dados.data.foods[i].name} / Calorias: ${dados.data.foods[i].kcal} \n`;
           }
           localStorage.setItem('idRegistroAlimentoDiario', dados.data._id);
          return (JSON.stringify(vetor) == null ?'{}' : Object(vetor))
        }
        catch(err){
            console.log("Error: " + err);
        }
    }


    static async postRegistroDiario( alimento: string, description: string, carboidrato:string, proteina:string, gordura:string, calorias:string){
        
        try{
            console.log(alimento + "   " + description + "   " + carboidrato+ "   " + proteina+ "   " + gordura + "   " + calorias)
            let dailyRegistersID = localStorage.getItem("idRegistroAlimentoDiario");
            console.log(dailyRegistersID)
            await api.post(`/api/gymgoer/dailyRegisters/${dailyRegistersID}/foods`, {
                name: alimento,
                description: 'description',
                gramsAmount: 1,
                carb: carboidrato,
                protein: proteina,
                fat: gordura,
                kcal: calorias,
            })
        }
        catch(err){
            console.log("Error: " + err)
        }
    }
}

export default apiRegistroDiario;