const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const salries = new Schema({
    useremail: {
        type: String,
        lowercase: true
    },
    amount: {
        type: Number
    }
},
{
    timestamps:true
}
)

autoIncrement.initialize(mongoose.connection);

salries.plugin(autoIncrement.plugin, {
    "model": "salries",
    "field": "_id",
    startAt: 1
})
salries.plugin(autoIncrement.plugin, 'salries');
salries.plugin(uniqueValidator, { message: 'to be unique.' })

const registerSchema = mongoose.model('salries', salries)
module.exports = registerSchema;
