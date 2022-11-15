const express = require('express');
const router = express.Router();

const trainerService = require('../services/trainerService');

/**
 * @swagger
 * /api/trainer:
 *  get:
 *   tags:
 *    - Instrutor
 *   description: Busca o todos os Instrutores
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhnum Instrutor encontrado
 *    500:
 *     description: Erro interno
 */
 router.get('/', (req, res) => {
    trainerService.getAllTrainers().then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/trainer/{trainerId}:
 *  get:
 *   tags:
 *    - Instrutor
 *   description: Busca o Trainer através do TrainerId, tipo ObjectId
 *   parameters:
 *    - name: trainerId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Trainer não encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/:trainerId', (req, res) => {
    trainerService.getTrainerById(req.params.trainerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/trainer/{trainerId}:
 *  patch:
 *   tags:
 *    - Instrutor
 *   description: Atualiza informações do Trainer através do TrainerId (ObjectId)
 *   parameters:
 *    - name: trainerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: trainer
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       whatsapp: 
 *        type: string
 *       workHoursDescription:
 *        type: string
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Trainer não encontrado
 *    500:
 *     description: Erro interno
 */
router.patch('/:trainerId', (req, res) => {
    trainerService.updateTrainerById(req.params.trainerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;