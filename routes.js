const express = require('express')
const routes = express.Router()


routes.get('/', (request, response)=>{
  response.send('get method')  
})

routes.post('/', (request, response)=>{
    
    //console.log(request.body); 

    let email = request.body.datos.email;
    let password = request.body.datos.pass;
    // si existen
    if (email && password) {
        
            if (email != 'hola@prueba.com' || password != "pass2022") {
                
                response.status(200).json({success: false, message: "Usuario o contraseña incorrectos"});
               
            } else {
                response.status(200).json({success: true, message: "Datos correctos", user: email});
            }           
            response.end();
        
    } else {

        response.status(400).json({success: false, message: "Debe completar el email y la contraseña"});
    }

    
})

module.exports = routes