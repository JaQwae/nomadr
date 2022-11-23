// Import Dependencies
const { Schema, model, Types } = require('mongoose');

const CountrySchema = new Schema({
    countryName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    // visaLength: {
    //     type: String,
    //     required: true,
    // }
});

const Country = model('Country', CountrySchema);

module.exports = Country;