import createId from './create-id';

// Database mock
const toppingDB = {};

// Topping class
export default class Topping {
  constructor(id, { name }) {
    this.id = id;
    this.name = name;
  }

  updateTopping({ name }) {
    this.name = name;
  }
}

// Resolver
const toppingResolver = {
  getTopping: ({ id }) => {
    if (!toppingDB[id]) {
      throw new Error('No topping with id: ' + id);
    }

    return toppingDB[id];

  },
  createTopping: ({ input }) => {
    const id = createId();

    toppingDB[id] = new Topping(id, input);

    return toppingDB[id];
  },
  updateTopping: ({ id, input }) => {
    if (!toppingDB[id]) {
      throw new Error('No topping with id: ' + id);
    }

    toppingDB[id].updateTopping(input);

    return toppingDB[id];
  },
  deleteTopping: ({ id }) => {
    if (!toppingDB[id]) {
      throw new Error('No topping with id: ' + id);
    }

    delete toppingDB[id];

    return true;
  }
}

export { toppingResolver, toppingDB };
