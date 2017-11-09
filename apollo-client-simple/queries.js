import gql from 'graphql-tag';

function createTopping(name) {
  return gql(`
    mutation {
      createTopping(input: {
        name: "${name}"
    }) {
        id
        name
      }
    }
  `);
}

function updateTopping(id, name) {
  return gql(`
    mutation {
      updateTopping(id: "${id}", input: {
        name: "${name}"
      }) {
        id
        name
      }
    }
  `);
}

function createPizza(name, toppings) {
  return gql`
    mutation {
      createPizza(
        input: {
          name: "Mushroom pizza"
          toppings: 
        }) {
        id
        toppings {
          name
        }
      }
    }
  `;
}

export {
  createTopping,
  updateTopping,
  createPizza,

};