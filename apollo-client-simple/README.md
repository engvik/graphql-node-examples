# apollo-client-simple
Implementing a simple client with inmemory cache that works against the [apollo-server implementation](https://github.com/engvik/graphql-node-examples/tree/master/apollo-server).

> Apollo Client is the ultra-flexible, community driven GraphQL client for React, JavaScript, and native platforms. It is designed from the ground up to make it easy to build UI components that fetch data with GraphQL. To get the most value out of Apollo Client, you should use it with one of its view layer integrations.

> Apollo Client also has view layer integrations for all the popular frontend frameworks. For the best experience, make sure to use the view integration layer for your frontend framework of choice.

> Apollo Client can be used in any JavaScript frontend where you want to describe your data using GraphQL. 

## Dependencies

* [apollo-client](https://github.com/apollographql/apollo-client)
* [apollo-link-http](https://github.com/apollographql/apollo-link)
* [apollo-cache-inmemory](https://github.com/apollographql/apollo-client)
* [graphql-tag](https://github.com/apollographql/graphql-tag)
* [node-fetch](https://github.com/bitinn/node-fetch)

## Resources

* [apollo-client documentation](https://www.apollographql.com/docs/react/)

## Run

Run the server:

```
node apollo-server
```

Run the client:

```
node apollo-client-simple
```
