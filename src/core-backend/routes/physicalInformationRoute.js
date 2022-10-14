const express = require('express');
const router = express.Router();

const physicalInformationService = require('../services/physicalInformationService');

router.patch('/gymgoer/:gymgoerId/physicalInformation', (req, res) => {
    physicalInformationService.upsertPhysicalInformationByGymgoerId(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;