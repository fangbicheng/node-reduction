const xss = require('xss');
const Reduction = require('../model/reduction');

module.exports = {
  async open(req, res, next) {
    if (!req.params.id) {
      throw new Error('无法获取到参数');
    }
    
    try {
      const reduction = await Reduction.findOneAndUpdate(
        { id: xss(req.params.id) },
        {
          status: 1,
          signTime: new Date(),
        }
      )
      res.send(reduction);
    } catch(err) {
      res.send(err);
    }
  },
  async close(req, res, next) {
    if (!req.params.id) {
      throw new Error('无法获取到参数');
    }
    
    try {
      const reduction = await Reduction.findOneAndUpdate(
        { id: xss(req.params.id) },
        {
          status: 0,
          signTime: new Date(),
        }
      )
      res.send(reduction);
    } catch(err) {
      res.send(err);
    }
  },
  async all(req, res, next) {
    try {
      const reductionList = await Reduction.find({});
      res.send(reductionList);
    } catch(err) {
      res.send(err);
    }
  },
  async detail(req, res, next) {
    if (!req.params.id) {
      throw new Error('无法获取到参数');
    }
    
    try {
      const reduction = await Reduction.findOne({ id: xss(req.params.id) });
      res.send(reduction);
    } catch(err) {
      res.send(err);
    }
  },
  async delete(req, res, next) {
    if (!req.params.id) {
      throw new Error('无法获取到参数');
    }
    
    try {
      const reduction = await Reduction.findOneAndRemove({ id: xss(req.params.id) });
      res.send(reduction);
    } catch(err) {
      res.send(err);
    }
  },
}