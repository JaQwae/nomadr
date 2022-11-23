const { create } = require('domain');
const { Country } = require('../models');

const countryController = {
    getCountrys(req, res) {
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


createCountry({ body }, res) {
    country.create(body)
    .then(dbCountryData => res.json(dbCountryData))
    .catch(err => res.json(err));
},

updateCountry({ params, body }, res) {
    country.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
.then(dbCountryData => {
    if (!dbCountryData) {
        res.status(404).json({ message: 'No countryFound with that id' });
        return;
    }
    res.json(dbCountryData);
})
.catch(err => res.json(err));
},

removeCountry({ params }, res) {
    Comment.deleteMany({ countryId: params.id})
    .then(() => {
        country.findOneAndRemove({ countryId: params.id })
        .then(dbCountryData => {
            if (!dbCountryData) {
            res.status(404).json({ message: 'No country found with that id' });
            return;
        }
        res.json(dbCountryData);
        });
    })
    .catch(err => res.json(err));
},
}

module.exports= countryController