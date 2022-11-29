const router = require('express').Router();

// Importing controller functions
const {
    getAllCountries,
    getCountryById,
    // createCountry,
    // updateCountry,
    // deleteCountry
  } = require('../../controllers/country-controller');

// /api/users
router
    .route('/')
    // .get(getCountry)
    // .post(createCountry);

// /api/users/:id
router
    .route('/:id')
    .get(getCountryById)
    // .put(updateCountry)
    // .delete(deleteCountry);

module.exports = router; 