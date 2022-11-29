const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas')

const path = require('path');
// const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });  
}


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer (typeDefs, resolvers);


// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server for running on port ${PORT}!`);
//   });
// });
