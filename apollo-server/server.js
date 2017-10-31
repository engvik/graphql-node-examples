import bodyParser from 'body-parser';
import express from 'express';
import merge from 'lodash.merge';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../express-graphql-tools/type-defs';
import { pizzaResolver } from '../express-graphql-tools/Pizza';
import { toppingResolver } from '../express-graphql-tools/Topping';

// Resolvers
const resolvers = merge(pizzaResolver, toppingResolver);

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => console.log('Listening on port 3000.'));
