# apollo-server
Example server with CRUD operations using Facebook's JavaScript reference implementation and Apollo's `apollo-server-express` and `graphql-tools`.

> The following features distinguish Apollo Server from express-graphql, Facebook’s reference HTTP server implementation:
>
> *    Apollo Server has a simpler interface and allows fewer ways of sending queries, which makes it a bit easier to reason about what’s going on.
> *    Apollo Server serves GraphiQL on a separate route, giving you more flexibility to decide when and how to serve it.
> *    Apollo Server supports query batching which can help reduce load on your server.
> *    Apollo Server has built-in support for persisted queries, which can make your app faster and your server more secure.


## Dependencies

* [express](https://github.com/expressjs/express)
* [apollo-server-express](https://github.com/apollographql/apollo-server)
* [graphql](https://github.com/graphql/graphql-js)
* [graphql-tools](https://github.com/apollographql/graphql-tools)

## Resources

* [apollo-server-* documentation](dev.apollodata.com/tools/apollo-server/)
* [graphql-tools documentation](http://dev.apollodata.com/tools/graphql-tools/)

## Run

`node apollo-server`

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
