import api from '../services/api';


class ApiResterUser {

  static async criarGymgoer(name: string, email: string, password:string, userType:string, whatsapp:string,workHoursDescription:string){
    try{
        let response = await api.post('/api/user', {
            name:`${name}`,
            email:`${email}`,
            password: `${password}`,
            userType: 'gymgoer',
            whatsapp: `${whatsapp}`,
            workHoursDescription: `${workHoursDescription}`
        })
          console.log(JSON.stringify(response.data));
    }
    catch(error){
        console.log('Erro usuarioApi error: ', error);
    }
  }


  static async criarTrainer(name: string, email: string, password:string, userType:string, whatsapp:string,workHoursDescription:string){
    try{
        let response = await api.post('/api/user', {
            name:`${name}`,
            email:`${email}`,
            password: `${password}`,
            userType: 'trainer',
            whatsapp: `${whatsapp}`,
            workHoursDescription: `${workHoursDescription}`
        })
          console.log(JSON.stringify(response.data));
    }
    catch(error){
        console.log('Erro usuarioApi error: ', error);
    }
  }
  
}


export default ApiResterUser;
