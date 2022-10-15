const express = require('express');
const router = express.Router();

const gymgoerService = require('../services/gymgoerService');

router.get('/:gymgoerId', (req, res) => {
    gymgoerService.getGymgoerById(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.patch('/:gymgoerId', (req, res) => {
    gymgoerService.updateGymgoerById(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;