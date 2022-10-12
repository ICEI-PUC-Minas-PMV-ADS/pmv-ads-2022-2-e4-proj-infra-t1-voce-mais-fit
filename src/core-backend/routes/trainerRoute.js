const express = require('express');
const router = express.Router();

const trainerService = require('../services/trainerService');

router.get('/:trainerId', (req, res) => {
    trainerService.getTrainerById(req.params.trainerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

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