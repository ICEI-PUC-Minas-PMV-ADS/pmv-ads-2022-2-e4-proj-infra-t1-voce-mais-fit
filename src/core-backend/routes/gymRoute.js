const express = require('express');
const router = express.Router();

const gymService = require('../services/gymService');

/**
 * @swagger
 * /api/gym:
 *  get:
 *   tags:
 *    - Academia
 *   description: Busca todas as Academias
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhuma Academia encontrada
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
 *    - Academia
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
 *    - Academia
 *   description: Cadastra uma nova Academia
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
 *    - Academia
 *   description: Atualiza uma Academia
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