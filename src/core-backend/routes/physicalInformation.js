const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
    // TODO: buscar informacoes fisicas do usuario

});

router.put('/:userId', (req, res) => {
    // TODO: atualizar informacoes fisicas do usuario, usar upsert

});

module.exports = router;