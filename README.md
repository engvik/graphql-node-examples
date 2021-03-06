# graphql-node-examples

This repository contains example implementations of GraphQL in Node.js.

## GraphQL

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

From [graphql.org](http://graphql.org/).

Here is the current draft of the [specification](https://facebook.github.io/graphql/).

## Download and install

```
git clone https://github.com/engvik/graphql-node-examples.git
yarn install
```

## Run

See each independent example.

## Server examples

## [simple-express-graphql](https://github.com/engvik/graphql-node-examples/tree/master/simple-express-graphql)

A very simple server example using Facebook's JavaScript reference implementation.

[Details](https://github.com/engvik/graphql-node-examples/blob/master/simple-express-graphql/README.md)

## [express-graphql](https://github.com/engvik/graphql-node-examples/tree/master/express-graphql)

Example server with CRUD operations using Facebook's JavaScript reference implementation.

[Details](https://github.com/engvik/graphql-node-examples/blob/master/express-graphql/README.md)

## [express-graphql-tools](https://github.com/engvik/graphql-node-examples/tree/master/express-graphql-tools)

The same example as above, but with Apollo's `graphql-tools`.

[Details](https://github.com/engvik/graphql-node-examples/blob/master/express-graphql-tools/README.md)

## [apollo-server](https://github.com/engvik/graphql-node-examples/tree/master/apollo-server)

Implementing the [express-graphql-tools](https://github.com/engvik/graphql-node-examples/tree/master/express-graphql-tools) example using Apollo's `apollo-server-express`.

[Details](https://github.com/engvik/graphql-node-examples/blob/master/apollo-server/README.md)

## Client examples

### [apollo-client-simple](https://github.com/engvik/graphql-node-examples/tree/master/apollo-client-simple)

Implementing a simple client with inmemory cache that works against the [apollo-server implementation](https://github.com/engvik/graphql-node-examples/tree/master/apollo-server).

[Details](https://github.com/engvik/graphql-node-examples/blob/master/apollo-client-simple/README.md)
