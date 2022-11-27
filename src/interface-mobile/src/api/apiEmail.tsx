import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

class apiEmail{
    static async emailGoogleConta(nome:string ,email:string ,mensagem:string) {
        var templateParams = {
            remetente: 'gilidio8@gmail.com',
            destinatario: nome,
            destinatarioEmail: email,
            mensagem: `Seu email é ${email} .<br>Sua senha é ${mensagem} . Favor não compartilha!`
          };
           await emailjs.send('service_jm5ibnc', 'template_j00p1ag',templateParams , 't6yzn9VggSnazbXpm')
            .then(function(response){
                console.log('Success!!!!', response.status, response.text);
              }, function(error){
                console.log('Failed...', error);
              });
              console.log(templateParams);
            
    }
}
export default apiEmail;

