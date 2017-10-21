import { buildSchema } from 'graphql';

const schema = buildSchema(`
  input ToppingInput {
    name: String
  }

  input ToppingOnPizzaInput {
    id: ID!
  }

  input PizzaInput {
    name: String
    toppings: [ToppingOnPizzaInput]
  }

  type Topping {
    id: ID!
    name: String
  }

  type Pizza {
    id: ID!
    name: String
    toppings: [Topping]
  }

  type Query {
    getPizza(id: ID!): Pizza
    getTopping(id: ID!): Topping
  }

  type Mutation {
    createPizza(input: PizzaInput): Pizza
    updatePizza(id: ID!, input: PizzaInput): Pizza
    deletePizza(id: ID!): Boolean
    createTopping(input: ToppingInput): Topping
    updateTopping(id: ID!, input: ToppingInput): Topping
    deleteTopping(id: ID!): Boolean
  }
`);

export default schema;
