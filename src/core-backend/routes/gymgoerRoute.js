const express = require('express');
const router = express.Router();

const gymgoerService = require('../services/gymgoerService');

/**
 * @swagger
 * /api/gymgoer:
 *  get:
 *   tags:
 *    - Aluno
 *   description: Busca o todos os Alunos
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhnum Aluno encontrado
 *    500:
 *     description: Erro interno
 */
 router.get('/', (req, res) => {
    gymgoerService.getAllGymgoers().then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}:
 *  get:
 *   tags:
 *    - Aluno
 *   description: Busca o Aluno através do gymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/:gymgoerId', (req, res) => {
    gymgoerService.getGymgoerById(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/authCode/{authCode}:
 *  get:
 *   tags:
 *    - Aluno
 *   description: Busca o Aluno através do Código de Autenticação (case-sensitive)
 *   parameters:
 *    - name: authCode
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    403:
 *     description: Código de Autenticação expirado
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
 router.get('/authCode/:authCode', (req, res) => {
    gymgoerService.getGymgoerByValidAuthCode(req.params.authCode).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}:
 *  patch:
 *   tags:
 *    - Aluno
 *   description: Atualiza informações básicas do Aluno através do GymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: gymgoer
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       whatsapp: 
 *        type: string
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
router.patch('/:gymgoerId', (req, res) => {
    gymgoerService.updateGymgoerById(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/authCode:
 *  post:
 *   tags:
 *    - Aluno
 *   description: Gera um código de autenticação para vínculo do Aluno com Academia, através do GymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: minutes
 *      in: query
 *      type: number
 *      required: false
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
 router.post('/:gymgoerId/authCode', (req, res) => {
    gymgoerService.generateAuthCode(req.params.gymgoerId, req.query.minutes).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});



module.exports = router;