import express from 'express';
import graphqlHTTP from 'express-graphql';
import merge from 'lodash.merge';
import { makeExecutableSchema } from 'graphql-tools';

import { Pizza, pizzaResolver } from './Pizza';
import { Topping, toppingResolver } from './Topping';

import typeDefs from './type-defs';

// Resolvers
const resolvers = merge(pizzaResolver, toppingResolver);

// Config
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const graphqlConfig = {
  schema,
  graphiql: true,
};

const app = express();

app.use('/', graphqlHTTP(graphqlConfig));

app.listen(3000, () => console.log('Listening on port 3000.'));
