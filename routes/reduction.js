const express = require('express');
const router = express.Router();
const Reduction = require('../controller/reduction');

router.post('/open/:id', Reduction.open);

router.post('/close/:id', Reduction.close);

router.get('/all', Reduction.all);

router.get('/detail/:id', Reduction.detail);

router.post('/delete/:id', Reduction.delete);

module.exports = router;