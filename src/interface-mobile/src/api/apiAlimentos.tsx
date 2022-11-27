import api from '../services/api';



class apiAlimentos{

    static async RegistroDiarioAlimentos(gymgoerId: string, alimentos: string){
        try{
            await api.post(`/api/gymgoer/${gymgoerId}/foodSaved`, {
                name: alimentos,
                carbPer100g: 0,
                proteinPer100g: 0,
                fatPer100g: 0,
                kcalPer100g: 0,
            });
        }
        catch(err){
            console.log(err);
        }
    }
    static async buscaAlimentosAuto(gymgoerId?: string, alimento?: string){
        try{
            if(alimento == undefined || alimento.length < 3){
                return "Favor digitar mais de 3 caracteres!";
            }
            else{
                let response = await api.get(`/api/gymgoer/${gymgoerId}/foodSaved?foodName=${alimento}`)
                let json = JSON.stringify(response);
                let dados = JSON.parse(json || '{}');
                let dadosVetor = dados.data[0].carbPer100g == 0 ? dados.data[1]: dados.data[0];
                return dadosVetor;
            }
        }
        catch(err){
        console.log("Error: " + err);
        }
    }
}





export default apiAlimentos;