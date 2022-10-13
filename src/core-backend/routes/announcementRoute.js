const express = require('express');
const router = express.Router();

const announcementService = require('../services/announcementService');

router.get('/:gymId', (req, res) => {
    announcementService.getAllAnnouncementsByGymId(req.params.gymId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/:gymId', (req, res) => {
    announcementService.createNewAnnouncement(req.params.gymId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.patch('/:announcementId', (req, res) => {
    announcementService.updateAnnouncementById(req.params.announcementId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;