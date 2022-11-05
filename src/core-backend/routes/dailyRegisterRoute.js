const express = require('express');
const router = express.Router();

const dailyRegisterService = require('../services/dailyRegisterService');

//#region DailyRegister

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/dailyRegisters:
 *  get:
 *   tags:
 *    - Registro Diário
 *   description: Busca todos os Registros Diários de determinado Gymgoer, através do gymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhum Registro Diário encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/gymgoer/:gymgoerId/dailyRegisters', (req, res) => {
    dailyRegisterService.getAllDailyRegistersByGymgoerId(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/dailyRegisters/{dailyRegisterId}:
 *  get:
 *   tags:
 *    - Registro Diário
 *   description: Busca um Registro Diário específico, através do dailyRegisterId (ObjectId)
 *   parameters:
 *    - name: dailyRegisterId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Registro Diário não encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/gymgoer/dailyRegisters/:dailyRegisterId', (req, res) => {
    dailyRegisterService.getDailyRegisterById(req.params.dailyRegisterId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/dailyRegisters/{date}:
 *  get:
 *   tags:
 *    - Registro Diário
 *   description: Busca um Registro Diário específico através de uma data (AAAA-MM-DD) e do gymgoerId (ObjectId). Caso ainda não exista no banco de dados, ele é criado na hora.
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: date
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    500:
 *     description: Erro interno
 */
router.get('/gymgoer/:gymgoerId/dailyRegisters/:date', (req, res) => {
    dailyRegisterService.getDailyRegisterByDate(req.params.gymgoerId, req.params.date).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

//#region Food Eaten in day
/**
 * @swagger
 * /api/gymgoer/dailyRegisters/{dailyRegisterId}/foods:
 *  get:
 *   tags:
 *    - Registro Diário - Alimentos Consumidos
 *   description: Busca um todos os Alimentos Consumidos para um Registro Diário específico, através do dailyRegisterId (ObjectId)
 *   parameters:
 *    - name: dailyRegisterId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Registro Diário não encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/gymgoer/dailyRegisters/:dailyRegisterId/foods', (req, res) => {
    dailyRegisterService.getAllFoodEatenInDailyRegister(req.params.dailyRegisterId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

//#region Food Eaten in day
/**
 * @swagger
 * /api/gymgoer/dailyRegisters/{dailyRegisterId}/foods:
 *  post:
 *   tags:
 *    - Registro Diário - Alimentos Consumidos
 *   description: Adiciona um Alimento Consumido ao Registro Diário, através do dailyRegisterId (ObjectId)
 *   parameters:
 *    - name: dailyRegisterId
 *      in: path
 *      required: true
 *      type: string
 *    - name: foodEaten
 *      in: body
 *      required: true
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       description:
 *        type: string
 *       gramsAmount:
 *        type: number
 *       carb: 
 *        type: number
 *       protein:
 *        type: number
 *       fat:
 *        type: number
 *       kcal:
 *        type: number
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    404:
 *     description: Registro Diário não encontrado
 *    500:
 *     description: Erro interno
 */
router.post('/gymgoer/dailyRegisters/:dailyRegisterId/foods', (req, res) => {
    dailyRegisterService.addFoodEatenInDailyRegister(req.params.dailyRegisterId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(201).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/dailyRegisters/{dailyRegisterId}/foods/{foodId}:
 *  delete:
 *   tags:
 *    - Registro Diário - Alimentos Consumidos
 *   description: Deleta um Alimento Consumido dentro de um Registro Diário, através do foodId (ObjectId)
 *   parameters:
 *    - name: dailyRegisterId
 *      in: path
 *      required: true
 *      type: string
 *    - name: foodId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    204:
 *     description: Deletado com sucesso
 *    404:
 *     description: Alimento Consumido não encontrado
 *    500:
 *     description: Erro interno
 */
router.delete('/gymgoer/dailyRegisters/:dailyRegisterId/foods/:foodId', (req, res) => {
    dailyRegisterService.deleteFoodEatenInDailyRegister(req.params.dailyRegisterId, req.params.foodId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(204).send("Deleted successfully");
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

module.exports = router;