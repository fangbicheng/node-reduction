const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reductionScheme = Schema({
    id: Number,
    title: String,
    company: String,
    status: Number, // 0-已停用，1-生效中
    signTime: Date,
    openNumber: String,
    payWay: String,
    detail: String,
});

module.exports = mongoose.model('Reduction', reductionScheme);