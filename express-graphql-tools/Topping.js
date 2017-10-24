import createId from './create-id';

// Database mock
const toppingDB = {};

// Topping
export default class Topping {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  updateTopping(name) {
    this.name = name;
  }
}

// Resolver
const toppingResolver = {
  Query: {
    getTopping(_, { id }) {
      if (!toppingDB[id]) {
        throw new Error('No topping with id: ' + id);
      }
  
      return toppingDB[id];
  
    },
  },
  Mutation: {
    createTopping(_, { input: { name } }) {
      const id = createId();
  
      toppingDB[id] = new Topping(id, name);
  
      return toppingDB[id];
    },
    updateTopping(_, { id, input: { name } }) {
      if (!toppingDB[id]) {
        throw new Error('No topping with id: ' + id);
      }
  
      toppingDB[id].updateTopping(name);
  
      return toppingDB[id];
    },
    deleteTopping(_, { id }) {
      if (!toppingDB[id]) {
        throw new Error('No topping with id: ' + id);
      }
  
      delete toppingDB[id];
  
      return true;
    },
  },
};

export { toppingResolver, toppingDB };
