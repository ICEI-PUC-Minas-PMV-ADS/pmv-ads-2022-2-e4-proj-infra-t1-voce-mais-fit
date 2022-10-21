const express = require('express');
const router = express.Router();

const foodSavedService = require('../services/foodSavedService');

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