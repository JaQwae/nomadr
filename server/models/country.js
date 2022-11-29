// Import Dependencies
const { Schema, model, Types } = require('mongoose');

const CountrySchema = new Schema({
    country: {
        type: String,
    },
    program: {
        type: String,
    },
    length: {
        type: String,
    },
    monthlyIncomeRequirement: {
        type: String,
    },
    taxation: {
        type: String,
    },
    visaFee: {
        type: String,
    },
    policeClearance: {
        type: String,
    },
    healthInsurance: {
        type: String,
    },
});

const Country = model('Country', CountrySchema);

module.exports = CountrySchema;