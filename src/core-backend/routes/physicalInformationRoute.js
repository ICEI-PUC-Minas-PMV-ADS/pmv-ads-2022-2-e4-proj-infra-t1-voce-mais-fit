const express = require('express');
const router = express.Router();

const physicalInformationService = require('../services/physicalInformationService');

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/physicalInformation:
 *  get:
 *   tags:
 *    - Aluno - Informações Físicas
 *   description: Busca Informações Físicas do Gymgoer através do GymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
 router.get('/gymgoer/:gymgoerId/physicalInformation', (req, res) => {
    physicalInformationService.getPhysicalInformationByGymgoerId(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/physicalInformation:
 *  patch:
 *   tags:
 *    - Aluno - Informações Físicas
 *   description: (UPSERT) Atualiza Informações Físicas do Gymgoer através do GymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: physicalInformation
 *      in: body
 *      type: object
 *      properties:
 *       geneticSex:
 *        type: string
 *        enum: ['male','female']
 *       weightGoal:
 *        type: string
 *        enum: ['lose','gain','maintain']
 *       age:
 *        type: integer
 *       height: 
 *        type: number
 *       weight:
 *        type: number
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
router.patch('/gymgoer/:gymgoerId/physicalInformation', (req, res) => {
    physicalInformationService.upsertPhysicalInformationByGymgoerId(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;