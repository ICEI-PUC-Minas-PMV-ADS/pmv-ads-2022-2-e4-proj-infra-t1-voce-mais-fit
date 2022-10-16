const express = require('express');
const router = express.Router();

const dailyRegisterService = require('../services/dailyRegisterService');

//#region DailyRegister
router.get('/gymgoer/dailyRegisters/:dailyRegisterId', (req, res) => {
    dailyRegisterService.getDailyRegisterById(req.params.dailyRegisterId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.get('/gymgoer/dailyRegisters/:date', (req, res) => {
    dailyRegisterService.getDailyRegisterByDate(req.params.date).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.get('/gymgoer/:gymgoerId/dailyRegisters', (req, res) => {
    dailyRegisterService.getAllDailyRegistersByGymgoerId(req.params.gymgoerId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/gymgoer/:gymgoerId/dailyRegisters', (req, res) => {
    dailyRegisterService.createNewDailyRegister(req.params.gymgoerId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

//#region Food Eaten in day
router.get('/gymgoer/dailyRegisters/:dailyRegisterId/foods', (req, res) => {
    dailyRegisterService.getAllFoodEatenInDailyRegister(req.params.dailyRegisterId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/gymgoer/dailyRegisters/:dailyRegisterId/foods', (req, res) => {
    dailyRegisterService.addFoodEatenInDailyRegister(req.params.dailyRegisterId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.delete('/gymgoer/dailyRegisters/:foodId', (req, res) => {
    dailyRegisterService.deleteFoodEatenInDailyRegister(req.params.foodId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

//#region Exercise in day
router.get('/gymgoer/dailyRegisters/:dailyRegisterId/exercises', (req, res) => {
    dailyRegisterService.getAllExercisesInDaybyDailyRegisterId(req.params.dailyRegisterId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.post('/gymgoer/dailyRegisters/:dailyRegisterId/exercises', (req, res) => {
    dailyRegisterService.addExerciseInDailyRegister(req.params.dailyRegisterId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

router.delete('/gymgoer/dailyRegisters/:foodId', (req, res) => {
    dailyRegisterService.deleteExerciseInDailyRegister(req.params.foodId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});
//#endregion

module.exports = router;