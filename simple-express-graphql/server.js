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

const app = express();

const options = {
  schema,
  rootValue,
  graphiql: true,
};


app.use('/', graphqlHTTP(options))

app.listen(3000, () => console.log('Listening on port 3000.'))
