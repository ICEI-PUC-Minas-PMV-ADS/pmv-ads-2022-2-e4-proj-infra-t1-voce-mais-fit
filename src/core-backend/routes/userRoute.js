const express = require('express');
const router = express.Router();

const userService = require('../services/userService');
const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @swagger
 * /api/user:
 *  get:
 *   tags:
 *    - Usuário
 *   description: Busca o todos os Usuários
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhnum Usuário encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/', (req, res) => {
    userService.getAllUsers().then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/user/{userId}:
 *  get:
 *   tags:
 *    - Usuário 
 *   description: Busca um Usuário através do userId (ObjectId)
 *   parameters:
 *    - name: userId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Usuário não encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/:userId', (req, res) => {
    userService.getUserById(req.params.userId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/user:
 *  post:
 *   tags:
 *    - Usuário 
 *   description: Cria um novo Usuário
 *   parameters:
 *    - name: user
 *      in: body
 *      required: true
 *      type: object
 *      properties:
 *       email:
 *        type: string
 *       password:
 *        type: string
 *       userType:
 *        type: string
 *        enum: ['gymgoer','trainer']
 *       name:
 *        type: string
 *       whatsapp:
 *        type: string
 *       workHoursDescription:
 *        type: string
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    404:
 *     description: Usuário não encontrado
 *    500:
 *     description: Erro interno
 */
router.post('/', (req, res) => {
    userService.createNewUser(req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(201).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/user/{userId}:
 *  patch:
 *   tags:
 *    - Usuário 
 *   description: Atualiza informações do Usuário através do userId (ObjectId)
 *   parameters:
 *    - name: user
 *      in: body
 *      required: true
 *      type: object
 *      properties:
 *       email:
 *        type: string
 *       password:
 *        type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Usuário não encontrado
 *    500:
 *     description: Erro interno
 */
router.patch('/:userId', (req, res) => {
    userService.updateUserById(req.params.userId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

// Login
router.post('/login', async(req, res) => {
    
    const {email, password} = req.body
    
    
    // checar se o usr existe
    const userCheck = await User.Model.findOne({email: email})

    // pegar os dados do usuário
    let usuario = await User.Model.find({email: email})
    if(!userCheck){
        return res.status(404).json({msg: "Usuário não encontrado, verifique o Email novamente"})
    }

    // checar a senha
    //const passwordCheck = await bcrypt.compare(password, User.password);
    const passwordCheck = await User.Model.findOne({password: password})
    if(!passwordCheck){
        return res.status(422).json({msg: "Senha invalida, verifique a senha novamente"})
    }

    try{
        const secret = "sdfsadvsavsdfsvdsadvsadf"
        const token = jwt.sign({
            id: User._id
        },
        secret,
        )
        
        res.status(200).json({msg: "Autenticado com sucesso", token, usuario})
    }catch(err){
        console.log(err);
    }
});

/**
 * @swagger
 * /api/user/{userId}:
 *  delete:
 *   tags:
 *    - Usuário
 *   description: Deleta um Usuário através do userId (ObjectId)
 *   parameters:
 *    - name: userId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    204:
 *     description: Deletado com sucesso
 *    404:
 *     description: Exercício não encontrado
 *    500:
 *     description: Erro interno
 */router.delete('/:userId', (req, res) => {
    userService.deleteUserById(req.params.userId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(204).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});


module.exports = router;