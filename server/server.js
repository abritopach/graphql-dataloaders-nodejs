// Import express and graphQHTTP .

import express from 'express';
import graphQLHTTP from 'express-graphql';

import { serverConfig } from '../config/config';

// MongoDB connection.
import {} from '../database';

import { Schema, Loaders } from '../graphql';

const app = express();

// GraphqQL server route.
app.use(graphQLHTTP({
    context: {Loaders},
    schema: Schema,
    graphiql: true
}));

// Start server.
var server = app.listen(serverConfig.port, () => {
    console.log('Listening at port', server.address().port);
});
