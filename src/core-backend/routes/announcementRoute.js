const express = require('express');
const router = express.Router();

const announcementService = require('../services/announcementService');

/**
 * @swagger
 * /api/gym/{gymId}/announcement:
 *  get:
 *   tags:
 *    - Anúncios
 *   description: Busca o todos os anúncios salvos para determinada Gym, através do Gymg, tipo ObjectId
 *   parameters:
 *    - name: gymId
 *      in: path
 *      required: true
 *      type: string
 *   responses: 
 *    200:
 *     description: Sucesso
 *    404:
 *     description: Nenhum anúncio salvo encontrado
 *    500:
 *     description: Erro interno
 */
router.get('/:gymId', (req, res) => {
    announcementService.getAllAnnouncementsByGymId(req.params.gymId).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gym/{gymId}/announcement:
 *  post:
 *   tags:
 *    - Anúncios
 *   description: Cria um novo anúncio para determinada Gym, através do GymId, tipo ObjectId
 *   parameters:
 *    - name: gymId
 *      in: path
 *      required: true
 *      type: string
 *    - name: announcement
 *      in: body
 *      type: object
 *      properties:
 *       description:
 *        type: string
 *   responses: 
 *    201:
 *     description: Criado com sucesso
 *    500:
 *     description: Erro interno
 */
router.post('/gym/:gymId/announcement', (req, res) => {
    announcementService.createNewAnnouncement(req.params.gymId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(201).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

/**
 * @swagger
 * /api/gym/announcement/{announcementId}:
 *  patch:
 *   tags:
 *    - Anúncios
 *   description: Atualiza um anúncio, através do AnnouncementId, tipo ObjectId
 *   parameters:
 *    - name: announcementId
 *      in: path
 *      required: true
 *      type: string
 *    - name: announcement
 *      in: body
 *      type: object
 *      properties:
 *       description:
 *        type: string
 *   responses: 
 *    200:
 *     description: Atualizado com sucesso
 *    500:
 *     description: Erro interno
 */
router.patch('/gym/announcement/:announcementId', (req, res) => {
    announcementService.updateAnnouncementById(req.params.announcementId, req.body).then((result) => {
        if(result.errorMessage != null)
            return res.status(result.errorType).send(result.errorMessage);

        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err.message);
    });
});

module.exports = router;