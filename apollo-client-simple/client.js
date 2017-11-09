import fetch from 'node-fetch'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  createTopping,
  updateTopping,
} from './queries';

// Set up client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetch }),
  cache: new InMemoryCache(),
});

// Wrap query in promise so we can easily chain them.
function runQuery(query) {
  return new Promise((resolve, reject) => {
    client
      .query(query)
      .then(resolve)
      .catch(reject);
  });
}

// Wrap mutation in promise so we can easily chain them.
function runMutation(mutation) {
  return new Promise((resolve, reject) => {
    client
      .mutate(mutation)
      .then(resolve)
      .catch(reject);
  });
}

// Let's create a pizza!
runMutation({ mutation: createTopping("Mushoms") })
  .then((res) => {
    const topping = res.data.createTopping.name;
    const id = res.data.createTopping.id;

    console.log(`New topping: ${topping}, id: ${id}`);

    return { mutation: updateTopping(id, "Mushrooms") };
  })
  .then(runMutation)
  .then((res) => {
    const topping = res.data.updateTopping.name;
    const id = res.data.updateTopping.id;

    console.log(`Updated topping: ${topping}, id: ${id}`);

    return id;
  })
  .then((mushroomId) => {
    return runMutation({ mutation: createTopping("Mushoms") })
  })
  .catch(console.log);

// Run mutations and queries.
/* client
  .mutate()
  .then((res) => {
    const topping = res.data.createTopping.name;
    const id = res.data.createTopping.id;

    console.log(`New topping: ${topping}, id: ${id}`);

    client
      .mutate({ mutation: updateTopping(id, "Mushrooms")})
      .then((res) => {
        const topping = res.data.updateTopping.name;
        const id = res.data.updateTopping.id;
    
        console.log(`Updated topping: ${topping}, id: ${id}`);
      });
  }); */