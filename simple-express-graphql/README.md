# simple-express-graphql
A very simple server example using [express](https://github.com/expressjs/express), [express-graphql](https://github.com/graphql/express-graphql) and [graphql](https://github.com/graphql/graphql-js).

## Run

`node simple-express-graphql-server`

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
