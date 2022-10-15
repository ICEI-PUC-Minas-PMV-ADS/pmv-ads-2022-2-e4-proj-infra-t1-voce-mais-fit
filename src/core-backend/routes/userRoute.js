const express = require('express');
const router = express.Router();

const userService = require('../services/userService');
const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    userService.getAllUsers().then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.get('/:userId', (req, res) => {
    userService.getUserById(req.params.userId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/', (req, res) => {
    userService.createNewUser(req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.patch('/:userId', (req, res) => {
    userService.updateUserById(req.params.userId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});


router.post('/login', async(req, res) => {
    
    const {email, password} = req.body
    
    // checar se o usr existe
    const userCheck = await User.Model.findOne({email: email})
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

        res.status(200).json({msg: "Autenticado com sucesso", token})
    }catch(err){
        console.log(err);
    }

});


module.exports = router;