const { create } = require('domain');
const { Country } = require('../models');

const countryController = {
    getCountry(req, res) {
        country.find({})
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbCountryData => res.json(dbCountryData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getCountryById({ params }, res) {
        country.findOne({ _id: params.id })
        .populate({
            path: 'comments',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .then(dbCountryData => {
            if (!dbCountryData) {
                res.status(404).json({ message: 'No country found with that id' });
                return;                
            }
            res.json(dbCountryData);
        })
    .catch(err => {
        res.sendStatus(400);
    });      
},

}

module.exports= countryController