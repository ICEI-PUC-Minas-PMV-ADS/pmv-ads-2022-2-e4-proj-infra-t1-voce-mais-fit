const express = require('express');
const router = express.Router();

const exerciseModelService = require('../services/exerciseModelService');

router.get('/:gymgoerId', (req, res) => {
    exerciseModelService.getAllExerciseModelsByGymgoerId(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/:gymgoerId', (req, res) => {
    exerciseModelService.createNewExerciseModel(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.patch('/:exerciseModelId', (req, res) => {
    exerciseModelService.updateExerciseModelById(req.params.exerciseModelId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;