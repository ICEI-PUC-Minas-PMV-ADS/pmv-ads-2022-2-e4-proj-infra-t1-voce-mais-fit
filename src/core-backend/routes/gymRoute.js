const express = require('express');
const router = express.Router();

const gymService = require('../services/gymService');

/**
 * @swagger
 * /api/gym:
 *  get:
 *   tags:
 *    - gym
 *   description: Busca todas as academias
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhuma academia encontrada
 *    500:
 *     description: Erro interno
 */
router.get('/', (req, res) => { //TODO: Buscar junto os trainers
    gymService.getAllGyms().then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gym/{gymId}:
 *  get:
 *   tags:
 *    - gym
 *   parameters:
 *    - name: gymId
 *      in: path
 *      required: true
 *      type: string
 *   description: Busca através do gymId (ObjectId)
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Academia não encontrada
 *    500:
 *     description: Erro interno
 */
router.get('/:gymId', (req, res) => { //TODO: Buscar junto os trainers
    gymService.getGymById(req.params.gymId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gym:
 *  post:
 *   tags:
 *    - gym
 *   description: Cadastra uma nova academia
 *   parameters:
 *    - name: gym
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       description: 
 *        type: string
 *       address:
 *        type: string
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    500:
 *     description: Erro interno
 */
router.post('/', (req, res) => {
    gymService.createNewGym(req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gym/{gymId}:
 *  patch:
 *   tags:
 *    - gym
 *   description: Atualiza uma academia
 *   parameters:
*    - name: gymId
 *      in: path
 *      required: true
 *      type: string
 *    - name: gym
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       description: 
 *        type: string
 *       address:
 *        type: string
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    500:
 *     description: Erro interno
 */
router.patch('/:gymId', (req, res) => {
    gymService.updateGymById(req.params.gymId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;