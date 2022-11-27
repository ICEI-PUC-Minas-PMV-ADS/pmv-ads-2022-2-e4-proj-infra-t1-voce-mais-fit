import React, { useRef } from 'react';
import api from '../services/api';


class apiEmail{
    static async getUsuario(email:string) {
        try{
         let response =  await api.get(`/api/user`)
            let json = JSON.stringify(response);
            let dados = JSON.parse(json || '{}')
            let senha = this.verificaEmail(dados, email);
            return senha;
        }
        catch(err){
            console.log(err);   
        }
    }
    static async verificaEmail(dados:any, email:string) {
        let senha = '';
        for (let index = 0; index < dados.length; index++) {
            if(dados[index].email == email){
               senha = dados[index].password;
            } 
        }
        return senha;
    }

}
export default apiEmail;
