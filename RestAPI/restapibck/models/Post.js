const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    CIG12_BD_258_004: Number,
    DateTime: Date
}, { collection: 'experiment' })

module.exports = mongoose.model('Posts', PostSchema);