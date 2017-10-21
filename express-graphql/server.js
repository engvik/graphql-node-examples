import express from 'express';
import graphqlHTTP from 'express-graphql';

import { Pizza, pizzaResolver } from './Pizza';
import { Topping, toppingResolver } from './Topping';

import schema from './schema';

// Resolver
const root = Object.assign({}, pizzaResolver, toppingResolver);

// Config
const graphqlConfig = {
  schema,
  rootValue: root,
  graphiql: true,
};

const app = express();

app.use('/', graphqlHTTP(graphqlConfig));

app.listen(3000, () => console.log('Listening on port 3000.'));
