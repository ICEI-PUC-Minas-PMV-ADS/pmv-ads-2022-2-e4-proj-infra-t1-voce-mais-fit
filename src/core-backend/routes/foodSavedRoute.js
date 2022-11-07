const express = require('express');
const router = express.Router();

const foodSavedService = require('../services/foodSavedService');

/**
 * @swagger
 * /api/gymgoer/foodSaved/searchFood:
 *  get:
 *   tags:
 *    - Alimento Salvo
 *   description: Busca o todos os Alimentos de acordo com o texto informado
 *   parameters:
 *    - name: foodName
 *      in: query
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhum Alimento encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/gymgoer/foodSaved/searchFood', (req, res) => {
    foodSavedService.searchFood(req.query.foodName).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/foodSaved:
 *  get:
 *   tags:
 *    - Alimento Salvo
 *   description: Busca o todos os Alimentos de acordo com o texto informado (opcional), juntamente com os Alimentos Salvos daquele Gymgoer específico, através do gymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: foodName
 *      in: query
 *      required: false
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhum Alimento encontrado
 *    500:
 *     description: Erro interno
 */
 router.get('/gymgoer/:gymgoerId/foodSaved', (req, res) => {
    foodSavedService.searchFoodByGymgoerId(req.params.gymgoerId, req.query.foodName).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/foodSaved:
 *  post:
 *   tags:
 *    - Alimento Salvo
 *   description: Cria um novo Alimento Salvo para um Gymgoer, através do GymgoerId (ObjectId)
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
router.post('/gymgoer/:gymgoerId/foodSaved', (req, res) => {
    foodSavedService.createNewFoodSaved(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(201).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/foodSaved/{foodSavedId}:
 *  patch:
 *   tags:
 *    - Alimento Salvo
 *   description: Atualiza um Alimento Salvo, através do foodSavedId (ObjectId)
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
router.patch('/gymgoer/foodSaved/:foodSavedId', (req, res) => {
    foodSavedService.updateFoodSavedById(req.params.foodSavedId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;