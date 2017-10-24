# simple-express-graphql
A very simple server example using Facebook's JavaScript reference implementation.

## Dependencies

* [express](https://github.com/expressjs/express)
* [express-graphql](https://github.com/graphql/express-graphql)
* [graphql](https://github.com/graphql/graphql-js)

## Resources

* [Getting Started With GraphQL.js](http://graphql.org/graphql-js/)
* [graphql API Reference](http://graphql.org/graphql-js/graphql/)
* [express-graphql API Reference](http://graphql.org/graphql-js/express-graphql/)

## Run

`node simple-express-graphql`

## Usage

Open up `localhost:3000` in your browser and try out the following queries:

```js
{
  toppings
}
```

```js
{
  getRandomToppings(
    toppings: [
      "Cheese",
      "Pepperoni",
      "Onion",
      "Mushrooms",
      "Jalapenos",
      "Red Pepper",
      "Garlic",
      "Olives"
    ],
    num: 5
  )
}
```
