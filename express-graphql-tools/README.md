# express-graphql-tools
Example server with CRUD operations using Facebook's JavaScript reference implementation and Apollo's `graphql-tools`.

## Dependencies

* [express](https://github.com/expressjs/express)
* [express-graphql](https://github.com/graphql/express-graphql)
* [graphql](https://github.com/graphql/graphql-js)
* [graphql-tools](https://github.com/apollographql/graphql-tools)

## Resources

* [Getting Started With GraphQL.js](http://graphql.org/graphql-js/)
* [graphql API Reference](http://graphql.org/graphql-js/graphql/)
* [express-graphql API Reference](http://graphql.org/graphql-js/express-graphql/)
* [Apollo's graphql-tools documentation](http://dev.apollodata.com/tools/graphql-tools/)

## Run

`node express-graphql`

## Usage

Open up `localhost:3000` in your browser. Create some toppings and then assemble a pizza.

### Topping

#### Create

```
mutation {
	createTopping(input: {
    name: "Mushroom"
  }) {
	  id
    name
	}
}
```

#### Get (read)

```
{
  getTopping(id: "TOPPING_ID") {
    name
  }
}
```

#### Update

```
mutation {
	updateTopping(id: "TOPPING_ID", input: {
    name: "Portobello mushroom"
  }) {
    name
	}
}
```

#### Delete

```
mutation {
	deleteTopping(id: "TOPPING_ID")
}
```

### Pizza

#### Create

```
mutation {
  createPizza(
    input: {
      name: "Margherita"
      toppings: [
        {
          id: "SOME_TOPPING_ID"
        },
        {
          id: "SOME_OTHER_TOPPING_ID"
        }
      ]
    }) {
    id
    toppings {
      name
    }
  }
}
```

#### Get (read)

```
{
  getPizza(id: "75d361bdcd9ca499e161") {
    id
    name,
    toppings {
      name
    }
  }
}
```

#### Update

```
mutation {
  updatePizza(
    id: "PIZZA_ID",
    input: {
    	name: "Cheese"
    	toppings: [
        {
      	  id: "TOPPING_ID"
    	  }
      ]
  }) {
    id
    toppings {
      name
    }
  }
}
```

#### Delete

```
mutation {
  deletePizza(id: "PIZZA_ID")
}
```
