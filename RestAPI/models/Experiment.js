const mongoose = require('mongoose');

const OutputSchema = mongoose.Schema({
    DateTime:  Date, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    "Regressor Score": { prediction: Number, ignored: Boolean},
   
}, { collection: 'outputs' })

module.exports = mongoose.model('Outputs', OutputSchema);