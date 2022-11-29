const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', error =>  {
  if (error ) throw error
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

module.exports = mongoose.connection;
