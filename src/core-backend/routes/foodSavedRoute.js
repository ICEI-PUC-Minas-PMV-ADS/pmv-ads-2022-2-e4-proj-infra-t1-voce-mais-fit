const express = require('express');
const router = express.Router();

const foodSavedService = require('../services/foodSavedService');

/**
 * @swagger
 * /api/foodSaved/{gymgoerId}:
 *  get:
 *   tags:
 *    - foodSaved
 *   description: Busca o todos os alimentos salvos para determinado Gymgoer, através do GymgoerId, tipo ObjectId
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    500:
 *     description: Erro interno
 */
router.get('/:gymgogerId', (req, res) => {
    foodSavedService.getAllFoodSavedByGymgoerId(req.params.gymgogerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/foodSaved/{gymgoerId}:
 *  post:
 *   tags:
 *    - foodSaved
 *   description: Cria um novo alimento salvo para um Gymgoer, através do GymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: foodSaved
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       carbPer100g: 
 *        type: number
 *       proteinPer100g:
 *        type: number
 *       fatPer100g:
 *        type: number
 *       kcalPer100g:
 *        type: number
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
router.post('/:gymgoerId', (req, res) => {
    foodSavedService.createNewFoodSaved(req.params.gymgogerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(201).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/foodSaved/{foodSavedId}:
 *  patch:
 *   tags:
 *    - foodSaved
 *   description: Atualiza um alimento salvo, através do foodSavedId (ObjectId)
 *   parameters:
 *    - name: foodSavedId
 *      in: path
 *      required: true
 *      type: string
 *    - name: foodSaved
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       carbPer100g: 
 *        type: number
 *       proteinPer100g:
 *        type: number
 *       fatPer100g:
 *        type: number
 *       kcalPer100g:
 *        type: number
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
router.patch('/:foodSavedId', (req, res) => {
    foodSavedService.updateFoodSavedById(req.params.foodSavedId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;