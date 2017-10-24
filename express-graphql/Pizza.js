import { toppingDB } from './Topping';

import createId from './create-id';

// Database mock
const pizzaDB = {};

// Pizza class
export default class Pizza {
  constructor(id, { name, toppings }) {
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

  updatePizza({ name, toppings }) {
    if (name) {
      this.name = name;
    }

    if (toppings) {
      this.setToppings(toppings);
    }
  }
}

// Resolver
const pizzaResolver = {
  getPizza: ({ id }) => {
    if (!pizzaDB[id]) {
      throw new Error('No pizza with id: ' + id);
    }

    return pizzaDB[id];
  },
  createPizza: ({ input }) => {
    const id = createId();

    pizzaDB[id] = new Pizza(id, input);

    return pizzaDB[id];
  },
  updatePizza: ({ id, input }) => {
    if (!pizzaDB[id]) {
      throw new Error('No pizza with id: ' + id);
    }

    pizzaDB[id].updatePizza(input);

    return pizzaDB[id];
  },
  deletePizza: ({ id }) => {
    if (!pizzaDB[id]) {
      throw new Error('No pizza with id: ' + id);
    }

    delete pizzaDB[id];

    return true;
  }
};

export { pizzaResolver, pizzaDB };
