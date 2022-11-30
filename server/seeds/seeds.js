const db = require('../config/connection');
const { Country } = require('../models');

const countryData = require('./countryData.json');

db.once('open', async () => {
  await Country.deleteMany({});

  const countries = await Country.insertMany(countryData);

  console.log('Countries seeded!');
  process.exit(0);
});
