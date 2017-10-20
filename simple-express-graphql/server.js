import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

// Schema
const schema = buildSchema(`
  type Query {
    toppings: [String]
    getRandomToppings(toppings: [String]!, num: Int!): [String]
  }
`);

// Resolver
const rootValue = {
  name: () => 'Pizza',
  toppings: () => ['Cheese', 'Pepperoni', 'Onion', 'Mushrooms', 'Jalapenos', 'Red Pepper', 'Garlic', 'Olives'],
  getRandomToppings: ({ toppings, num }) => {
    return [...Array(num)].map(_ => toppings[Math.floor(Math.random() * toppings.length)]);
  },
};

// Config
const graphqlConfig = {
  schema,
  rootValue,
  graphiql: true,
};

const app = express();

app.use('/', graphqlHTTP(graphqlConfig));

app.listen(3000, () => console.log('Listening on port 3000.'));
