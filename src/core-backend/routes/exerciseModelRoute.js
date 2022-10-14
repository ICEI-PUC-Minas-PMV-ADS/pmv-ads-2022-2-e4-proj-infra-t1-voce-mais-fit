const express = require('express');
const router = express.Router();

const exerciseModelService = require('../services/exerciseModelService');

router.get('/gymgoer/:gymgoerId/exerciseModels', (req, res) => {
    exerciseModelService.getAllExerciseModelsByGymgoerId(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/gymgoer/:gymgoerId/exerciseModels', (req, res) => {
    exerciseModelService.createNewExerciseModel(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.patch('/gymgoer/exerciseModels/:exerciseModelId', (req, res) => {
    exerciseModelService.updateExerciseModelById(req.params.exerciseModelId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.get('/gymgoer/exerciseModels/:exerciseModelId/exercises', (req, res) => {
    exerciseModelService.getAllExerciseByExerciseModelId(req.params.exerciseModelId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/gymgoer/exerciseModels/:exerciseModelId/exercises', (req, res) => {
    exerciseModelService.addExerciseInModel(req.params.exerciseModelId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.delete('/gymgoer/exerciseModels/exercises/:exerciseId', (req, res) => {
    exerciseModelService.deleteExerciseInModel(req.params.exerciseId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});


module.exports = router;