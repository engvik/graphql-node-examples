import { toppingDB } from './Topping';

import createId from './create-id';

// Database mock
const pizzaDB = {};

export default class Pizza {
  constructor(id, name, toppings) {
    this.id = id;
    this.name = name;
    this.setToppings(toppings);
  }

  setToppings(toppings) {
    this.toppings = toppings.map((topping) => {
      const id = topping.id;

      if (!toppingDB[id]) {
        throw new Error ('No such topping: ' + id);
      }

      return toppingDB[id];
    });
  }

  updatePizza(name, toppings) {
    if (name) {
      this.name = name;
    }

    if (toppings) {
      this.setToppings(toppings);
    }
  }
}

const pizzaResolver = {
  Query: {
    getPizza(_, { id }) {
      if (!pizzaDB[id]) {
        throw new Error('No pizza with id: ' + id);
      }
  
      return pizzaDB[id];
    },
  },
  Mutation: {
    createPizza(_, { input: { name, toppings } }) {
      const id = createId();
  
      pizzaDB[id] = new Pizza(id, name, toppings);
  
      return pizzaDB[id];
    },
    updatePizza(_, { id, input: { name, toppings } }) {
      if (!pizzaDB[id]) {
        throw new Error('No pizza with id: ' + id);
      }
  
      pizzaDB[id].updatePizza(name, toppings);
  
      return pizzaDB[id];
    },
    deletePizza(_, { id }) {
      if (!pizzaDB[id]) {
        throw new Error('No pizza with id: ' + id);
      }
  
      delete pizzaDB[id];
  
      return true;
    },
  },
};

export { pizzaResolver, pizzaDB };
