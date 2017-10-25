const foodTypeDefs = `
  interface Food {
    id: ID!
    name: String
  }
`;

const pizzaTypeDefs = `
  type Pizza implements Food {
    id: ID!
    name: String
    toppings(id: [ID!]): [Topping]
  }
`;

const toppingTypeDefs = `
  type Topping implements Food {
    id: ID!
    name: String
  }
`;

const rootTypeDefs = `
  type Query {
    getPizza(id: ID!): Pizza
    getTopping(id: ID!): Topping
  }

  input ToppingOnPizzaInput {
    id: ID!
  }

  input PizzaInput {
    name: String
    toppings: [ToppingOnPizzaInput]
  }

  input ToppingInput {
    name: String
  }

  type Mutation {
    createPizza(input: PizzaInput): Pizza
    updatePizza(id: ID!, input: PizzaInput): Pizza
    deletePizza(id: ID!): Boolean
    createTopping(input: ToppingInput): Topping
    updateTopping(id: ID!, input: ToppingInput): Topping
    deleteTopping(id: ID!): Boolean
  }
`;

export default [rootTypeDefs, foodTypeDefs, pizzaTypeDefs, toppingTypeDefs];
