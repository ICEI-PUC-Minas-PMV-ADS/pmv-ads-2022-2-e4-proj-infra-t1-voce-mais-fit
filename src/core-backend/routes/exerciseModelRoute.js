const express = require('express');
const router = express.Router();

const exerciseModelService = require('../services/exerciseModelService');

//#region ExerciseModel
router.get('/gymgoer/exerciseModels/:exerciseModelId', (req, res) => {
    exerciseModelService.getExerciseModelById(req.params.exerciseModelId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/exerciseModels:
 *  get:
 *   tags:
 *    - Modelos de Exercícios
 *   description: Busca o todos os modelos de exercício salvos para determinado Gymgoer, através do GymgoerId (ObjectId)
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
router.get('/gymgoer/:gymgoerId/exerciseModels', (req, res) => {
    exerciseModelService.getAllExerciseModelsByGymgoerId(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/{gymgoerId}/exerciseModels:
 *  post:
 *   tags:
 *    - Modelos de Exercícios
 *   description: Cria um novo modelo de exercício, a partir do gymgoerId (ObjectId)
 *   parameters:
 *    - name: gymgoerId
 *      in: path
 *      required: true
 *      type: string
 *    - name: exerciseModel
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       description: 
 *        type: string
 *       exercises:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *          description:
 *           type: string
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    404:
 *     description: Gymgoer não encontrado
 *    500:
 *     description: Erro interno
 */
router.post('/gymgoer/:gymgoerId/exerciseModels', (req, res) => {
    exerciseModelService.createNewExerciseModel(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(201).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gymgoer/exerciseModels/{exerciseModelId}:
 *  patch:
 *   tags:
 *    - Modelos de Exercícios
 *   description: Atualiza um modelo de exercícios, a partir do exerciseModelId (ObjectId)
 *   parameters:
 *    - name: exerciseModelId
 *      in: path
 *      required: true
 *      type: string
 *    - name: exerciseModel
 *      in: body
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *       description: 
 *        type: string
 *       exercises:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *          description:
 *           type: string
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    404:
 *     description: Modelo de exercícios não encontrado
 *    500:
 *     description: Erro interno
 */
router.patch('/gymgoer/exerciseModels/:exerciseModelId', (req, res) => {
    exerciseModelService.updateExerciseModelById(req.params.exerciseModelId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

//#region Exercise inside Exercise Model
/**
 * @swagger
 * /api/gymgoer/exerciseModels/{exerciseModelId}/exercises:
 *  get:
 *   tags:
 *    - Modelos de Exercícios - Exercício Individual
 *   description: Busca o todos os exercícios salvos dentro de um modelo, através do exerciseModelId (ObjectId)
 *   parameters:
 *    - name: exerciseModelId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Modelo de exercícios não encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/gymgoer/exerciseModels/:exerciseModelId/exercises', (req, res) => {
    exerciseModelService.getAllExerciseByExerciseModelId(req.params.exerciseModelId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

//#region Exercise inside Exercise Model
/**
 * @swagger
 * /api/gymgoer/exerciseModels/{exerciseModelId}/exercises:
 *  post:
 *   tags:
 *    - Modelos de Exercícios - Exercício Individual
 *   description: Adiciona um dentro de um modelo, através do exerciseModelId (ObjectId)
 *   parameters:
 *    - name: exerciseModelId
 *      in: path
 *      required: true
 *      type: string
 *    - name: exercise
 *      in: body
 *      type: object
 *      properties:
 *       name: 
 *        type: string
 *       description:
 *        type: string
 *   responses: 
 *    200:
 *     description: Exercício adicionado ao Modelo de Exercícios com sucesso
 *    404:
 *     description: Modelo de exercícios não encontrado
 *    500:
 *     description: Erro interno
 */
router.post('/gymgoer/exerciseModels/:exerciseModelId/exercises', (req, res) => {
    exerciseModelService.addExerciseInModel(req.params.exerciseModelId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

//#region Exercise inside Exercise Model
/**
 * @swagger
 * /api/gymgoer/exerciseModels/exercises/{exerciseId}:
 *  delete:
 *   tags:
 *    - Modelos de Exercícios - Exercício Individual
 *   description: Deleta um exercício salvo dentro de um modelo, através do exerciseId (ObjectId)
 *   parameters:
 *    - name: exerciseId
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
 */
router.delete('/gymgoer/exerciseModels/exercises/:exerciseId', (req, res) => {
    exerciseModelService.deleteExerciseInModel(req.params.exerciseId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(204).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

module.exports = router;