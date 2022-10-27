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

router.post('/:gymgogerId', (req, res) => {
    foodSavedService.createNewFoodSaved(req.params.gymgogerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

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