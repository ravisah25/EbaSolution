const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const registerDetails = new Schema({
    firstname: {
        type: String,
        lowercase: true
    },
    lastname: {
        type: String,
        lowercase: true
    },
    useremail: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    doj: {
        type: Date,
    },
    gender: {
        type: String,
        lowercase: true
    }
},
{
    timestamps:true
}
)

autoIncrement.initialize(mongoose.connection);

registerDetails.plugin(autoIncrement.plugin, {
    "model": "registerdetails",
    "field": "_id",
    startAt: 1
})
registerDetails.plugin(autoIncrement.plugin, 'registerdetails');
registerDetails.plugin(uniqueValidator, { message: 'to be unique.' })

const registerSchema = mongoose.model('registerdetails', registerDetails)
module.exports = registerSchema;
