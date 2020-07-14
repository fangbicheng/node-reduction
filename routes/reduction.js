const express = require('express');
const router = express.Router();
const Reduction = require('../model/reduction');

router.post('/open/:id', (req, res, next) => {
  Reduction.findOneAndUpdate(
    {id: req.params.id},
    {
      status: 1,
      signTime: new Date(),
    }
  )
    .then(reduction => res.send(reduction))
    .catch(err => res.send(err));
});

router.post('/close/:id', (req, res, next) => {
  Reduction.findOneAndUpdate(
    {id: req.params.id},
    {status: 0}
  )
    .then(reduction => res.send(reduction))
    .catch(err => res.send(err));
});

router.get('/all', (req, res, next) => {
  Reduction.find({})
    .then(reduction => res.send(reduction))
    .catch(err => res.send(err));
});

router.get('/detail/:id', (req, res, next) => {
  Reduction.findOne({id: req.params.id})
    .then(reduction => res.send(reduction))
    .catch(err => res.send(err));
});

router.post('/delete/:id', (req, res, next) => {
  Reduction.findOneAndRemove(
    {id: req.params.id},
  )
    .then(reduction => res.send(reduction))
    .catch(err => res.send(err));
});

module.exports = router;
